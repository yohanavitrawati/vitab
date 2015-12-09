(function($){
    $.fn.ViTab = function(options){
    var object = this;
    var title = 'h3';
    var shadow = false;

    var defaults = {
        show_title : true
    }
    var options = $.extend(defaults, options);
    
    var header = $(object).find(title);
    
    //select
    if(header.length > 0){
        $(object).prepend('<div class="cc_tab_menu clearfix"></div>');
        $('.cc_tab_menu').append('<ul></ul>');
        var n = 0;
        header.each(function(){
            $('.cc_tab_menu').children('ul').append('<li><a href="/" class="cc_tab" id="tab-'+n+'">'+$(this).text()+'</a></li>');
            n++;
        });
    }
    //set content
    var i = 0;
    $(object).find(title).each(function(){           
           $(this).nextUntil(title).wrapAll('<div class="content_spec content_spec'+i+'"></div>');
           if(options.show_title){
               $('.content_spec'+i).prepend('<h3>'+$(this).text()+'</h3>');
           }
           $(this).remove();
           i++;
    });
    $(object).find('.content_spec').wrapAll('<div class="content_spec_wrapper" />');
      
    //first view
    $('#tab-0').addClass('active');
    $('.content_spec0').css('display','block');
    
    //on change
    $('a.cc_tab').on("click",function(e){
        e.preventDefault();
       var id_arr = $(this).attr('id');
       var id_tab = id_arr.split('-');
       var id = id_tab[1];
       $('.content_spec').slideUp('slow');
       if(!$('.content_spec'+id).is(":animated")){
            $('.content_spec'+id).slideDown('slow');
       }
       $('.cc_tab_menu').find('a').removeClass('active');
       $('#tab-'+id).addClass('active');
    });
    
    if(options.shadow){
        $('.content_spec_wrapper').append('<div class="content_shadow"></div>');
    }
    $('.cc_tab_menu').next('p').addClass('general_info');
}
})(jQuery);