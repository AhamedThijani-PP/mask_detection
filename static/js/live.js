// Start Camera Feed
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        document.getElementById('video').srcObject = stream;
    })
    .catch(function (err) {
        console.error("Error accessing the camera:", err);
    });

// Capture Frame and Send to Django
function captureFrame() {
    let video = document.getElementById('video');
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    let imageData = canvas.toDataURL('image/jpeg'); // Convert to base64

    fetch('/process_frame/', {  // Django API endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: imageData })
    })
    .then(response => response.json())
    .then(data => console.log("Mask Detection Result:", data))
    .catch(error => console.error("Error:", error));
}

// Capture frame every second
setInterval(captureFrame, 1000);