import React, { useEffect } from "react";
import { firebaseApp, messaging } from "./context/firebaseState";
import { getToken } from "firebase/messaging";

const App = () => {
  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      //* Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BPnNSNEyYjxb221PjExfE-zOoykkCg6XMzTfBGct1DoTSnTLuxqEp098-IZLMVHsW9qSJbxcl3ca-gynZzKoTlw",
      });
      console.log("our token", token);

      
    } else if (permission === "denied") {
      alert("you denied for notification");
    }
  };

  useEffect(() => {
    //* Req user for notification permission
    requestPermission();
  }, []);

  return <>App</>;
};

export default App;
