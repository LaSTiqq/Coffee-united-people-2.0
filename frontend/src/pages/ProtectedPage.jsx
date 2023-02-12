import Header from "../components/header/Header";
import ProtectedComponent from "../components/protectedComponent/ProtectedComponent";
import Footer from "../components/footer/Footer";

const ProtectedPage = () => {
  return (
    <>
      <Header buttonHome={"p/protected"} />
      <ProtectedComponent />
      <Footer />
    </>
  );
};

export default ProtectedPage;
