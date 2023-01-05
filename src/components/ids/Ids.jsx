import React from "react";
import "./ids.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../state/index.js";
import Boxes from '../boxes/Boxes'

const Ids = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const isLoading = useSelector((state) => state.isLoading);

  
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  console.log(users)
  return (
    <div className="ids">
      {isLoading && <h2>Loading ...</h2>}

      {!isLoading && (
        <div className="ids-boxes">
          {users.map((user, key) => {
            return <Boxes key={user.id} user={user}/>
          })}
        </div>
      )}
    </div>
  );
};

export default Ids;
