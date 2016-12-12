jQuery(function($){

  // ==== FADEIN INTRO PAGE ==== //
  $('body').css('display', 'none');
  $('body').fadeIn(2000);

  // ==== SCROLLA ==== //
  $('.animate').scrolla();

  // ==== INIT BIGTEXT PLUGIN ==== //
  $('#bigtext').bigtext();
  $('.homebigtext').bigtext();

  // // ==== NAV BAR SHOW ====
  // var scroll_start = 0;
  // var startchange = $('#info');
  // var offset = startchange.offset();
  // $(document).scroll(function() {
  //     scroll_start = $(this).scrollTop();
  //     if(scroll_start > offset.top) {
  //         $('#navbar').show();
  //     } else {
  //         $('#navbar').hide();
  //     }
  // });

  // ==== SLIDER ==== //










// ========================= //
}); // == CLOSING JQUERY == //
