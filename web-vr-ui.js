const onEnterVrPressedEventIOS13 = function () {

    if (DeviceOrientationEvent && DeviceOrientationEvent.requestPermission && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission().then((state) => {
            if (state === "granted") {
                self.camera.camera.enterVr(function (err) {
                    if (err) {
                        console.warn(err);
                    }
                });
            } else if (state === "denied") {
                alert("Permission is denied !")
            }

        })
    }

}

if (window.navigator.userAgent.includes("OS 13")) {
    this.vrButtonDiv.addEventListener('click', onEnterVrPressedEventIOS13, false);

} else {
    this.vrButtonDiv.addEventListener('click', onEnterVrPressedEvent, false);
    onEnterVrPressedEvent();
}

};