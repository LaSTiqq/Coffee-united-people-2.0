import Header from "../components/header/Header";
import Chat from "../components/chat/Chat";
import Footer from "../components/footer/Footer";

const ChatPage = () => {
  return (
    <>
      <Header buttonHome={"p/chat"} />
      <Chat />
      <Footer />
    </>
  );
};

export default ChatPage;
