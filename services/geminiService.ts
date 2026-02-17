
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIRecommendation = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an AI Advisor for NETHUB DUKEL ENTERPRISE, a top-tier tech firm.
      User wants to know: ${userPrompt}
      Respond as a tech expert, keeping it professional, concise, and focused on how NETHUB DUKEL's services (Software Dev, Cybersecurity, AI, Web) can help.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my neural network. Please try again or reach out to our human team directly!";
  }
};
