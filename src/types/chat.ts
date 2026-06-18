// src/types/chat.ts

export type MessageRole = "user" | "bot";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  followUp?: string[];
  timestamp: number;
}
