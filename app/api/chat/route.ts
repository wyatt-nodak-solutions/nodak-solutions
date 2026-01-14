import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are a helpful AI assistant for NoDak Solutions, a web development company based in North Dakota founded by Wyatt. Your role is to:

1. Answer questions about NoDak Solutions' services:
   - Business Websites (local business sites, landing pages, portfolio sites)
   - Web Applications (dashboards, admin panels, booking systems, customer portals)
   - E-Commerce (product catalogs, shopping carts, payment integration)
   - AI Integration (chatbots, content generation, process automation)

2. Help potential clients understand how NoDak Solutions can help with their projects

3. Provide general information about web development best practices

4. Be friendly, professional, and concise in your responses

Keep responses brief but helpful. If someone asks about pricing or specific project details, encourage them to reach out via email at wyatt@nodaksolutions.com for a personalized consultation.`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    const textContent = response.content.find((block) => block.type === "text");
    const reply = textContent && "text" in textContent ? textContent.text : "";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
