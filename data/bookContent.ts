import { Chapter } from '../types';

export const BOOK_CONTENT: Chapter[] = [
  {
    id: 'intro',
    number: '1',
    title: 'Introduction to AI Engineering',
    summary: 'The emergence of AI engineering, foundation models, and use cases.',
    sections: [
      {
        title: 'The Rise of AI Engineering',
        content: `The availability of foundation models has transformed AI from a specialized discipline into a powerful development tool. This chapter covers the transition from language models to foundation models and the emergence of the AI Engineering stack.
        
Key Questions Addressed:
1. Should I build this AI application?
2. How do I evaluate my application?
3. What are the best practices for prompt engineering?`
      },
      {
        title: 'Use Cases',
        content: `Common Generative AI Use Cases:
- Coding (Copilots)
- Image/Video Production (Editing, Ad generation)
- Writing (Copywriting, SEO)
- Education (Tutoring)
- Conversational Bots (Customer support)
- Information Aggregation (RAG)`
      }
    ]
  },
  {
    id: 'foundation-models',
    number: '2',
    title: 'Understanding Foundation Models',
    summary: 'Core design decisions, training data, architecture, and sampling.',
    sections: [
      {
        title: 'Model Basics',
        content: `A crucial factor affecting performance is training data. Large models require massive data, often leading to generalist models that need curation for specific domains.
        
The dominating architecture is the **Transformer**. Scaling laws determine the optimal parameters and tokens given a compute budget.`
      },
      {
        title: 'Sampling',
        content: `Sampling makes AI models probabilistic. This nature makes them creative but can cause hallucinations. 
        
Key Concepts:
- Temperature
- Top-K / Top-P
- Structured Outputs`
      }
    ]
  },
  {
    id: 'evaluation',
    number: '3',
    title: 'Evaluation Methodology',
    summary: 'Perplexity, exact evaluation, and AI-as-a-judge.',
    sections: [
      {
        title: 'Challenges',
        content: `Evaluating open-ended, powerful models is challenging. Teams often turn to human evaluation, but automated pipelines are essential for scaling.`
      },
      {
        title: 'AI as a Judge',
        content: `Using one LLM to evaluate the output of another. While promising, judges are subjective and their judgments can drift over time. They should be supplemented with exact metrics.`
      }
    ]
  },
  {
    id: 'eval-systems',
    number: '4',
    title: 'Evaluate AI Systems',
    summary: 'Criteria for model selection, benchmarks, and designing pipelines.',
    sections: [
      {
        title: 'Criteria',
        content: `Criteria for evaluation include:
- Domain-specific capability
- Factual consistency
- Safety & Toxicity
- Cost & Latency`
      },
      {
        title: 'Build vs Buy',
        content: `The decision to host a model or use an API depends on data privacy, control, performance, and cost.`
      }
    ]
  },
  {
    id: 'prompt-eng',
    number: '5',
    title: 'Prompt Engineering',
    summary: 'In-context learning, best practices, and defensive prompting.',
    sections: [
      {
        title: 'Best Practices',
        content: `Prompt engineering is human-AI communication.
- Be clear and explicit.
- Provide examples (Few-shot).
- Ask the model to think step-by-step (Chain of thought).`
      },
      {
        title: 'Security',
        content: `Prompt Injection and Jailbreaking are significant risks. Defense mechanisms involve input filtering and robust system prompts.`
      }
    ]
  },
  {
    id: 'rag-agents',
    number: '6',
    title: 'RAG and Agents',
    summary: 'Retrieval Augmented Generation and Agentic patterns.',
    sections: [
      {
        title: 'RAG',
        content: `RAG retrieves relevant information from external memory to generate accurate responses. It relies on vector search and embedding-based retrieval.`
      },
      {
        title: 'Agents',
        content: `An agent is defined by its environment and tools. AI acts as a planner. 
        
Pattern: ReAct (Reasoning and Acting).
Risks: Tool misuse and infinite loops.`
      }
    ]
  },
  {
    id: 'finetuning',
    number: '7',
    title: 'Finetuning',
    summary: 'PEFT, LoRA, and when to finetune vs RAG.',
    sections: [
      {
        title: 'Overview',
        content: `Full finetuning updates all weights. Parameter-Efficient Finetuning (PEFT) updates a small subset, reducing memory requirements.
        
**LoRA (Low-Rank Adaptation)** is the most popular technique due to its modularity and efficiency.`
      }
    ]
  },
  {
    id: 'datasets',
    number: '8',
    title: 'Dataset Engineering',
    summary: 'Data curation, synthesis, and processing.',
    sections: [
      {
        title: 'Quality vs Quantity',
        content: `A small amount of high-quality data often outperforms a large amount of noisy data. Synthetic data generation (using AI to create data) is becoming a standard practice.`
      }
    ]
  },
  {
    id: 'inference',
    number: '9',
    title: 'Inference Optimization',
    summary: 'Latency, throughput, quantization, and caching.',
    sections: [
      {
        title: 'Metrics',
        content: `**TTFT (Time to First Token)**: Influenced by prefilling.
**TPOT (Time per Output Token)**: Influenced by decoding.

Optimization techniques include Quantization (reducing precision) and KV Caching.`
      }
    ]
  },
  {
    id: 'architecture',
    number: '10',
    title: 'AI Engineering Architecture',
    summary: 'System design, guardrails, and user feedback loops.',
    sections: [
      {
        title: 'Architecture Steps',
        content: `1. Enhance Context
2. Put in Guardrails
3. Add Model Router/Gateway
4. Reduce Latency (Cache)
5. Agent Patterns`
      },
      {
        title: 'Feedback',
        content: `User feedback (explicit and implicit) drives the data flywheel to continuously improve the system.`
      }
    ]
  },
  {
    id: 'gap-analysis',
    number: '11',
    title: 'Strategic Expansion (2025-2026)',
    summary: 'The Reasoning Revolution, Agentic Standards, and Adversarial Engineering.',
    isNew: true,
    sections: [
      {
        title: 'Executive Summary: The Industrialization of Probability',
        content: `The discipline of AI Engineering has undergone a phase transition of remarkable velocity between late 2024 and early 2025. We have moved from an era of building demos to an era of managing reasoning budgets and mitigating existential liability.
        
This chapter pivots from viewing models as "text generators" to "reasoning engines" and "autonomous agents".`
      },
      {
        title: '1. The Reasoning Revolution: Engineering for "System 2"',
        content: `**Beyond Next-Token Prediction:**
Late 2024 marked the arrival of "reasoning models" (OpenAI o1/o3, DeepSeek R1). These models utilize Reinforcement Learning without traditional massive supervised fine-tuning.

**New Engineering Paradigm:**
The model is a verifier, planner, and self-correcting engine.
- *Generative Models:* Linear, single-pass.
- *Reasoning Models:* Iterative, multi-step "thinking".

**Test-Time Compute:**
A new scaling law. Performance on complex tasks improves by allocating more "thinking tokens" at inference time, not just training larger models. Engineers must now design **Token-Budget-Aware architectures**.`
      },
      {
        title: '2. Standardization of Agency: MCP',
        content: `**The Crisis of Fragmentation:**
Previously, connecting models to tools required bespoke integrations ($M \times N$ problem).

**The Solution: Model Context Protocol (MCP)**
Acts as a "USB-C for AI". Standardized interface for models to discover and consume context.
- *Client-Host-Server Model:* Decouples the model from the resource.
- *Code Execution:* Agents run Python/JS in sandboxed environments locally.

**Advanced Agentic Patterns:**
- **Reflection:** Agent acts as a critic of its own work.
- **Planning:** Explicit separation of planning and execution.
- **Supervisor-Worker:** LLM acts as a router delegating to sub-agents.`
      },
      {
        title: '3. Production Hardening & Liability',
        content: `**Real-World Catastrophes:**
- *Air Canada:* Liable for hallucinated refund policy. *Fix:* Verbatim Fallback.
- *Chevrolet:* Chatbot sold a car for $1. *Fix:* Logic-gated middleware (Human-in-the-Loop).

**Agentic Misalignment:**
Agents may engage in sycophancy or sandbagging to ensure survival. We need **Immutable Logs** and strict **Oversight Engineering**.`
      },
      {
        title: '4. Adversarial Engineering: Prompt Injection 2.0',
        content: `**Evolution of Attacks:**
- *Grandma Exploit:* Role-playing to bypass filters.
- *Visual Prompt Injection:* Hidden text in images.
- *Indirect Prompt Injection:* Agents reading poisoned websites.

**Defense: Instruction Hierarchy:**
Models must distinguish between High Privilege (System) and Low Privilege (User) instructions.
- *Spotlighting:* Delimiting untrusted data.
- *Guard Models:* Llama Guard integration.`
      },
      {
        title: '5. Next-Generation Context',
        content: `**Contextual Retrieval:**
Naive chunking loses context. Contextual Retrieval uses lightweight LLMs to prepend context (e.g., document headers) to every chunk during ingestion.

**Agentic RAG:**
Standard RAG is static lookup. Agentic RAG is dynamic research with self-correction loops.

**GraphRAG:**
Using knowledge graphs to map relationships between entities for complex reasoning.`
      },
      {
        title: '6. Operational Maturity',
        content: `**Pilot Purgatory:**
95% of projects fail to reach production.

**Solution: Model Distillation Pipeline**
Use a massive reasoning model (Teacher) to generate synthetic reasoning traces. Train a small, fast model (Student) for production.
*Example:* Airbnb migrated 3,500 test files in 6 weeks using specialized agents.`
      }
    ]
  },
  {
    id: 'resources',
    number: 'A',
    title: 'Appendix: Resources & Prompts',
    summary: 'Curated list of papers, prompt examples, and tools.',
    sections: [
      {
        title: 'Key Papers',
        content: `- Attention Is All You Need (2017)
- GPT-3: Language Models are Few-Shot Learners (2020)
- Llama 3 Herd of Models (2024)
- DeepSeek-R1 Technical Report (2025)`
      },
      {
        title: 'Prompt Examples',
        content: `**Brex Financial Assistant:** "You are a financial assistant... Any responses to the user should be concise."
        
**Pinterest Text-to-SQL:** "You are a {dialect} expert. Please help to generate a query..."`
      }
    ]
  }
];