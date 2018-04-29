firstnum = document.getElementById('firstnum');
secondnum = document.getElementById('secondnum');
answer = document.getElementById('answer');
correct = document.getElementById('correct');
total = document.getElementById('total');
playaudio = new Audio('notify.wav');
msg = new SpeechSynthesisUtterance();

total.textContent = 0;
correct.textContent = 0;
answerLog = [];

function newProblem() {
  firstnum.innerHTML = Math.floor(Math.random() * 11).toString();
  secondnum.innerHTML = Math.floor(Math.random() * 11).toString();
  total.innerHTML = (parseInt(total.innerHTML) + 1).toString();
  answer.value = '';

  outputSound(`Aboodi, what is ${firstnum.innerHTML} + ${secondnum.innerHTML}`);
}

function isCorrect() {
  console.log(parseInt(firstnum.innerHTML));
  console.log(parseInt(secondnum.innerHTML));
  console.log(parseInt(answer.value));

  return (
    parseInt(firstnum.innerHTML) + parseInt(secondnum.innerHTML) ==
    parseInt(answer.value)
  );
}

function outputSound(textToSpeak) {
  msg.text = textToSpeak;
  window.speechSynthesis.speak(msg);
}

answer.addEventListener('keypress', event => {
  if (event.keyCode === 13) {
    answerLog.push(
      `${firstnum.innerHTML} + ${secondnum.innerHTML} = ${answer.value} (${
        isCorrect() ? 'Correct' : 'Incorrect'
      })`
    );
    console.log(answerLog);
    if (isCorrect()) {
      correct.innerHTML = (parseInt(correct.innerHTML) + 1).toString();
      outputSound('Well done!');
      newProblem();
    } else {
      outputSound('Try again!');
    }
  }
});

outputSound('Aboodi is being difficult, Mummy cant do the addition');
newProblem();

// TODOS
// Audio feedback
// Log
// Correct / Total
// New problem
// Subtraction
