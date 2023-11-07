import { useEffect } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import "./profile.css";

const Profile = () => {

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await axios.get('http://localhost:3001/p/profile', { withCredentials: true });
      } catch (error) {
        toast.error('Token is missing');
      }
    };
    verifyToken();
  }, []);

  return (
    <div className="container profile">
      <div className="row">
        <div className="col-10">
          <h1 className="h1 text-center mb-2">Profile</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
