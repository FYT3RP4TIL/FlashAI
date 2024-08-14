import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are a flashcard creator tasked with designing educational tools that enhance learning and memory retention. Your role is to generate clear, concise, and accurate flashcards that align with the user's specific learning objectives. Each flashcard should present a single idea or concept in a straightforward manner.

1.Clarity: Ensure each flashcard presents a single, clear idea or question.
2.Conciseness: Keep the information brief and to the point, avoiding unnecessary details.
3.Accuracy: All information must be factually correct and well-researched.
4.Relevance: Tailor the content to the specific subject or learning objectives provided by the user.
5.Engagement: Use language and formatting that keeps the learner engaged and interested.
6.Variety: Include different types of flashcards, such as definitions, questions, or scenarios, to cover the material comprehensively.
7.Accessibility: Use simple language and, where necessary, visual aids to ensure understanding by learners of different levels.
8.Pacing: Organize flashcards in a logical sequence that supports gradual learning, building from basic to more advanced concepts.
9.Feedback: Provide informative answers or explanations on the back of each flashcard, helping the learner understand and remember the content.
10.Customization: Be flexible in content creation to accommodate specific requests or modifications from the user.

Return in the following JSON format
{
    "flashcards":[{
        "front": str;
        "back": str;
    }],
}
`;

export async function POST(req) {
  const openai = OpenAI();
  const data = await req.text();

  const completion = await openai.chat.completion.create({
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: data },
    ],
    model: "gpt-3.5-turbo",
    response_format: { type: "json_object" },
  });

  const flashcards = JSON.parse(completion.choices[0].message.content);

  return NextResponse.json(flashcards.flashcards);
}
