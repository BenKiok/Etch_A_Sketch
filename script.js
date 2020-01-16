const container = document.querySelector('.container');
const reset = document.querySelector('#reset');
const resize = document.querySelector('#resize');

createDivs(256);

reset.addEventListener('click', resetGrid);
resize.addEventListener('click', resizeGrid);

function resetGrid() {
  const nodeList = document.getElementsByTagName('div');
  const squares = [];
  // change nodeList from node list to array
  for(let i = nodeList.length; i--; squares.unshift(nodeList[i]));
  squares.forEach(function (square) {
    square.classList.remove('sketched');
  });
}

function createDivs(num) {
  for (let i = 0; i < num; i++) {
    let newDiv = document.createElement('div');
    newDiv.addEventListener('mouseenter', () => {
      newDiv.classList.add('sketched');
    });
    container.appendChild(newDiv);
  }

}

function resizeGrid() {
   let gridLength = prompt('How many boxes would you like each row to have?', 16);
   let divLength = 800 / gridLength;
   container.style = `grid-template-columns: repeat(${gridLength}, ${divLength}px);
                      grid-template-rows: repeat(${gridLength}, ${divLength}px)`;
   createDivs(gridLength ** 2);
   resetGrid();
}
