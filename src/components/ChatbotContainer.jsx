import React, { useState } from 'react';
import ChatbotHeader from './ChatbotHeader';
import ChatbotDisplay from './ChatbotDisplay';
import UserInput from './UserInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faTimes } from '@fortawesome/free-solid-svg-icons';

const ChatbotContainer = () => {
    const [isChatbotVisible, setIsChatbotVisible] = useState(false);

    const toggleChatbot = () => {
        setIsChatbotVisible(!isChatbotVisible);
    };

    return (
        <div>
            <button onClick={toggleChatbot} className="chatbot-toggle-button">
                {isChatbotVisible ? (
                    <FontAwesomeIcon icon={faTimes} /> 
                ) : (
                    <FontAwesomeIcon icon={faComments} />
                )}
            </button>
            {isChatbotVisible && (
                <div className="chatbot-wrapper">
                    <div className='chatbot-wrapper-sub'>
                    <ChatbotHeader />
                    <ChatbotDisplay />
                    <UserInput />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatbotContainer;
