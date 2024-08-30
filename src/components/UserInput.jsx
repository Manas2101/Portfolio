import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../features/ui/uislice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ChatbotData from "../data/ChatbotData.json";

const UserInput = ({ actions }) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      dispatch(addMessage({ message: inputValue.trim(), sender: "user" }));
      const botResponse = getBotResponse(inputValue.trim());
      dispatch(addMessage({ message: botResponse, sender: "bot" }));

      setInputValue("");
    }
  };
  const getBotResponse = (userInput) => {
    const words = userInput.toLowerCase().split(/\s+/);

    for (let intentObj of ChatbotData.intents) {
      for (let keyword of intentObj.keywords) {
        if (words.includes(keyword.toLowerCase())) {
          return intentObj.value;
        }
      }
    }
    return "I'm sorry, I didn't understand that. Can you please type again?";
  };
  return (
    <div className="user-input-container">
      <input
        className="chat-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            handleSendMessage();
          }
        }}
        placeholder="Ask me Anything!"
      />
      <button onClick={handleSendMessage} className="icon-button">
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
};

export default UserInput;
