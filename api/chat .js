export default async function handler(req, res) {
  // CORS සුරක්ෂිතතාව
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const { message, image } = req.body;
    const API_KEY = process.env.GEMINI_API_KEY; // Vercel සිතු ගබඩා වලින්

    const requestBody = {
      contents: [{
        role: 'user',
        parts: [
          {
            text: `ඔබ "Mubra AI 8.v1" - ශ්‍රී ලංකා A/L රසායන විශේෂඥයි. සිංහල මාධ්‍යවෙන් පිළිතුරු දෙන්න.\n\nUser: ${message}`
          },
          ...(image ? [{ inline_data: { mime_type: 'image/jpeg', data: image } }] : [])
        ]
      }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      }
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json({ 
      response: data.candidates[0].content.parts[0].text 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
