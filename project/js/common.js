$(document).ready(function() {

  $('.switch').on('click', function(){
    $('.switch').removeClass('act');
    $(this).toggleClass('act');
    $('.auto-item').removeClass('current');
    $(this).parent().parent('.auto-item').addClass('current');
    let allSliders = $('.auto-item').find('.ui-slider');
    $.each(allSliders, function(index, value) {
      $(this).slider({
        disabled: true
      })
    });

    let sliderOnDesktop = $(this).closest('.auto-item.current').find('.ui-slider');
    sliderOnDesktop.slider({
      disabled: false
    })

  });

  $('.goods .list .gal').on('click', function(){
    $('.goods .list .gal').removeClass('act');
    $('.goods .list li').removeClass('act');
    $(this).toggleClass('act');
    $(this).parent().parent().toggleClass('act');
});

$('.auto-amount-input').keypress(function (e) {
  if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
     return false;
  }
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
      },
      disabled: false
    });
    $( "#slider-range-min-2" ).slider({
      range: "min",
      value: 60,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#amount3" ).text(  ui.value );
        $( "#amount4" ).text( 100 - ui.value );
      },
      disabled: true
    });
    $( "#slider-range-min-3" ).slider({
      range: "min",
      value: 60,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#amount5" ).text(  ui.value );
        $( "#amount6" ).text( 100 - ui.value );
      },
      disabled: true
    });
    $( "#slider-range-min-4" ).slider({
      range: "min",
      value: 60,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#amount7" ).text(  ui.value );
        $( "#amount8" ).text( 100 - ui.value );
      },
      disabled: true
    });
    $( "#slider-range-min-5" ).slider({
      range: "min",
      value: 60,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#amount9" ).text(  ui.value );
        $( "#amount10" ).text( 100 - ui.value );
      },
      disabled: false
    });
    $( "#slider-range-min-6" ).slider({
      range: "min",
      value: 60,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#amount11" ).text(  ui.value );
        $( "#amount12" ).text( 100 - ui.value );
      },
      disabled: true
    });
    $( "#slider-range-min-7" ).slider({
      range: "min",
      value: 60,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#amount13" ).text(  ui.value );
        $( "#amount14" ).text( 100 - ui.value );
      },
      disabled: true
    });
    $( "#slider-range-min-8" ).slider({
      range: "min",
      value: 60,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#amount15" ).text(  ui.value );
        $( "#amount16" ).text( 100 - ui.value );
      },
      disabled: true
    });
  });

  // ref page

  $('.info-icon').on('mouseenter', MouseEnter )
  $('.info-icon').on('mouseleave', MouseLeave )

  function MouseEnter() {
    $('.ref-info').addClass('show-info');
  }
  function MouseLeave() {
    $('.ref-info').removeClass('show-info');
  }

  $( function() {
    $( "#datepicker" ).datepicker({
      dateFormat: 'dd-mm-yy',
    });
    $( "#datepicker2" ).datepicker({
      dateFormat: 'dd-mm-yy',
    });
  } );

  $(function() {

    $('.ref-select').styler();
  
  });

});


