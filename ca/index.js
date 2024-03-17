let index = 0;

function carousel() {
    let images = document.querySelectorAll('.carousel img');
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';  // Hide all images initially
    }
    index++; // Increment index
    if (index > images.length) {
        index = 1; // Reset index to 1 if it exceeds the number of images
    }
    images[index - 1].style.display = 'block';  // Show the image at the current index
    setTimeout(carousel, 2000); // Change image every 2 seconds (2000 milliseconds)
}

// Call the carousel function to start it
carousel();
