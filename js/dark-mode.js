const toggle = document.getElementById('toggle');
const indicator = document.querySelector('.indicator');

const changeTheme = () => {
    document.body.classList.toggle('dark-mode-variables');
    indicator.classList.toggle('active');
}

toggle.addEventListener('click', () =>{
    localDarkMode = localStorage.getItem('active');
    
    if(localDarkMode !== 'on') {
        changeTheme();
        localDarkMode = localStorage.setItem ('active', 'on');
    } else {
        changeTheme();
        localDarkMode = localStorage.setItem ('active', null);
    }
})

let localDarkMode = localStorage.getItem('active');
if(localDarkMode === 'on') {
    changeTheme();
}
