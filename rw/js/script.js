'use strict';

var field = document.querySelectorAll('.personal-item');

for (var i = 0; i < field.length; i++) {

  field[i].addEventListener('click', function (event) {

    var target = event.target;

    // while (target != field) {
    if (target.className == 'js-btn') {

      target.classList.toggle('btn-active');
      target.innerHTML = 'сохранить';

      this.firstElementChild.disabled = false;
      this.firstElementChild.classList.toggle('field-active');
      this.firstElementChild.focus();

      return;
    }
    //   target = target.parentNode;
    // }
  });
};