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
      const selectedAnswer = answer.getAttribute('data-answer');
  
      if (answer.classList.contains('selected')) {
        if (selectedAnswer === 'correct') {
          answer.classList.add('correct');
          score++;
        } else {
          answer.classList.add('wrong');
        }
      }

      answer.removeEventListener('click', selectAnswer);

    });
    document.getElementById("result").textContent = `You scored ${score} out of 4.`;
  }
