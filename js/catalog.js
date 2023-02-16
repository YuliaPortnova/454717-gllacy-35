const searchResetButton = document.querySelector('.search-reset-button');
const searchInput = document.querySelector('.search-input');
searchResetButton.addEventListener('click', () => searchInput.value = ' ');
