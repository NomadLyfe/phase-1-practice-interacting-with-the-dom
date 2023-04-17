const counter = document.querySelector('#counter');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const commentList = document.querySelector('#list');
const submit = document.querySelector('#comment-form');
const submitBtn = document.querySelector('#submit');
let interval = null;

startTimer();

function startTimer() {
    interval = setInterval(() => {
        counter.textContent = `${parseInt(counter.textContent)+1}`}, 1000);
}

function pauseOrResume() {
    if (pause.textContent === ' pause ') {
        clearInterval(interval);
        pause.textContent = ' resume ';
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        submitBtn.disabled = true;
    } else if (pause.textContent === ' resume ') {
        startTimer();
        pause.textContent = ' pause ';
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        submitBtn.disabled = false;
    }
}

pause.addEventListener('click', pauseOrResume);

minus.addEventListener('click', function() {
    counter.textContent = `${parseInt(counter.textContent)-1}`;
})

plus.addEventListener('click', function() {
    counter.textContent = `${parseInt(counter.textContent)+1}`;
})

heart.addEventListener('click', function() {
    const likesList = document.querySelectorAll('.listItem');
    const myList = [];
    let num;
    for (const element of likesList) {
        myList.push(element.id);
    }
    console.log(myList);
    if (myList.includes(`${counter.textContent}`)) {
        const newLi = document.getElementById(`${counter.textContent}`);
        const span = newLi.getElementsByTagName('span')[0];
        num = parseInt(span.textContent) + 1;
        console.log(span);
        console.log(newLi);
        newLi.innerHTML = `${counter.textContent} has been liked <span>${num}</span> time`;
        console.log(num);
    } else {
        num = 1;
        const li = document.createElement('li');
        li.id = `${counter.textContent}`;
        li.innerHTML = `${counter.textContent} has been liked <span>${num}</span> time`;
        li.className = 'listItem';
        console.log(li);
        document.querySelector('.likes').appendChild(li);
    }
})

submit.addEventListener('submit', function(e) {
    e.preventDefault();
    const p = document.createElement('p');
    const input = document.querySelector('#comment-input');
    p.textContent = input.value;
    commentList.appendChild(p);
    submit.reset();
})
