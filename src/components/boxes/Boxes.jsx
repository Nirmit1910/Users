import React from "react";
import "./boxes.css";
import { useDispatch } from "react-redux";
import { getUser } from "../../state/index.js";

const Boxes = ({ user }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(getUser(user.id));
  };
  return (
    <div className="box">
      <button onClick={handleClick}>{user.id}</button>
    </div>
  );
};

export default Boxes;
