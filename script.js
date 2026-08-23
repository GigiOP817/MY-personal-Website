document.addEventListener('DOMContentLoaded', () => {
    const showBoxButton = document.getElementById('get-to-know-me-btn');
    const aboutMeConsole = document.getElementById('about-me-box');

    if (showBoxButton && aboutMeConsole) {
        showBoxButton.addEventListener('click', function() {
            showBoxButton.style.opacity = '0';
            showBoxButton.style.pointerEvents = 'none';
            
            aboutMeConsole.classList.remove('hidden');
            aboutMeConsole.classList.add('reveal');
        });
    }
});
