import Header from "~/components/header/Header";
import Register from "~/components/register/Register";
import Footer from "~/components/footer/Footer";

const RegisterPage = () => {
  return (
    <>
      <Header buttonHome={""} />
      <Register buttonLogin={"login"} />
      <Footer />
    </>
  );
};

export default RegisterPage;
