const downloadText = document.getElementById("download");
const uploadText = document.getElementById("upload");
const pingText = document.getElementById("ping");
const startButton = document.getElementById("startTest");

const ipText = document.getElementById("ip");
const ispText = document.getElementById("isp");


// Get IP information
fetch("https://ipapi.co/json/")
.then(response => response.json())
.then(data => {
    ipText.textContent = data.ip;
    ispText.textContent = data.org;
})
.catch(() => {
    ipText.textContent = "Unavailable";
    ispText.textContent = "Unavailable";
});


// Ping test
async function testPing() {
    const start = performance.now();

    await fetch("https://www.google.com/favicon.ico?" + Math.random(), {
        mode: "no-cors"
    });

    const end = performance.now();

    return Math.round(end - start);
}


// Download speed test
async function testDownload() {

    const fileSize = 5 * 1024 * 1024; // 5MB
    const url =
    "https://speed.cloudflare.com/__down?bytes=" + fileSize;

    const start = performance.now();

    const response = await fetch(url);
    await response.blob();

    const end = performance.now();

    const seconds = (end - start) / 1000;

    const bits = fileSize * 8;

    const mbps = (bits / seconds) / 1000000;

    return mbps.toFixed(2);
}


// Start button
startButton.onclick = async () => {

    startButton.textContent = "Testing...";

    try {

        const ping = await testPing();
        pingText.textContent = ping + " ms";


        const download = await testDownload();
        downloadText.textContent = download + " Mbps";


        // Upload unavailable on GitHub Pages
        uploadText.textContent = "N/A";


    } catch (error) {

        downloadText.textContent = "Error";
        pingText.textContent = "--";

    }


    startButton.textContent = "Start Test";
};
