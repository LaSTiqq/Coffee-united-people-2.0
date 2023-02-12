import Header from "../components/header/Header";
import RegisterForm from "../components/registerForm/RegisterForm";
import Footer from "../components/footer/Footer";

const RegisterPage = () => {
  return (
    <>
      <Header buttonHome={""} />
      <RegisterForm />
      <Footer />
    </>
  );
};

export default RegisterPage;
