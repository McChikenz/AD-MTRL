  function toggleReadMore(button) {
    const moreText = button.previousElementSibling.querySelector('.more-text');
    if (moreText.classList.contains('d-none')) {
      moreText.classList.remove('d-none');
      button.textContent = 'Read less';
    } else {
      moreText.classList.add('d-none');
      button.textContent = 'Read more';
    }
  }
