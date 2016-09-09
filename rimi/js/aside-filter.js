
document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.aside-params-toggle-button');
  var elem = document.querySelector('.aside-params');
   button.addEventListener('click', function() {
    elem.classList.toggle('aside-params--active');
  });

  });    
