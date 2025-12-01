export interface Section {
  title: string;
  content: string; // Markdown-like string
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  summary: string;
  sections: Section[];
  isNew?: boolean; // To highlight the new Gap Analysis
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}