import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Google GenAI
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "Owdium API" });
});

// Chatbot endpoint for Owdium AI Assistant
app.post("/api/chat", async (req, res) => {
  try {
    const { message, language, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    if (!ai) {
      return res.json({
        reply: "Jambo! I am the Owdium AI Assistant. (Note: GEMINI_API_KEY is not configured yet. Set it in Secrets to enable full AI recommendations!). Owdium offers rich audio storytelling, news, and podcasts across Swahili, Yoruba, Hausa, Igbo, Amharic, Zulu, Xhosa, Oromo, Akan, and Somali.",
      });
    }

    const systemInstruction = `You are the friendly, knowledgeable Owdium AI Cultural & Audio Assistant.
Owdium is a premier digital media platform preserving African culture and delivering high-quality audio content (storytelling, education, podcasts, news, literature) in indigenous African languages.
Supported key languages include: Swahili, Yoruba, Hausa, Igbo, Amharic, Zulu, Xhosa, Oromo, Akan, Somali, and more.

Your goals:
1. Answer questions warmly and accurately about African languages, audio stories, proverbs, cultural heritage, and literature.
2. Recommend Owdium audio playlists or shows based on the user's interests (e.g., folklore, language learning, news digest, children's fables, history).
3. Optionally include greetings in the relevant language (e.g., 'Jambo' for Swahili, 'E kaaro / Bawo' for Yoruba, 'Sannu' for Hausa, 'Ndewo' for Igbo, 'Selam' for Amharic, 'Sawubona' for Zulu, 'Molo' for Xhosa, 'Akwaaba' for Akan, 'Nabad' for Somali).
4. Keep answers concise, inspiring, readable, and engaging. Keep responses around 2-4 sentences unless the user asks for a detailed breakdown or story summary.`;

    const contents = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const item of history.slice(-6)) {
        contents.push({
          role: item.role === "user" ? "user" : "model",
          parts: [{ text: item.content }],
        });
      }
    }

    contents.push({
      role: "user",
      parts: [
        {
          text: language
            ? `[Preferred language context: ${language}]\nUser query: ${message}`
            : message,
        },
      ],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Thank you for reaching out to Owdium audio media. How can I assist your audio journey today?";
    return res.json({ reply });
  } catch (err: any) {
    console.error("Chat API error:", err);
    return res.status(500).json({
      error: "Failed to generate AI response",
      details: err?.message || "Internal server error",
    });
  }
});

// Contact endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, language, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required" });
  }
  console.log("Contact submission received:", { name, email, language, message, date: new Date() });
  return res.json({
    success: true,
    message: "Medase / Asante! Thank you for reaching out to Owdium. Our team will get back to you shortly.",
  });
});

// Newsletter endpoint
app.post("/api/newsletter", (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Valid email address is required" });
  }
  console.log("Newsletter subscription:", { email, date: new Date() });
  return res.json({
    success: true,
    message: "Welcome to the Owdium Audio Circle! You have successfully subscribed to weekly audio releases.",
  });
});

// Serve frontend
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Owdium server running on http://0.0.0.0:${PORT}`);
  });
}

start();
