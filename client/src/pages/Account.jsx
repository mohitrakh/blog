import React from "react";
import { useParams } from "react-router-dom";

const Account = () => {
  const { username } = useParams();
  return (
    <div>
      <form action="">
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
          />
        </div>
      </form>
    </div>
  );
};

export default Account;
