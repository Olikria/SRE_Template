function updateImage() {
    const jobTitleInput = document.getElementById('jobTitle');
    const jobTitleOverlay = document.getElementById('jobTitleOverlay');

    // Set the text content of the jobTitleOverlay to the input value
    jobTitleOverlay.textContent = jobTitleInput.value;

    // Display the jobTitleOverlay
    jobTitleOverlay.style.display = 'block';
}

function downloadImage() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const image = document.getElementById('templateImage');
    const titleOverlay = document.getElementById('jobTitleOverlay');

    canvas.width = image.width;
    canvas.height = image.height;

    // Ensure the image is fully loaded before drawing on the canvas
    image.onload = function() {
        // Draw the image on the canvas
        ctx.drawImage(image, 0, 0);

        // Draw the text on the canvas
        ctx.font = '35px Montserrat';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(titleOverlay.textContent, canvas.width / 2, 642);

        // Create a link and trigger the download
        const link = document.createElement('a');
        link.download = 'job_posting_image.png';
        link.href = canvas.toDataURL();
        document.body.appendChild(link); // Temporarily add to the document
        link.click();
        document.body.removeChild(link); // Clean up by removing the temporary link
    };

    // This is to handle cases where the image might already be loaded
    if (image.complete) {
        image.onload();
    }
}

document.getElementById('downloadBtn').addEventListener('click', downloadImage);