$(document).ready(function() {
  // pagination

    var show_per_page = 9;
    var number_of_items = $('.dm-list').children('li').size();
    var number_of_pages = Math.ceil(number_of_items / show_per_page);
    $('.dm-list-wrapper').append('<div class=dm-controls></div><input id=current_page type=hidden><input id=show_per_page type=hidden>');
    $('#current_page').val(0);
    $('#show_per_page').val(show_per_page);
    var navigation_html = '';
    var current_link = 0;
    while (number_of_pages > current_link) {
        navigation_html += '<a class="dm-page" onclick="go_to_page(' + current_link + ')" longdesc="' + current_link + '">' + (current_link + 1) + '</a>';
        current_link++;
    }
    $('.dm-controls').html(navigation_html);
    $('.dm-controls .dm-page:first').addClass('active');
    $('.dm-list').children().css('display', 'none');
    $('.dm-list').children().slice(0, show_per_page).css('display', 'inline-flex');


// modal window

  $('.dm-img').click( function(event){ // лoвим клик пo ссылки с id="go"
		event.preventDefault();
    $('#dm-overlay').fadeIn(200,
		 	function(){
			$('#dm-modal').css('display', 'block').animate({opacity: 1, top: '40px'}, 300);
	   });
  });
	$('.modal-close, #dm-overlay').click( function(){
		$('#dm-modal')
			.animate({opacity: 0, top: '20px'}, 200,
				function(){
					$(this).css('display', 'none');
          $('#dm-overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	});
});


// pagination

function go_to_page(page_num) {
    var show_per_page = parseInt($('#show_per_page').val(), 0);
    start_from = page_num * show_per_page;
    end_on = start_from + show_per_page;
    $('.dm-list').children().css('display', 'none').slice(start_from, end_on).css('display', 'inline-flex');
    $('.dm-page[longdesc=' + page_num + ']').addClass('active').siblings('.active').removeClass('active');
    $('#current_page').val(page_num);
}
