let numberOfWidthSquares;
let numberOfSquaresPerSide = 16;

function sketch(numberOfSquaresPerSide) {
  const container = document.createElement('container');
  numberOfWidthSquares = numberOfSquaresPerSide;
  const numberOfHeightSquares = numberOfWidthSquares;
  const numberOfWidthAndHeightSquares = numberOfWidthSquares * numberOfHeightSquares;

  for (let i = 0; i < numberOfWidthAndHeightSquares; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'red';
    });
  }

  document.body.appendChild(container);
}

function resize() {
    const container = document.querySelector('container');
    const newWidthOfOneSquare = 480 / numberOfWidthSquares;
    const newHeightOfOneSquare = newWidthOfOneSquare;
    const newFlexBasis = 100 / numberOfWidthSquares;

    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        div.style.width = newWidthOfOneSquare + 'px';
        div.style.height = newHeightOfOneSquare + 'px';
        div.style.flexBasis = newFlexBasis + '%';
    });
}

sketch(numberOfSquaresPerSide);
resize();

const reset = document.querySelector('button');

reset.addEventListener('click', () => {
    let newNumberOfSquaresPerSide = prompt("How many squares per side for the new grid do you want?");
    
    while (newNumberOfSquaresPerSide > 100 || newNumberOfSquaresPerSide < 0) {
        newNumberOfSquaresPerSide = prompt("How many squares per side for the new grid do you want?");
    }

    
        numberOfSquaresPerSide = newNumberOfSquaresPerSide;
        const numberOfWidthAndHeightSquares = numberOfSquaresPerSide * numberOfSquaresPerSide;
        const container = document.querySelector('container');
        container.remove();
        sketch(numberOfSquaresPerSide);
        resize(numberOfWidthAndHeightSquares);
    
});
