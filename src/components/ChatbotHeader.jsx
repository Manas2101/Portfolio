import React from 'react';
import { useDispatch } from 'react-redux';
import { clearMessages } from '../features/ui/uislice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faExpand } from '@fortawesome/free-solid-svg-icons';
const ChatbotHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className="chatbot-header">
      <div className='chatbot-header-sub1'>
        <p>TechU</p>
        <p className="chatbot-header-sub">Your Virtual Assistant</p>
      </div>
      <div className='chatbot-header-buttons'>
        <button onClick={() => dispatch(clearMessages())} className="icon-button">
          <FontAwesomeIcon icon={faUndo} />
        </button>
        <button onClick={() => {}} className="icon-button">
          <FontAwesomeIcon icon={faExpand} />
        </button>
      </div>
    </div>
  );
};

export default ChatbotHeader;