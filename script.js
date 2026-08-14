const showBoxButton = document.getElementById('get-to-know-me-btn');
const aboutMeConsole = document.getElementById('about-me-box');

showBoxButton.addEventListener('click',function () {
    showBoxButton.style.opacity = '0';
    showBoxButton.style.pointerEvents = 'none';

    setTimeout(() => {
        showBoxButton.style.display = 'none';
    }, 400);

     aboutMeConsole.classList.remove('hidden');
    aboutMeConsole.classList.add('reveal');
});