window.onload = function() {

  var video = document.getElementById('dm-video');
  var playButton = document.getElementById('dm-js-control');

  video.addEventListener('contextmenu', function (e) { e.preventDefault(); e.stopPropagation(); }, false);

  if (video.hasAttribute('controls')) {
    video.removeAttribute('controls')
  }

  playButton.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      playButton.classList.toggle('dm-control-hide');
    } else {
      video.pause();
      playButton.classList.toggle('dm-control-hide');
    }
  });
};


var btn = document.querySelector('.dm-js-btn');
var wrapperBlock = document.querySelector('.-first');
var block = document.querySelector('.dm-js-content');
var blockResult = document.querySelector('.dm-result-content');

btn.onclick = function(event) {
  event = event || window.event;
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}

btn.addEventListener("click", function(){
    setTimeout(function(){
      block.classList.add('dm-hidden');
      wrapperBlock.classList.add('-first-result');
      blockResult.classList.remove('dm-hidden');
    }, 1500);
});


$(document).ready(function() {
  // page 2
  // photo-preview
  $.uploadPreview({
    input_field: '#dm-image-upload',
    preview_box: '#dm-image-preview',
    label_field: '#dm-image-label'
  });

  // modal open/close
  $('.dm-btn-join').click( function(event){
    event.preventDefault();
    $('#dm-overlay').fadeIn(200,
      function(){
      if(window.matchMedia('(min-width: 769px)').matches) {
      $('#dm-modal-2').css('display', 'block').animate({opacity: 1, top: '40px'}, 300);
      }	else if(window.matchMedia('(max-width: 768px)').matches) {
      $('#dm-modal-2').css('display', 'block').animate({opacity: 1, top: '0px'}, 300);
      $('html').css('overflow', 'hidden');
      $('.js-modal').css('overflow', 'auto');
      }
     });
  });
  $('.modal-close, #dm-overlay').click( function(){
    $('.js-modal')
      .animate({opacity: 0, top: '20px'}, 200,
        function(){
          $(this).css('display', 'none');
          $('#dm-overlay').fadeOut(400);
        }
      );
  });

  // var currentAbsoluteScroll = $(window).scrollTop();
  //   $('input').on('focus', function() {
  //     $('.js-modal').css({
  //       position: 'absolute',
  //       marginTop: $(window).scrollTop() + 'px',
  //       bottom: 'auto',
  //       });
  //       $(window).scrollTop(currentAbsoluteScroll);
  //   });


  // page 3
  // cut text in modal window
  var size = 100,
  modalContent= $('.dm-modal-4__text'),
  modalText = modalContent.text();
  if(modalText.length > size){
  modalContent.text(modalText.slice(0, size) + ' ...');
  }

  // modal
  $('.js-dm-img').click( function(event){
  	event.preventDefault();
    $('#dm-overlay').fadeIn(200,
  	 	function(){
  		$('#dm-modal-4').css('display', 'block').animate({opacity: 1, top: '40px'}, 300);
     });
  });
  $('.modal-close, #dm-overlay').click( function(){
  	$('#dm-modal-4').animate({opacity: 0, top: '20px'}, 200,
  			function(){
  				$(this).css('display', 'none');
          $('#dm-overlay').fadeOut(400);
  			}
  		);
      document.getElementById('dmError1').innerHTML = "";
      document.getElementById('dmError2').innerHTML = "";
  });

  // form 1
  $('#jsForm1').submit(function(e){
  e.preventDefault();
  var m_method=$(this).attr('method');
  var m_action=$(this).attr('action');

  var m_data=$(this).serialize();

    $.ajax({
      type: m_method,
      url: m_action,
      data: m_data,

      success: function(result){
        $('#dm-modal-1').css('display', 'none');
        $('#dm-modal-2').css('display', 'block').animate({opacity: 1, top: '40px'}, 300);
      },
      error: function(result) { //Если ошибка
        document.getElementById('dmError1').innerHTML = "Проверьте правильность заполнения формы.";
      }
    });
  });

  // form 2
  $('#jsForm2').submit(function(e){
  e.preventDefault();
  var m_method=$(this).attr('method');
  var m_action=$(this).attr('action');

  var m_data=$(this).serialize();

    $.ajax({
      type: m_method,
      url: m_action,
      data: m_data,

      success: function(result){
        $('#dm-modal-2').css('display', 'none');
        $('#dm-modal-3').css('display', 'block').animate({opacity: 1, top: '40px'}, 300);
      },
      error: function(result) { //Если ошибка
        document.getElementById('dmError2').innerHTML = "Проверьте правильность заполнения формы.";
      }
    });
  });

});


 // if(error == ""){
 //      document.getElementById(dmError).innerHTML = "Проверьте правильность заполнения формы";
 //    } else {
 //      $('#dm-modal-1').css('display', 'none');
 //      $('#dm-modal-2').css('display', 'block').animate({opacity: 1, top: '40px'}, 300);
 //    }
