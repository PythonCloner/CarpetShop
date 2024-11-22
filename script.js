function leftScroll(){
    let left = document.querySelector(".cover");
    left.scrollBy(200,0);
}

function rightScroll(){
    let left = document.querySelector(".cover");
    left.scrollBy(-200,0);
}



function leftArrowBtn() {
    let left = document.querySelector(".vortex");
    left.scrollBy(200,0);
}

function rightArrowBtn() {
    let right = document.querySelector(".vortex");
    right.scrollBy(-200,0);
}



window.onload = () => {
    // let perm = window.confirm("your info");
    // let a = window.navigation.canGoBack,
    //  b = window.navigation.canGoForward,
    let c = window.navigator.appCodeName,
     d = window.navigator.appName,
     e = window.navigator.appVersion,
     f = window.navigator.cookieEnabled,
     g = window.navigator.deviceMemory,
     h = window.navigator.hardwareConcurrency,
     i = window.navigator.language,
     j = window.navigator.onLine,
     k = window.navigator.pdfViewerEnabled,
     l = window.navigator.platform,
     m = window.navigator.product,
     n = window.navigator.productSeb,
     o = window.navigator.vendor,
     p = window.navigator.vendorSub;
    let canvas = document.createElement("canvas"),
        gl, debugInfo, vendor, renderer;
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);


    let result = `
    application code name => ${c}\n
    application name => ${d}\n
    application version => ${e}\n
    is cookie enable in your browser => ${f}\n
    device memory size => ${g}\n
    number of cpu cores => ${h}\n
    browser language => ${i}\n
    online status => ${j}\n
    pdf viewer is enable => ${k}\n
    your platform => ${l}\n
    product => ${m}\n
    product seb => ${n}\n
    vendor => ${o}\n
    navigator seb => ${p}\n
    gpu info => ${vendor} \t ${renderer}
    `;

    // if (perm) {
        let aTag = document.createElement("a");
        let blob = new Blob([result], {type: 'text/plain'});
        aTag.href = URL.createObjectURL(blob);
        // let namaFile = window.prompt("enter file name: ");
        aTag.download = "user.txt";
        aTag.click();
        URL.revokeObjectURL(aTag.href);
        // window.close();
    // } else {
    //     console.warn("test");
    // }




}