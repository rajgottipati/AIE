import { GoogleGenAI } from "@google/genai";
import { Chapter } from "../types";

// Note: In a real production app, we would never expose the key on the client side.
// This is for the requested demo architecture.
const getClient = () => {
    const apiKey = process.env.API_KEY || ''; 
    if (!apiKey) {
        console.warn("API Key is missing. Please set process.env.API_KEY");
    }
    return new GoogleGenAI({ apiKey });
};

export const generateResponse = async (
  query: string, 
  contextChapter: Chapter | null,
  history: {role: string, text: string}[]
): Promise<string> => {
  try {
    const ai = getClient();
    
    // Construct a context-aware prompt
    let systemInstruction = "You are an expert AI Engineering assistant. You help users understand technical concepts from the book 'AI Engineering', fully rewritten and expanded by Raj Gottipati for the 2025 edition.";
    
    if (contextChapter) {
        systemInstruction += `\n\nCurrent Context Chapter: ${contextChapter.title}\nSummary: ${contextChapter.summary}\n\nContent:\n${contextChapter.sections.map(s => `## ${s.title}\n${s.content}`).join('\n')}`;
    }

    const model = ai.models.generateContent;
    
    // Use flash for speed in this interactive demo
    const response = await model({
      model: 'gemini-2.5-flash',
      contents: [
        ...history.map(h => ({
            role: h.role,
            parts: [{ text: h.text }]
        })),
        {
            role: 'user',
            parts: [{ text: query }]
        }
      ],
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the AI service right now. Please check your API configuration.";
  }
};