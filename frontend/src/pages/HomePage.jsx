import Header from "~/components/header/Header";
import Home from "~/components/home/Home";
import Footer from "~/components/footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header buttonHome={""} />
      <Home buttonRegister={"register"} buttonLogin={"login"} />
      <Footer />
    </>
  );
};

export default HomePage;
