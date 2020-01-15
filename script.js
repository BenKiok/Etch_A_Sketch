const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
  let newDiv = document.createElement('div');
  newDiv.addEventListener('mouseenter', () => {
    newDiv.classList.add('sketched');
  });
  container.appendChild(newDiv);
}
