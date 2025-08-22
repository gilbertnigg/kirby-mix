const dialogs = document.querySelectorAll('dialog');

dialogs.forEach((dialog) => {
  const showButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('.dialog-close');

  // 'Show the dialog' button opens the dialog modally
  if (showButton) {
    showButton.addEventListener('click', () => {
      dialog.showModal();
    });
  }

  // 'Close' button closes the dialog
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      dialog.close();
    });
  }

  // Close the dialog when clicking outside of it
  // closedby='any' not working in Safari, so we add a click event listener
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});
