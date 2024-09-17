const textArea = document.getElementById('text');
const inputField = document.getElementById('input');
const btn = document.getElementById('btn');

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

textArea.textContent = `Guess a Number Between ${minNum} to ${maxNum}`;
let attempts = 0;

btn.onclick = function () {
    let guess = inputField.value;
    guess = Number(guess);
    if (isNaN(guess)) {
        textArea.style.color = 'red'
        textArea.textContent = "Please enter a valid number";
    }
    else if (guess < minNum || guess > maxNum) {
        textArea.style.color = 'red'
        textArea.textContent = "Please enter a valid number";
    }
    else {
        attempts++;
        if (guess < answer) {
            textArea.style.color = 'yellow'
            textArea.textContent = "Too Low! Try Again";
        }
        else if (guess > answer) {
            textArea.style.color = 'yellow'
            textArea.textContent = "Too High! Try Again";

        }
        else {
            textArea.textContent = `Congrats! You Guessed Right. it took you ${attempts} attempts`;
        }
    }

}
