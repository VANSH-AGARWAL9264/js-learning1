const switcher = document.querySelector('.switcher');
const body = document.querySelector('body')

switcher.addEventListener('click', () => {
    if(body.style.backgroundColor === 'black'){
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        switcher.textContent = '🌙';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        switcher.textContent = '☀️';
    }
});