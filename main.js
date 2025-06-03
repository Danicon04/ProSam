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

// Instructor section
const toggleBtn = document.getElementById('toggle-bioi');
const shortBio = document.getElementById('short-bioi');
const fullBio = document.getElementById('full-bioi');

toggleBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const isExpanded = fullBio.style.display === 'inline';

  shortBio.style.display = isExpanded ? 'inline' : 'none';
  fullBio.style.display = isExpanded ? 'none' : 'inline';
  toggleBtn.textContent = isExpanded ? 'Show more...' : 'Show less';
});