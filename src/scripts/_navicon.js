document.getElementById('navicon').addEventListener('click', (e) => {
  e.preventDefault();
  document.documentElement.classList.toggle('is-nav-open');
});
