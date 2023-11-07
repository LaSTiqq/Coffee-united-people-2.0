import { useEffect } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import "./profile.css";

const Profile = () => {
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
