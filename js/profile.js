$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});
// Fishing Badge //
 // when you click on accept the badge will show in  badges completed //
$(document).ready(function() {
    $('.fishingShowCompleted').click(function() {
      $('.fishingCompleted').show();
      $('.fishingProgress').hide();
      $('.fishingBadge').hide();

    });
});

 // when you click on accept the badge will show in  badges in progress //
$(document).ready(function() {
    $('.fishingAccepted').click(function() {
      $('.fishingCompleted').hide();
      $('.fishingProgress').show();
      $('.fishingBadge').hide();

    });
});

 // when loadid will only show all badges //
$(document).ready(function() {
    $('.fishingCompleted').hide();
    $('.fishingProgress').hide();
    $('fishingAll').show();
});

// ------------------------------------------------------------------------------------------ //
// Boxing Badge //
 // when you click on accept the badge will show in  badges completed //
$(document).ready(function() {
    $('.boxingShowCompleted').click(function() {
      $('.boxingCompleted').show();
      $('.boxingProgress').hide();
      $('.boxingBadge').hide();

    });
});

 // when you click on accept the badge will show in  badges in progress //
$(document).ready(function() {
    $('.boxingAccepted').click(function() {
      $('.boxingCompleted').hide();
      $('.boxingProgress').show();
      $('.boxingAll').hide();

    });
});

 // when loadid will only show all badges //
$(document).ready(function() {
    $('.boxingCompleted').hide();
    $('.boxingProgress').hide();
    $('boxingBadge').show();
});
// ------------------------------------------------------------------------------------------ //
//float Therapy badge //
 // when you click on accept the badge will show in  badges completed //
$(document).ready(function() {
    $('.floatTherapyShowCompleted').click(function() {
      $('.floatTherapyCompleted').show();
      $('.floatTherapyProgress').hide();
      $('.floatTherapyBadge').hide();

    });
});

 // when you click on accept the badge will show in  badges in progress //
$(document).ready(function() {
    $('.floatTherapyAccepted').click(function() {
      $('.floatTherapyCompleted').hide();
      $('.floatTherapyProgress').show();
      $('.floatTherapyAll').hide();

    });
});

 // when loadid will only show all badges //
$(document).ready(function() {
    $('.floatTherapyCompleted').hide();
    $('.floatTherapyProgress').hide();
    $('floatTherapyBadge').show();
});

// play sound when badge is completed //
  function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }
// ------------------------------------------------------------------------------------------ //
// War Dog Badge //
 // when you click on accept the badge will show in  badges completed //
$(document).ready(function() {
    $('.warDogShowCompleted').click(function() {
      $('.warDogCompleted').show();
      $('.warDogProgress').hide();
      $('.warDogBadge').hide();

    });
});

 // when you click on accept the badge will show in  badges in progress //
$(document).ready(function() {
    $('.warDogAccepted').click(function() {
      $('.warDogCompleted').hide();
      $('.warDogProgress').show();
      $('.warDogAll').hide();

    });
});

 // when loadid will only show all badges //
$(document).ready(function() {
    $('.warDogCompleted').hide();
    $('.warDogProgress').hide();
    $('warDogBadge').show();
});

