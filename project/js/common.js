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

    $('.modal-select').styler();
  
  });

  // Get the modal
  var modal = document.getElementById("transferModal");
  var modal2 = document.getElementById("linkModal");
  var modal3 = document.getElementById("watchModal");

  // Get the button that opens the modal
  var btn = document.getElementById("transfer");
  var btn2 = document.getElementById("table-button");
  var btn3 = document.getElementById("modal-watch");


  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var span2 = document.getElementsByClassName("close")[1];
  var span3 = document.getElementsByClassName("close")[2];

  // When the user clicks on the button, open the modal 
  btn.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "block";
  }
  btn2.onclick = function(e) {
    e.preventDefault();
    modal2.style.display = "block";
  }
  btn3.onclick = function(e) {
    e.preventDefault();
    modal3.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  span2.onclick = function() {
    modal2.style.display = "none";
  }
  span3.onclick = function() {
    modal3.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
  }

  $('.modal-choose').on('click', function(){
    $('.modal-choose').removeClass('modal-current');
    $(this).addClass('modal-current');
  });


  var popup = document.getElementById("popupModal");
  var btnClick = document.getElementById("modalPopup");
  var spanClose = document.getElementsByClassName("modal-close")[0];
  btnClick.onclick = function(e) {
    e.preventDefault();
    popup.style.display = "block";
  }
  spanClose.onclick = function() {
    popup.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  }




});


