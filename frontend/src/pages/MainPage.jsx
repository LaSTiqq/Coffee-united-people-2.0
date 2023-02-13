import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

const MainPage = () => {
  return (
    <>
      <Header buttonHome={""} />
      <Main buttonRegister={"register"} buttonLogin={"login"} />
      <Footer />
    </>
  );
};

export default MainPage;
