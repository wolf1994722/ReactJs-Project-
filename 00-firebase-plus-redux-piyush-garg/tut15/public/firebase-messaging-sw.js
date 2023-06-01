importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyBspbN-VFWkyjv9k4zcbR46D7fYlqw_npk",
    authDomain: "messaging-app-c0149.firebaseapp.com",
    projectId: "messaging-app-c0149",
    storageBucket: "messaging-app-c0149.appspot.com",
    messagingSenderId: "870462565340",
    appId: "1:870462565340:web:59d4f283e10754b9d5fd19",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});