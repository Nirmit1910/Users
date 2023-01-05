import React from "react";
import "./ids.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getUser } from "../../state/index.js";

const Ids = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const isLoading = useSelector((state) => state.isLoading);

  
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const handleClick = async (id) => {
    dispatch(getUser(id));
  };
  console.log(users)
  return (
    <div className="ids">
      {isLoading && <h4>Loading ...</h4>}

      {!isLoading && (
        <div className="ids-boxes">
          {users.map((user, key) => {
            return (
              <div key={key} className="ids-boxes-box">
                <button onClick={handleClick(user.id)}>{user.id}</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Ids;
