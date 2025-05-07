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


// function validateForm() {
//     const email = document.getElementById("email").value;
//     if (!email.includes("@")) {
//         alert("Please enter a valid email address with '@' symbol.");
//         return false; // Prevent form submission
//     }
//     return true; // Allow form submission
// }
// const menuBtn = document.getElementById('menu-btn');
// const navMenu = document.getElementById('nav-menu');

// menuBtn.addEventListener('click', () => {
//     navMenu.classList.toggle('active');
// });
