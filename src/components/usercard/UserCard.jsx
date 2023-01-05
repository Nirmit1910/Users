import React from "react";
import "./usercard.css";
import { useSelector,useDispatch } from "react-redux";
import {reset}  from "../../state/index.js";

const UserCard = () => {
  var user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleResetUser = () => {
    dispatch(reset());
  };
  return (
    <div className="usercard">
      <div className="usercard-box">
        {!user.id && <h1>Please click on any user tab for more information</h1>}
        {user.id && (
          <div className="usercard-box-img">
            <img src={user.avatar} alt="avatar"></img>
          </div>
        )}
        {user.id && (
          <div className="usercard-box-info">
            <h3>First Name:{user.firstName}</h3>
            <h3>Last Name:{user.lastName}</h3>
            <h3>Email:{user.email}</h3>
          </div>
        )}
      </div>
      <button onClick={handleResetUser} >Reset</button>
    </div>
  );
};

export default UserCard;
