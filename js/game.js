// Dom Node Selector
const icons = [...document.querySelectorAll("li")];
const couterSpan = document.querySelector("p .counter");
const winnerBox = document.querySelector(".winner-container");
const ul = document.querySelector("ul");
// Timer
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
let timerInterval
let minute = 0
let second = 0
let flag = true
// Game
let lose = 0
let clickedItems = [];
let counter = 0;
let lock = false;

shuffle(icons)


// Event
for (const icon of icons) {
    ul.appendChild(icon)
    icon.onclick = game
    icon.classList.add("visible");
    setTimeout(() => {
        icon.classList.remove("visible");
    }, 1000)
}


// Function
function game() {
    time()
    if (lock) return;
    if (this.classList.contains("visible") || this.classList.contains("match")) return;
    this.classList.add("visible");
    clickedItems.push(this);
    if (clickedItems.length == 2) {
        count()
        if (clickedItems[0].innerHTML == clickedItems[1].innerHTML) {
            match()
        } else {
            unmatch()
        }
    }
}

function time() {
    if (flag) {
        timerInterval = setInterval(() => {
            second++;
            sec.textContent = second;
            if (second > 59) {
                minute++;
                min.textContent = minute;
                second = 0;
                sec.textContent = second;
            }
        }, 1000)
        flag = false
    }
}

function count() {
    counter++
    if (counter <= 8) {
        couterSpan.style.color = "green"
    } else {
        couterSpan.style.color = "red"
    }
    couterSpan.textContent = counter
}

function match() {
    clickedItems[0].classList.add("match");
    clickedItems[1].classList.add("match");
    clickedItems = []

    checkWin();
}

function unmatch() {
    lock = true
    clickedItems[0].classList.add("unmatch");
    clickedItems[1].classList.add("unmatch");
    lose++

    checkLose()

    setTimeout(() => {
        clickedItems[0].classList.remove("visible", "unmatch");
        clickedItems[1].classList.remove("visible", "unmatch");
        clickedItems = []
        lock = false
    }, 1000);
}

function checkWin() {
    const matchedItems = document.querySelectorAll(".match");
    if (matchedItems.length === icons.length) {
        setTimeout(() => {
            winnerBox.classList.add("showWinnerBox")
        }, 300);
        clearInterval(timerInterval);
    }
}

function checkLose() {
    if (lose == 10) {
        setTimeout(() => {
            alert("شما باختید!");
            lose = 0
            resetAll()
        }, 300);
    }
}

function resetAll() {
    minute = 0
    second = 0
    flag = true
    counter = 0
    for (const icon of icons) {
        icon.classList.remove("visible")
        icon.classList.remove("match")
    }
    couterSpan.textContent = counter
    clearInterval(timerInterval);
    min.textContent = minute;
    sec.textContent = second;
}
// Mohammad JBM Design This Project