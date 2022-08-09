
const result = document.querySelector('.showAdvice');
const mouseHover = document.querySelector('.mouseHover');
const showId = document.querySelector('.adviceId');
const alert = document.querySelector('.alert');
const close = document.querySelector('.close');



function showOutput() {
  fetch('https://api.adviceslip.com/advice')
  .then( res => res.json())
  .then (data => {
    result.innerHTML = data.slip.advice;
    showId.innerHTML= 'ADVICE '+ '# ' +data.slip.id;
  });

}

window.addEventListener('load' , () => {
  alert.style.bottom = '20px'; 
  showOutput();

  mouseHover.addEventListener('click', () => {
    showOutput();
  });

});

close.addEventListener('click', () => {
  alert.style.bottom = '-100px';
})








