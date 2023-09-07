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

}

