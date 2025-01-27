// // const express = require("express");
// // const { spawn } = require("child_process");
// // const exp = require("constants");
// import express from 'express';
// import { spawn } from 'child_process';
// import Question from '../Model/Question.js';
// import exp from 'constants';

// const router = express.Router();

// router.post("/chat", (req, res) => {
//     const { message } = req.body;

//     // Spawn a Python process for the chatbot
//     const pythonProcess = spawn("python3", ["'../Ecomerce-chatbot/App.py'", message]);

//     // Collect Python script output
//     pythonProcess.stdout.on("data", (data) => {
//         const botResponse = data.toString();
//         res.json({ botResponse }); // Send response to React frontend
//     });

//     pythonProcess.stderr.on("data", (error) => {
//         console.error("Error:", error.toString());
//         res.status(500).json({ error: "Internal server error" });
//     });
// });

// export default router;

import express from 'express';
import axios from 'axios';

const router = express.Router();

router.post("/chat", async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post("http://localhost:5000/get", { msg: message }, {
            headers: { "Content-Type": "application/json" }
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error:", error.toString());
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;