(function () {
  let e = document.createElement("script"),
    t = document.head || document.getElementsByTagName("head")[0];
  (e.src =
    "https://cdn.jsdelivr.net/npm/rasa-webchat@1.0.1/lib/index.js"),
    // Replace 1.x.x with the version that you want
    (e.async = !0),
    (e.onload = () => {
      window.WebChat.default(
        {
            initPayload: "/get_started",
            customData: { language: "fr" },
            socketUrl: "https://884b-196-117-171-27.eu.ngrok.io",
            socketPath: "/socket.io",
            showFullScreenButton: true,
            showMessageDate: true,
            showCloseButton: false,
            inputTextFieldHint: "Qu'allons nous apprendre ...?",
            profileAvatar: "https://dl.dropboxusercontent.com/s/p951wuych4xnw0t/jady_profile.png?dl=0"
            //embedded: true
            // add other props here
        },
        null
      );
    }),
    t.insertBefore(e, t.firstChild);
})();

