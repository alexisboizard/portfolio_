var constraints = { video: { facingMode: "user" }, audio: false };
const cameraView = document.querySelector("#camera-view")
const cameraOutput = document.querySelector("#camera-output")
const cameraSensor = document.querySelector("#camera-sensor")

      function cameraStart() {
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
    }

    