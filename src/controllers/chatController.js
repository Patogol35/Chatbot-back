const ai = require("../config/gemini");

const chat = async (req, res) => {
    try {
        const { message } = req.body;

        const response = await ai.models.generateContent({
        
            model: "gemini-2.5-pro",
            contents: message
        });

        res.json({
            success: true,
            reply: response.text
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

module.exports = { chat };
