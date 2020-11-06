$( document ).ready(function(){
    const btn = $('.services__btn-services'),
          body = $('body');

    let activeSlide;

    body.on('click',function(e){
        if(activeSlide != undefined){
            if(activeSlide.has(e.target).length === 0){
                close();
            }
        }
    })

    btn.on('click', function(e){
        if(activeSlide != undefined){
            if(activeSlide.has(e.target).length === 0){
                close();
            };
        };

        const li = $(this).parents('.services__item'),
              pElem = li.children('.services__container-response'),
              text = pElem.children('.services__response'),
              btn = $(this).children('.services__item-btn-icon');

        pElem.slideToggle('slowe');
        text.toggleClass('services__response_active1');

        if(!text.hasClass("services__response_active1")){
            text.addClass('services__response_active2');

            setTimeout(function(){
                text.removeClass('services__response_active2');
            }, 300)
        }
    
        $(this).attr("aria-expanded" ,function(index, attr){
            if(attr == 'false'){
                btn.addClass('services__item-btn-icon_rotate');
                return true;
            }else{
                btn.removeClass('services__item-btn-icon_rotate');
                return false;
            }
        })
        
        activeSlide = li;
    });

    function close(){
        const li = activeSlide,
              pElem = li.children('.services__container-response'),
              text = pElem.children('.services__response'),
              btnIcon = li.find('.services__item-btn-icon'),
              btn = li.find('.services__btn-services');

        pElem.hide('slowe');      
        text.removeClass('services__response_active1');
        btn.attr("aria-expanded", "false");
        btnIcon.removeClass('services__item-btn-icon_rotate');

        if(!text.hasClass("services__response_active1")){
            text.addClass('services__response_active2');

            setTimeout(function(){
                text.removeClass('services__response_active2');
            }, 300)
        }
    };
    
});