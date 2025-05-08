let navbar = document.querySelector('#nav-menu');
let menu = document.querySelector('#menu-btn');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}