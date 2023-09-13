const nav = document.getElementById('nav');
const iconBar = document.querySelector('.icon-bar');
const iconClose = document.querySelector('.icon-close');

iconBar.addEventListener('click', () => {
    if(window.innerWidth < 768){
        nav.classList.add('show');
    }
})

iconClose.addEventListener('click', () =>{
    nav.classList.remove('show');
})

window.addEventListener('click', e =>{
    if(nav.classList.contains('show') && e.target != nav && e.target != iconBar){
        nav.classList.remove('show');
    }
})

