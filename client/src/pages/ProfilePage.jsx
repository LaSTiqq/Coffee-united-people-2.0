import Header from "~/components/header/Header";
import Sidebar from "~/components/sidebar/Sidebar";
import Profile from "~/components/profile/Profile";

const ProfilePage = () => {
  return (
    <>
      <Header buttonHome={"p/profile"} />
      <Sidebar buttonProfile={"p/profile"} buttonChat={"p/chat"} />
      <Profile />
    </>
  );
};

export default ProfilePage;
