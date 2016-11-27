var word = document.querySelectorAll('.nob-word');

for (let i=0; i<word.length; i++) {
  word[i].addEventListener('click', function() {
    word[i].classList.toggle('hover-effect');      
  });
}
