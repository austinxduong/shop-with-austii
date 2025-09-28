import React, { useState, useEffect, useRef } from 'react'
import { FaRobot, FaPaperPlane, FaTimes, FaCommentDots } from 'react-icons/fa'

const isOpen = true
const ChatWidget = () => {
    return (
        <div className={`chat-widget-container ${isOpen ? 'open' : ''}`}>
            {isOpen ? (
                <>
                    <div className="chat-header">
                        <div className="chat-title">
                            <FaRobot/>
                            <h3>Shop with austii</h3>
                        </div>
                        <button className="close-button" onClick={toggleChat}>
                            <FaTimes/>
                        </button>
                    </div>

                    <div className="chat-messages">
                        {messages.map((message, index) => (
                            <div key={index}> 
                                <div className={`message ${message.isAgent ? 
                                    'message-bot' : 'message-user'}`}>
                                    {message.text}
                                </div>
                            </div>
                        ))}

                        <div ref={messageEndRef}/>
                    </div>

                    <form className="chat-input-container" onSubmit={handleMessage}>
                        <input
                        type="text"
                        className="message-input"
                        placeholder="type your message..."
                        value={inputValue}
                        onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="send-button"
                            disabled={inputValue.trim() === ""}
                        >
                            <FaPaperPlane size={16}/>
                        </button>
                    </form>
                </> 
                ) : (
                    <button className="chat-button" onClick={toggleChat}>
                        <FaCommentDots/>
                    </button>
                )}

        </div>
    )
}

export default ChatWidget