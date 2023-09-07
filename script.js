function selectAnswer() {
    this.closest('.question').querySelectorAll('.answer').forEach(ans => {
      ans.classList.remove('selected');
    });
    this.classList.add('selected');
  }
  
  document.querySelectorAll('.answer').forEach(answer => {
    answer.addEventListener('click', selectAnswer);
  });

  function revealAnswers() {
    const answers = document.querySelectorAll('.answer');
    let score = 0;
  

    answers.forEach(answer => {
        answer.style.cursor = 'not-allowed';
      });

    answers.forEach(answer => {
      const selectedAnswer = answer.getAttribute('data-answer');
      if (selectedAnswer === 'correct') {
        answer.classList.add('correct');
      }
      answer.removeEventListener('click', selectAnswer);
    });
  
    document.querySelectorAll('.question').forEach(question => {
      const selectedAnswer = question.querySelector('.answer.selected');
      if (selectedAnswer) {
        if (selectedAnswer.getAttribute('data-answer') === 'correct') {
          score++;
        } else {
          selectedAnswer.classList.add('wrong');
        }
      }
    });
  
    document.getElementById("result").textContent = `You scored ${score} out of 4.`;

    const submitButton = document.getElementById("submit-button");
  submitButton.disabled = true;
  submitButton.style.cursor = 'not-allowed';
  }