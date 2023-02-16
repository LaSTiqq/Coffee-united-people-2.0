import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import Cookies from "js-cookie";
import { LoggedInContext } from "../../utils/ContextHook";
import "./chat.css";

const Chat = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const messagesEndRef = useRef(null);
  const { login, isLoggedIn } = useContext(LoggedInContext);

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
    if (!isLoggedIn || !token) {
      navigate("/login");
    }
  }, [isLoggedIn, token, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const socket = io("http://localhost:3001", {
      path: "/p/chat",
    });
    socket.emit("sendMessage", { message, name: login });
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
                message.name === login ? "sent" : "received"
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
            Send&nbsp;<i class="fa-regular fa-paper-plane d-inline"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
