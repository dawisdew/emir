
let position = 0

const miniBox = document.querySelector('.block2')

miniBox.addEventListener('click', () => {
    for (let i = 0; i < 400; i++) {
        position ++
        document.querySelector('.block2').style.left = position +
            'px';
    }
});

function recursionAnimation() {
    position++;
    if (position > 400) return;
    document.querySelector('.block2').style.left = position + 'px';
    animation();
}

function animation() {
    setTimeout(recursionAnimation, 100);
}
const phoneInput = document.querySelector(".phoneInput")
const phoneCheck = document.querySelector(".phoneCheck")
const phoneResult = document.querySelector(".phoneResult")

const phoneRegExp = /^1\d{13}$|^2\d{13}$/;
phoneCheck.addEventListener("click", () => {
    if (phoneRegExp.test(phoneInput.value)) {
        phoneResult.innerText = "ok";
        phoneResult.style.color = "green";
    } else {
        phoneResult.innerText = "not ok";
        phoneResult.style.color = "red";
    }
});


