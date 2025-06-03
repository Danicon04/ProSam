  const toggleBtn = document.getElementById('toggle-bio');
  const shortBio = document.getElementById('short-bio');
  const fullBio = document.getElementById('full-bio');

  toggleBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const isExpanded = fullBio.style.display === 'inline';

    shortBio.style.display = isExpanded ? 'inline' : 'none';
    fullBio.style.display = isExpanded ? 'none' : 'inline';
    toggleBtn.textContent = isExpanded ? 'Show more ▼' : 'Show less ▲';
});