const block = document.querySelector(".block")

let position = 0
let positionTop = 0

const move = () => {
    if (position <= 450 && positionTop == 0) {
        position += 16;
        // console.log(position);
        block.style.left = `${position}px`;
        setTimeout(move, 100);
    } else if (position >= 450 && positionTop <= 450) {
        positionTop += 16;
        // console.log(positionTop)
        block.style.top = `${positionTop}px`;
        setTimeout(move, 100)
    } else if (positionTop >= 450 && position != 0 ) {
        position -= 16;
        // console.log(position);
        block.style.left = `${position}px`;
        setTimeout(move, 100);
    }else if (positionTop != 0 && position == 0) {
        positionTop -= 16;
        // console.log(positionTop)
        block.style.top = `${positionTop}px`;
        setTimeout(move, 100)
    }
};

move()

let counter = 0

const interval = () => {
    counter++
    console.log(counter)
}
setInterval(interval, 1000)