$(document).ready(function() {

  // const sidebarItem = $('.dropdown-item'); 
  // const menu = $('.menu');
  // menu.addClass('menu-none');

  // sidebarItem.on('click', function(e){
  //   if ($(menu).not('.menu-none')) {
  //       menu.css('display', 'none');
  //   }
  //   $(this).find(menu).toggleClass('menu-none');
  //   $(this).find(menu).css('display', 'block');
    
  // });

  $('.switch').on('click', function(){
    $('.switch').removeClass('act');
    $(this).toggleClass('act');
    $('.auto-item').removeClass('current');
    $(this).parent().parent('.auto-item').addClass('current');
  });

  $( function() {
    $( "#slider-range-min" ).slider({
      range: "min",
      value: 60,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#amount" ).text(  ui.value );
        $( "#amount2" ).text( 100 - ui.value );
      }
    });
    //$( "#amount" ).text( $( "#slider-range-min" ).slider( "value" ) );
  });



});


