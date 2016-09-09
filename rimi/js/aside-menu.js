
document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.b-aside-menu-toggle-button');
  var elem = document.querySelector('.b-aside-menu');
  button.addEventListener('click', function() {
    elem.classList.toggle('b-aside-menu--active');
  });

  }); 
