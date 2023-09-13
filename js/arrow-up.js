const btnArriba = document.getElementById('btn-arriba');

window.onscroll = () => {
    if(document.documentElement.scrollTop > 100) {
        btnArriba.classList.add('show');
    }else{
        btnArriba.classList.remove('show');
    }
}

btnArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})


