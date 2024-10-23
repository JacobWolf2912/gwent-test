function scaleToFit() {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const aspectRatio = 1920 / 1080;

    // Calculate the scale factor based on height
    const expectedWidth = screenHeight * aspectRatio;

    const mainElement = document.querySelector('main');

    if (screenWidth < expectedWidth) {
        // If the screen width is too small, scale down based on width
        const scaleFactor = screenWidth / expectedWidth;
        mainElement.style.transform = `scale(${scaleFactor})`;
        mainElement.style.transformOrigin = 'top left'; // Reset height so the aspect ratio is preserved
    } else {
        // Scale based on height and add black sidebars if necessary
        mainElement.style.transform = 'scale(1)';
        mainElement.style.width = 'auto';  // Make sure width is auto
        mainElement.style.height = '100vh'; // Height is full screen
    }
}

// Call the function initially and on resize
window.addEventListener('resize', scaleToFit);
scaleToFit();
