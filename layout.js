function adjustScale() {
    const mainElement = document.querySelector('main');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const aspectRatio = 16 / 9;

    // Calculate the optimal width based on the screen height
    const calculatedWidth = screenHeight * aspectRatio;

    if (calculatedWidth <= screenWidth) {
        // Height is the limiting factor; scale by height
        mainElement.style.width = `${calculatedWidth}px`;
        mainElement.style.height = `${screenHeight}px`;
    } else {
        // Width is the limiting factor; use full width and adjust height
        mainElement.style.width = `${screenWidth}px`;
        mainElement.style.height = `${screenWidth / aspectRatio}px`;
    }
}

// Call the function initially and on resize
window.addEventListener('resize', adjustScale);
adjustScale();
