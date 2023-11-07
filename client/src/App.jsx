import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./utils/ProtectedRoute";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ChatPage from "./pages/ChatPage";

function DynamicProtectedRoute() {
  const { routeName } = useParams();
  const routeComponents = {
    profile: <ProfilePage />,
    chat: <ChatPage />,
  };
  const selectedRoute = routeComponents[routeName];
  
  return (
    <ProtectedRoute>
      {selectedRoute}
    </ProtectedRoute>
  );
}

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/p/:routeName/*" element={<DynamicProtectedRoute />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
