const navMain = document.getElementById('nav-main');
const navicon = document.getElementById('navicon');

// Toggle the navigation menu when the navicon is clicked
navicon.addEventListener('click', (e) => {
  e.preventDefault();
  document.documentElement.classList.toggle('is-nav-open');
});

// Close the navigation when the Escape key is pressed
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.documentElement.classList.remove('is-nav-open');
  }
});

// Close the navigation when clicking outside of the navicon
document.addEventListener('click', (e) => {
  if (
    document.documentElement.classList.contains('is-nav-open') &&
    !navMain.contains(e.target) &&
    !navicon.contains(e.target)
  ) {
    document.documentElement.classList.remove('is-nav-open');
  }
});
