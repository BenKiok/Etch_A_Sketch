const container = document.querySelector('.container');
const reset = document.querySelector('#reset');

for (let i = 0; i < 256; i++) {
  let newDiv = document.createElement('div');
  newDiv.addEventListener('mouseenter', () => {
    newDiv.classList.add('sketched');
  });
  container.appendChild(newDiv);
}

reset.addEventListener('click', resetGrid);

function resetGrid () {
  const nodeList = document.getElementsByTagName('div');
  const squares = [];
  // change nodeList from nodelist to array
  for(let i = nodeList.length; i--; squares.unshift(nodeList[i]));
  squares.forEach(function (square) {
    square.classList.remove('sketched');
  });
}
