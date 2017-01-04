jQuery(function($){

  // ==== FADEIN INTRO PAGE ==== //
  $('body').css('display', 'none');
  $('body').fadeIn(2000);

  // ==== SCROLLA ==== //
  $('.animate').scrolla();

  // ==== INIT BIGTEXT PLUGIN ==== //
  $('#bigtext').bigtext();
  $('.homebigtext').bigtext();

  // **** NAVBAR REDUCE ON SCROLL ****
    var scroll_start = 0;
    var startchange = $('body');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('#navbar').css({
                height: '30px',
                'font-size': '0.7rem'});
            $('.navLink').css("margin-top", "-30px");
        } else {
            $('#navbar').css({
                height: '67px',
                'font-size': '1rem',
            });
        }
    });


// ========================= //
}); // == CLOSING JQUERY == //
