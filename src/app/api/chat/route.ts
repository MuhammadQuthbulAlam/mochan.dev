import { NextRequest, NextResponse } from "next/server";
import { matchKnowledge, defaultAnswer } from "@/lib/chatbot-knowledge";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      );
    }

    // Cocokkan pesan dengan knowledge base
    const match = matchKnowledge(message);

    if (match) {
      return NextResponse.json({
        reply: match.answer,
        followUp: match.followUp || [],
      });
    }

    // Jika tidak ada match, berikan jawaban default
    return NextResponse.json({
      reply: defaultAnswer,
      followUp: ["Apa skill-nya?", "Lihat project", "Bisa hubungi dimana?"],
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
