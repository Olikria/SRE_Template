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
    const image = new Image();
    const titleOverlay = document.getElementById('jobTitleOverlay');

    image.crossOrigin = 'Anonymous';  // This can help bypass some security restrictions
    image.src = 'We_Are_Hiring_Template_for_HR.png'; 

    image.onload = function() {
        canvas.width = image.width;
        canvas.height = image.height;

        ctx.drawImage(image, 0, 0);

        ctx.font = '35px Montserrat';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(titleOverlay.textContent, canvas.width / 2, 642);

        const link = document.createElement('a');
        link.download = 'job_posting_image.png';
        link.href = canvas.toDataURL();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
}

document.getElementById('downloadBtn').addEventListener('click', downloadImage);