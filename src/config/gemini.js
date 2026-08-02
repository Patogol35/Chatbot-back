const { GoogleGenAI } = require("@google/genai");

console.log("API Key existe:", !!process.env.GEMINI_API_KEY);
console.log("Inicio de la key:", process.env.GEMINI_API_KEY?.substring(0, 10));

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

module.exports = ai;
