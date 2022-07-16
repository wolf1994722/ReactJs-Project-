import React from "react";
import WithContext2 from "./$59WithContext2";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
// attribute must be value
// export only function as default and other as export only
function WithContext1() {
  return (
    <div>
      <UserContext.Provider value="vishal">
        <ChannelContext.Provider value="papau">
          <WithContext2></WithContext2>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default WithContext1;
