$('.filter__item').click(function(event) {
   var i = $(this).data('filter');
   if(i == 1){
      $('.portfolio__column').show();
   }else{
      $('.portfolio__column').hide();
      $('.portfolio__column.f_' + i).show();
   }
   $('.filter__item').removeClass('filter__item-active');
   $(this).addClass(' filter__item-active');
  
   return false;
});

$(window).scroll(function(event){
   var s = 0 - $(this).scrollTop()/2;
   $('.mainblock__image.').css('transform','translate3d(0, '+s+'+px, 0)');
});
