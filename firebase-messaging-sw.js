importScripts("https://www.gstatic.com/firebasejs/11.0.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyBWkPqyh54IRccNz2YjuB1bL5r49YadAP4",
    authDomain: "sayurjuju-bfe82.firebaseapp.com",
    projectId: "sayurjuju-bfe82",
    storageBucket: "sayurjuju-bfe82.firebasestorage.app",
    messagingSenderId: "754413439458",
    appId: "1:754413439458:web:341c9fe99fd9b1550551bb"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const title = payload.notification ? payload.notification.title : payload.data.title;
    const body = payload.notification ? payload.notification.body : payload.data.body;

    self.registration.showNotification(title, {
        body: body,
        icon: "/sayurjuju/icon.png"
    });
});
