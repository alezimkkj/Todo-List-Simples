const body = document.querySelector('body');
const dark = document.querySelector('#dark');
const light = document.querySelector('#light');

dark.addEventListener('click', () => {
    body.classList.replace('light-theme', 'dark-theme');
})

light.addEventListener('click', () => {
    body.classList.replace('dark-theme', 'light-theme');
})