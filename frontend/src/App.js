import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoggedInContextProvider from "./utils/ContextHook";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <LoggedInContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/p/chat" element={<ChatPage />} />
        </Routes>
      </Router>
    </LoggedInContextProvider>
  );
}

export default App;
