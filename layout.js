function scaleToFit() {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const aspectRatio = 1920 / 1080;

    // Calculate the scale factor based on height
    const expectedWidth = screenHeight * aspectRatio;

    const mainElement = document.querySelector('main');

    if (screenWidth < expectedWidth) {
        // If the screen width is too small, scale down based on width
        const scaleFactor = screenWidth / 1920;
        mainElement.style.transform = `scale(${scaleFactor})`;
        mainElement.style.height = 'auto'; // Reset height so the aspect ratio is preserved
    } else {
        // Scale based on height and add black sidebars if necessary
        const scaleFactor = screenHeight / 1080;
        mainElement.style.transform = `scale(${scaleFactor})`;
        mainElement.style.height = '100vh'; // Make sure it fills the height
    }

    // Centering the element horizontally if sidebars are added
    mainElement.style.left = (screenWidth < expectedWidth)
        ? `${(screenWidth - expectedWidth) / 2}px`
        : '0';
}

// Call the function initially and on resize
window.addEventListener('resize', scaleToFit);
scaleToFit();
