import React from "react";
import "./usercard.css";
import logo from "../../assets/css.png";
import { useSelector } from "react-redux";

const UserCard = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="usercard">
      <div className="usercard-box">
        {!user.id && <h1>Click to get User Data</h1>}
        {user.id && (
          <div className="usercard-box-img">
            <img src={user.avatar} alt="avatar"></img>
          </div>
        )}
        {user.id && (
          <div className="usercard-box-info">
            <h3>First Name:{user.first_name}</h3>
            <h3>Last Name:{user.last_name}</h3>
            <h3>Email:{user.email}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
