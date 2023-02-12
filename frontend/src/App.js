import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoggedInContextProvider from "./utils/ContextHook";
import WelcomePage from "./pages/WelcomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedPage from "./pages/ProtectedPage";

function App() {
  return (
    <LoggedInContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/p/protected" element={<ProtectedPage />} />
        </Routes>
      </Router>
    </LoggedInContextProvider>
  );
}

export default App;
