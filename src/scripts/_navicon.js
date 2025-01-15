document.getElementById('navicon').addEventListener('click', (e) => {
  e.preventDefault();
  document.documentElement.classList.toggle('is-nav-open');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.documentElement.classList.remove('is-nav-open');
  }
});
