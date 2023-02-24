import Header from "../components/header/Header";
import LoginForm from "../components/loginForm/LoginForm";
import Footer from "../components/footer/Footer";

const LoginPage = () => {
  return (
    <>
      <Header buttonHome={""} />
      <LoginForm buttonRegister={"register"} />
      <Footer />
    </>
  );
};

export default LoginPage;
