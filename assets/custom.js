function incrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
    if (!isNaN(currentVal)) {
      parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      parent.find('input[name=' + fieldName + ']').val(0);
    }
  }
  
  function decrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('.template-product .input-spinner');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
    if (!isNaN(currentVal) && currentVal > 0) {
      parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      parent.find('input[name=' + fieldName + ']').val(0);
    }
  }
  
  $('.template-product .input-spinner').on('click', '.button-plus', function(e) {
    incrementValue(e);
  });
  
  $('.template-product .input-spinner').on('click', '.button-minus', function(e) {
    decrementValue(e);
  });
  /*radio check show hide div*/

$(document).ready(function(){
    $('.custome-radio input[type="radio"]').click(function(){
        $(".custome-radio.active").removeClass("active");
        $(this).parent(".custome-radio").addClass("active");
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".pdp-radio-sub").not(targetBox).hide();
        $(targetBox).show();
    });
    /*window scroll class add to header start here*/
    jQuery(window).scroll(function(){
        jQuery(this).scrollTop()>50?
        jQuery("header").addClass("fix-header"):$("header").removeClass("fix-header")
    });
    /*window scroll class add to header end here*/ 
  
    var header_hright = $('.site-header').outerHeight();
    $('.wrapper').css('margin-top', header_hright + 'px');
    
    $('.menu-icon').on('click', function(){
      $('body').toggleClass('open');
    });
    $('.close-button').on('click', function(){
      $('body').toggleClass('open');
    }); 

  // Main Product Slider
  var productImgCount = $(".pdp-image-block-main").length;
  if (productImgCount > 1) {
     $('.pdp-inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.pdp-inner',
      dots: false,
      arrows: false,
      focusOnSelect: true
    });
  }
}); 
