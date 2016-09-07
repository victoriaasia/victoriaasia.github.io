// widget options

var $grid = $('.grid').packery({
  itemSelector: '.grid-item'
});

$('.prepend-button').on( 'click', function() {
  // create new item elements
  var $items = getItemElement().add();
  // prepend elements to container
  $grid.prepend( $items )
    // add and lay out newly prepended elements
    .packery( 'prepended', $items );
});

  $grid.on( 'click', '.grid-item ', function( event ) {
  // remove clicked element
  $grid.packery( 'remove', event.currentTarget )
    // shiftLayout remaining item elements
    .packery('shiftLayout');
});

// make <div class="grid-item grid-item--width# grid-item--height#" />
function getItemElement() {
  var $item = $('<div class="grid-item"></div>');
  // add width and height class
  var wRand = Math.random();
  var hRand = Math.random();
  var widthClass = wRand > 0.85 ? 'grid-item--width3' : wRand > 0.7 ? 'grid-item--width2' : '';
  var heightClass = hRand > 0.85 ? 'grid-item--height3' : hRand > 0.5 ? 'grid-item--height2' : '';
  $item.addClass( widthClass ).addClass( heightClass );
  return $item;
}


// vote progress circle

$('.result__circle').circleProgress({
  value: 0.7
});


// calendar

// $('#dp').datepicker({
//   format: "mm",
//   startDate: "now",
//   viewMode: "months",
//   minViewMode: "months",
//   language: "ru",
//   todayHighlight: true
// });

$( function() {
    $( "#datepicker" ).datepicker();
  } );
