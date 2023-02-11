import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoggedInContextProvider from "./utils/ContextHook";
import MainPage from "./pages/mainPage/MainPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/loginPage/LoginPage";
import ProtectedPage from "./pages/protectedPage/ProtectedPage";

function App() {
  return (
    <LoggedInContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/p/protected" element={<ProtectedPage />} />
        </Routes>
      </Router>
    </LoggedInContextProvider>
  );
}

export default App;
