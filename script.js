const clickableImages = document.querySelectorAll('.clickable');

clickableImages.forEach((img) => {
    img.addEventListener('click', () => {
        console.log('Image clicked:', img.src); // Debugging line
        // Create a fullscreen container
        const fullscreenContainer = document.createElement('div');
        fullscreenContainer.classList.add('fullscreen');

        // Create a new image element for fullscreen
        const fullscreenImage = document.createElement('img');
        fullscreenImage.src = img.src; // Use the clicked image's source
        fullscreenImage.alt = img.alt; // Use the clicked image's alt text

        // Append the image to the fullscreen container
        fullscreenContainer.appendChild(fullscreenImage);

        // Append the fullscreen container to the body
        document.body.appendChild(fullscreenContainer);

        // Exit fullscreen when clicking on the fullscreen image
        fullscreenContainer.addEventListener('click', () => {
            document.body.removeChild(fullscreenContainer); // Remove the container
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-details');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const detailedText = button.previousElementSibling;
            
            // Toggle visibility of the detailed description
            if (detailedText.style.display === 'none') {
                detailedText.style.display = 'block';
                button.textContent = 'Less Detail'; // Change button text
            } else {
                detailedText.style.display = 'none';
                button.textContent = 'More Detail'; // Revert button text
            }
        });
    });
});
