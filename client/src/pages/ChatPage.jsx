import Header from "~/components/header/Header";
import Sidebar from "~/components/sidebar/Sidebar";
import Chat from "~/components/chat/Chat";

const ChatPage = () => {
  return (
    <>
      <Header buttonHome={"p/profile"} />
      <Sidebar buttonProfile={"p/profile"} buttonChat={"p/chat"} />
      <Chat />
    </>
  );
};

export default ChatPage;
