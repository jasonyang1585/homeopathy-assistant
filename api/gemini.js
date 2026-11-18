// 這是 Vercel 的無伺服器函式 (Serverless Function)
// 它的作用是安全地保管您的 API Key，不讓前端使用者看到

export default async function handler(req, res) {
  // 只允許 POST 請求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // 從 Vercel 的環境變數中讀取您的 Gemini API Key
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: '伺服器未設定 API Key' });
  }

  // 準備呼叫 Google Gemini 的真實網址
  const googleUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

  try {
    // 將前端傳來的問題，轉傳給 Google
    const googleRes = await fetch(googleUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body) // 前端傳來的 JSON payload
    });

    // 取得 Google 的回覆
    const data = await googleRes.json();
    
    // 將結果回傳給您的前端網頁
    return res.status(googleRes.status).json(data);
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ error: '連線至 Gemini 發生錯誤' });
  }
}