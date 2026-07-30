import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini API client on the server side
const getAiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// API Endpoint for Luxury Travel Concierge AI
app.post("/api/concierge", async (req, res) => {
  try {
    const { message, programContext, userPreferences } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getAiClient();
    if (!ai) {
      return res.status(500).json({
        error: "GEMINI_API_KEY is missing on server",
        fallback: "안녕하세요! Luxe China Expeditions VIP 컨시어지입니다. 현재 AI 서비스 설정 중입니다. 고객센터(1588-8888) 또는 카카오톡 오픈채팅으로 문의해 주시면 친절히 안내해 드리겠습니다.",
      });
    }

    const systemInstruction = `
You are the Chief Travel Concierge for 'Luxe China Expeditions' (至臻中國), an ultra-luxury bespoke travel agency in Seoul catering to high-net-worth individuals, executives, and EMBA alumnus groups (e.g., SNU EMBA).
You specialize in premium experiential journeys to China featuring fine dining, authentic Baijiu (백주) tasting, UNESCO culture, VIP access, luxury hotels, and effortless seamless logistics.

Tone: Professional, warm, respectful, cultured, and knowledgeable. Speak in natural, polished Korean.

Key Knowledge Base:
1. Featured Main Itinerary: "중국 서부 3개 도시 미식과 백주 문화 탐방 (4박 5일)"
   - Route: Seoul (ICN) -> Chongqing (1 night, Raffles City, Hotpot, Hongyadong) -> Maotai Town (2 nights, Guozhou Liquor Museum, Maotai distillery, Tianniang scenic view, 53° Flying Fairy pairing dinner at 1915 Square, Hilton Garden Inn) -> Xi'an (1 night, Terracotta Warriors VIP Korean guide, Ancient City Wall, Muslim Quarter night market, Grand Tang Mall night show, Sofitel Xi'an) -> Seoul (ICN).
   - Budget: ~2,400,000 ~ 3,200,000 KRW per person (flights/hotels included, fine liquor extra).
   - Transit & Visa: 240-hour Visa-Free Transit (무비자 240시간 경유 정책) available when traveling Seoul -> Chongqing -> Maotai -> Xi'an -> Seoul, or direct visa guidance.
   - Payment: Alipay/WeChat Pay registration with Korean credit cards is highly recommended before departure.

2. Other 9 Luxury Programs:
   - Jiangnan Water Town & Longjing Tea (Hangzhou/Wuzhen 4N5D)
   - Yunnan Tea-Horse Road & Jade Dragon Snow Mountain (Lijiang/Shangri-La 5N6D)
   - Sichuan Panda VIP & Private Chef Cooking Masterclass & Mount Qingcheng Taoism (4N5D)
   - Guilin Karst Bamboo Rafting & Cave Fine Dining (3N4D)
   - Dunhuang Silk Road Desert Glamping & Mogao Caves Restricted Access (4N5D)
   - Beijing Imperial Palace After-Hours VIP Access & Great Wall Champagne Sunset (3N4D)
   - Zhangjiajie Avatar Mountains & Private Helicopter Scenic Tour (4N5D)
   - Greater Bay Area Michelin Stars & Hong Kong Fine Yacht (4N5D)
   - Xinjiang Kanas Lake Wilderness Log Cabins & Kazakh Folk Experience (6N7D)

Provide tailored recommendations, answer flight/hotel/visa questions, advise on customized group quotes, and give expert tips on Chinese Baijiu tasting etiquette (e.g. 53° Flying Fairy Kweichow Moutai).
Keep answers concise, scannable, elegant, and helpful. Format with clean bullet points when describing itineraries or tips.
`;

    let promptContext = `User message: ${message}\n`;
    if (programContext) {
      promptContext += `Selected Program Context: ${JSON.stringify(programContext)}\n`;
    }
    if (userPreferences) {
      promptContext += `User Preferences (Group size, dates, budget): ${JSON.stringify(userPreferences)}\n`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: promptContext,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return res.json({ reply: response.text });
  } catch (error: any) {
    console.error("Concierge API Error:", error);
    return res.status(500).json({
      error: error.message || "Failed to generate concierge response",
    });
  }
});

async function startServer() {
  // Vite middleware in development mode
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Luxe China Travel server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
