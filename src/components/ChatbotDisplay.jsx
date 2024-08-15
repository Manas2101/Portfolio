import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faUser } from '@fortawesome/free-solid-svg-icons';

const ChatbotDisplay = () => {
  const messages = useSelector((state) => state.ui.messages);

  return (
    <div className="chat-display-container">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`chat-message ${msg.sender === 'bot' ? 'bot-message' : 'user-message'}`}
        >
          <FontAwesomeIcon
            icon={msg.sender === 'bot' ? faRobot : faUser}
            className="message-icon"
          />
          <div className="message-text">{msg.message}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatbotDisplay;
