import Header from "../components/header/Header";
import MainContent from "../components/mainContent/MainContent";
import Footer from "../components/footer/Footer";

const MainPage = () => {
  return (
    <>
      <Header buttonHome={""} />
      <MainContent buttonRegister={"register"} buttonLogin={"login"} />
      <Footer />
    </>
  );
};

export default MainPage;
