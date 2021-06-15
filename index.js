function createGrid(boxes) {
    document.querySelector('#main-grid').innerHTML ="";
    const container = document.querySelector('#main-grid');
    let counter=0;
    if (boxes == null) {
        boxes=16;
    }
    const boxHeight = 400/boxes;
    container.style['grid-template-columns'] =`repeat(${boxes}, ${boxHeight}px)`;
    container.style['grid-auto-rows'] = `${boxHeight}`;
    for (let i = 0; i < boxes; i++) {
        for (let j = 0; j < boxes; j++) {
            counter++;
            const div = document.createElement('div');
            div.classList.add('grid-box');
            div.id =`box-${counter}`;
            container.appendChild(div);


        }
    }
    changePixelColor();
}

function changePixelColor() {
    const gridItems = document.querySelectorAll('.grid-box');
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function(e) {
           // document.querySelector(`#${e.toElement.id}`).style.backgroundColor="black";
            this.style.backgroundColor="black";
            
        })
    })

}

function clearGrid() {
    const boxes = prompt("Enter grid dimensions");
    if (!boxes) {
        alert("Please enter a value");
        return clearGrid();

    } else if (boxes > 50 || boxes < 5) {
        alert("Grid dimensions are out of bounds");
        return clearGrid();

    } 

    document.querySelector('#main-grid').innerHTML ="";
    createGrid(boxes);

}

function changeGridSize() {
    const gridBar = document.querySelector('#myRange');
    const gridValue = document.getElementById('slider-value');
    console.log(gridBar.value);
    gridValue.innerHTML = `Grid size: ${gridBar.value} x ${gridBar.value}`;
    createGrid(gridBar.value);

}



changeGridSize();

