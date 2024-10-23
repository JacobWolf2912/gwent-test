function scaleToFit() {
    // Get the height and width of the viewport
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    // Set your desired aspect ratio (for instance, 1920x1080)
    const aspectRatio = 1920 / 1080;

    // Calculate the width that would match the screen height given the aspect ratio
    const expectedWidth = screenHeight * aspectRatio;

    // Scale based on height
    let scaleFactor = screenHeight / 1080;

    // Apply the scale to the main element
    const mainElement = document.querySelector('main');
    mainElement.style.transform = `scale(${scaleFactor})`;

    // If the screen width is smaller than the expected width, center the content and apply black sidebars
    if (screenWidth < expectedWidth) {
        // Calculate the remaining space to center the content horizontally
        const horizontalMargin = (screenWidth - expectedWidth * scaleFactor) / 2;
        mainElement.style.left = `${horizontalMargin}px`;
    } else {
        mainElement.style.left = '0'; // Reset if it's wider
    }
}

// Call the function when the window is resized
window.addEventListener('resize', scaleToFit);

// Call the function initially to set the correct size
scaleToFit();
