
function download(data, filename, type) {
    var platforms = Ionic.platforms;
    if (platforms.includes("capacitor") && platforms.includes("android")) {
        alert(Android.sendData(data, filename));
    } else {
        var file = new Blob([data], {
            type: type
        });
        if (window.navigator.msSaveOrOpenBlob) // IE10+
            window.navigator.msSaveOrOpenBlob(file, filename);
        else { // Others
            var a = document.createElement("a"),
                url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    }
}

function exporter() {
    var platforms = Ionic.platforms;

    if (platforms.includes("capacitor") && platforms.includes("android")) {
        realimgCanvas = document.getElementById('wPaint-canvas');
        imgCanvas = document.getElementById('tmpCanvas');
        imgAsDataURL = imgCanvas.toDataURL("image/png");
        var ctx = imgCanvas.getContext("2d");

        img = document.getElementById("mat");
        ctx.drawImage(img, 0, 0, tmpCanvas.width, tmpCanvas.height);

        var origCtx = imgCanvas.getContext('2d');

        ctx.drawImage(realimgCanvas, 0, 0, tmpCanvas.width, tmpCanvas.height);

        //    link = document.getElementById("downloadPic")
        //    link.href = imgCanvas.toDataURL("image/jpg");
        //    link.click()
        alert(Android.sendImgData(imgCanvas.toDataURL("image/png").split("data:image/png;base64,")[1], "myimage.png"));
    } else {
        realimgCanvas = document.getElementById('wPaint-canvas');
        imgCanvas = document.getElementById('tmpCanvas');
        imgAsDataURL = imgCanvas.toDataURL("image/png");
        var ctx = imgCanvas.getContext("2d");

        img = document.getElementById("mat");
        ctx.drawImage(img, 0, 0, tmpCanvas.width, tmpCanvas.height);

        var origCtx = imgCanvas.getContext('2d');

        ctx.drawImage(realimgCanvas, 0, 0, tmpCanvas.width, tmpCanvas.height);

        link = document.getElementById("downloadPic")
        link.href = imgCanvas.toDataURL("image/jpg");
        link.click()
    }
}

function textFile(filename) {
    var reader = (window.XMLHttpRequest != null) ?
        new XMLHttpRequest() :
        new ActiveXObject("Microsoft.XMLHTTP");
    reader.open("GET", filename, false);
    reader.send();
    return reader.responseText
    // .split(/\r\n|\n|\r/); //split(/(\r\n|\n)/g)
}