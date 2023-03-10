import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import "./chat.css";

const Chat = () => {
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.username);

  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:3001", {
      path: "/p/chat",
    });
    socket.on("receivedMessage", (newMessages) => {
      setMessages(newMessages);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const socket = io("http://localhost:3001", {
      path: "/p/chat",
    });
    socket.emit("sendMessage", { message, name: username });
    setMessage("");
  };

  return (
    <div className="container-fluid bg-color chat">
      <div className="container rounded p-4">
        <h1 className="text-center mb-2">Chat</h1>
        <ul>
          {messages.map((message, index) => (
            <li
              key={index}
              className={`rounded ${
                message.name === username ? "sent" : "received"
              }`}
            >
              <div>
                <span className="fw-bold">{message.name}: </span>
                <span className="d-inline-block px-3 py-2 rounded text-break">
                  {message.message}
                </span>
              </div>
            </li>
          ))}
          <li ref={messagesEndRef}></li>
        </ul>
        <form onSubmit={handleSubmit} className="d-flex align-items-center">
          <input
            placeholder="Enter your message"
            type="text"
            className="form-control me-2"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
          <button type="submit" className="btn btn-warning">
            Send&nbsp;<i className="fa-regular fa-paper-plane d-inline"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
