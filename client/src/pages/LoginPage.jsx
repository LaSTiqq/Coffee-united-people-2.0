import Header from "~/components/header/Header";
import Login from "~/components/login/Login";
import Footer from "~/components/footer/Footer";

const LoginPage = () => {
  return (
    <>
      <Header buttonHome={""} />
      <Login buttonRegister={"register"} />
      <Footer />
    </>
  );
};

export default LoginPage;
