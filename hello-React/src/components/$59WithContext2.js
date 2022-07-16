import React, { useContext } from "react";
import { UserContext, ChannelContext } from "./$59WithContext1";

function WithContext2() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  console.log(user,channel);
  return (
    <div>
      {user} - {channel}
    </div>
  );
}

export default WithContext2;
