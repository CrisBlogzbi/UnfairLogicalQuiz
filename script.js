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
  
    answers.forEach(answer => {
      const selectedAnswer = answer.getAttribute('data-answer');
  
      if (answer.classList.contains('selected')) {
        if (selectedAnswer === 'correct') {
          answer.classList.add('correct');
        } else {
          answer.classList.add('wrong');
        }
      }
  
    });
  
  }
