// loading DOM
let counterInterval
const counter = document.getElementById('counter');

function convertCounter() {
    return parseInt(counter.innerText, 10);
}    

function increaseCounter() {
    counter.innerText = `${convertCounter() + 1}`;
}

function startCounter() {
    counterInterval = window.setInterval(increaseCounter, 1000)
}

document.addEventListener('DOMContentLoaded', startCounter)

// minus button
function decreaseCounter() {
    counter.innerText = `${convertCounter() - 1}`;
}

const minus = document.getElementById('minus')
minus.addEventListener('click', decreaseCounter)

// plus button
const plus = document.getElementById('plus')
plus.addEventListener('click', increaseCounter)

// heart button
const likeUL = document.querySelector('ul')
let secondsCheck
let likeCount
let likeLi
function addLikes() {
    if (secondsCheck == convertCounter()) {
        likeCount++
        likeLi.innerText = `${secondsCheck} has been liked ${likeCount} times`
    } else {
        secondsCheck = convertCounter()
        likeCount = 1
        likeLi = document.createElement('li');
        likeLi.innerText = `${secondsCheck} has been liked ${likeCount} time` //add a counter feature
        likeUL.appendChild(likeLi)
    }
}

const heart = document.getElementById('heart')
heart.addEventListener('click', addLikes)

// pause button
const pause = document.getElementById('pause')
function pauseButton() {
    if (pause.innerText == 'pause') {
        pause.innerText = 'resume'
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        clearInterval(counterInterval)
    } else {
        pause.innerText = 'pause'
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
        startCounter()
    }
}

pause.addEventListener('click', pauseButton)

// comments section
const form = document.querySelector('form')
const commentList = document.getElementById('list')

function addComment(comment) {
    const div = document.createElement('div')
    div.innerText = comment
    debugger
    commentList.appendChild(div)
}

function handleSubmit(e) {
    e.preventDefault()
    addComment(e.target.comment.value)
    form.reset()
}

form.addEventListener('submit', handleSubmit)