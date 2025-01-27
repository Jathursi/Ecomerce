// import React, { useState } from "react";

// const Chatbot = () => {
//     const [messages, setMessages] = useState([]); // Stores chat messages
//     const [input, setInput] = useState(""); // Stores the user input
//     const [suggestedQuestions, setSuggestedQuestions] = useState([
//         "What is your return policy?",
//         "How can I track my order?",
//         "What are your payment methods?",
//         "Do you offer international shipping?",
//     ]); // Predefined suggested questions

//     // Handles sending a message
//     const sendMessage = () => {
//         if (input.trim() === "") return; // Prevent sending empty messages

//         // Append the user message to chat
//         const userMessage = { sender: "user", text: input };
//         setMessages([...messages, userMessage]);

//         // Send message to the backend
//         fetch("http://localhost:8081/api/chat/chat", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ message: input }),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 // Append the bot's response to chat
//                 const botMessage = { sender: "bot", text: data.response };
//                 setMessages((prevMessages) => [...prevMessages, botMessage]);
//                 setInput(""); // Clear the input field
//             })
//             .catch((error) => {
//                 console.error("Error:", error);
//             });
//     };

//     // Handles selecting a suggested question
//     const handleSuggestedClick = (question) => {
//         setInput(question); // Set the question as the input
//         sendMessage(); // Automatically send the question
//     };

//     return (
//         <div className="chatbot-box" style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
//             {/* Chatbox */}
//             <div style={{ maxWidth: "600px", margin: "0 auto" }}>
//                 <div
//                     style={{
//                         border: "1px solid #ccc",
//                         padding: "10px",
//                         height: "400px",
//                         overflowY: "scroll",
//                     }}
//                 >
//                     {/* Render chat messages */}
//                     {messages.map((msg, index) => (
//                         <div
//                             key={index}
//                             style={{
//                                 textAlign: msg.sender === "user" ? "right" : "left",
//                                 margin: "5px 0",
//                             }}
//                         >
//                             <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong>{" "}
//                             {msg.text}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Input form */}
//                 <div style={{ display: "flex", marginTop: "10px" }}>
//                     <input
//                         type="text"
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                         placeholder="Type a message..."
//                         style={{ width: "80%", padding: "10px" }}
//                         autoComplete="off"
//                     />
//                     <button
//                         onClick={sendMessage}
//                         style={{
//                             padding: "10px",
//                             backgroundColor: "#007BFF",
//                             color: "#fff",
//                             border: "none",
//                             cursor: "pointer",
//                         }}
//                     >
//                         Send
//                     </button>
//                 </div>
//             </div>

//             {/* Suggested Questions */}
//             {/* <div style={{ marginTop: "20px" }}>
//                 <h3>Suggested Questions:</h3>
//                 <div>
//                     {suggestedQuestions.map((question, index) => (
//                         <button
//                             key={index}
//                             onClick={() => handleSuggestedClick(question)}
//                             style={{
//                                 margin: "5px",
//                                 padding: "8px",
//                                 backgroundColor: "#f0f0f0",
//                                 border: "1px solid #ccc",
//                                 cursor: "pointer",
//                             }}
//                         >
//                             {question}
//                         </button>
//                     ))}
//                 </div>
//             </div> */}
//         </div>
//     );
// };

// export default Chatbot;

import React, { useState } from "react";
import botImage from "../Assets/img.png"; // Import the bot image

const Chatbot = () => {
    const [messages, setMessages] = useState([]); // Stores chat messages
    const [input, setInput] = useState(""); // Stores the user input
    const [suggestedQuestions, setSuggestedQuestions] = useState([
        "What is your return policy?",
        "How can I track my order?",
        "What are your payment methods?",
        "Do you offer international shipping?",
    ]); // Predefined suggested questions

    // Handles sending a message
    const sendMessage = () => {
        if (input.trim() === "") return; // Prevent sending empty messages

        // Append the user message to chat
        const userMessage = { sender: "user", text: input };
        setMessages([...messages, userMessage]);

        // Send message to the backend
        fetch("http://localhost:8081/api/chat/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Append the bot's response to chat
                const botMessage = { sender: "bot", text: data.response };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
                setInput(""); // Clear the input field
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    // Handles selecting a suggested question
    const handleSuggestedClick = (question) => {
        setInput(question); // Set the question as the input
        sendMessage(); // Automatically send the question
    };

    return (
        <div className="chatbot-box" style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
            {/* Chatbox */}
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                <div
                    style={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        height: "400px",
                        overflowY: "scroll",
                    }}
                >
                    {/* Render chat messages */}
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                                alignItems: "center",
                                margin: "5px 0",
                            }}
                        >
                            {msg.sender === "bot" && (
                                <img
                                    src={botImage}
                                    alt="Bot"
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        marginRight: "10px",
                                    }}
                                />
                            )}
                            <div
                                style={{
                                    backgroundColor: msg.sender === "user" ? "#007BFF" : "#f0f0f0",
                                    color: msg.sender === "user" ? "#fff" : "#000",
                                    padding: "10px",
                                    borderRadius: "10px",
                                    maxWidth: "70%",
                                }}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input form */}
                <div style={{ display: "flex", marginTop: "10px" }}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message..."
                        style={{ width: "80%", padding: "10px" }}
                        autoComplete="off"
                    />
                    <button
                        onClick={sendMessage}
                        style={{
                            padding: "10px",
                            backgroundColor: "#007BFF",
                            color: "#fff",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Send
                    </button>
                </div>
            </div>

            {/* Suggested Questions */}
            {/* <div style={{ marginTop: "20px" }}>
                <h3>Suggested Questions:</h3>
                <div>
                    {suggestedQuestions.map((question, index) => (
                        <button
                            key={index}
                            onClick={() => handleSuggestedClick(question)}
                            style={{
                                margin: "5px",
                                padding: "8px",
                                backgroundColor: "#f0f0f0",
                                border: "1px solid #ccc",
                                cursor: "pointer",
                            }}
                        >
                            {question}
                        </button>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default Chatbot;