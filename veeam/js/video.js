document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.down');
  var elem = document.querySelector('.modal-win');
  button.addEventListener('click', function() {
    elem.classList.toggle('modal-win--active');
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.down2');
  var elem = document.querySelector('.modal-win2', '.overlay');
  button.addEventListener('click', function() {
    elem.classList.toggle('modal-win--active');
  });
});