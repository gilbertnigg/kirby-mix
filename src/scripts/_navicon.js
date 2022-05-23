const navicon = document.getElementById('navicon');

navicon.addEventListener('click', function(e) {
  e.preventDefault();
  document.documentElement.classList.toggle('nav-open');
});
