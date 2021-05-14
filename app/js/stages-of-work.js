$( document ).ready(function(){
    const btn = $('.stages-of-work__btn'),
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

        const li = $(this).parents('.stages-of-work__item'),
              pElem = li.children('.stages-of-work__container-response'),
              text = pElem.children('.stages-of-work__response'),
              btn = $(this).children('.stages-of-work__btn-icon');

        pElem.slideToggle('slowe');
        text.toggleClass('stages-of-work__response_active1');

        if(!text.hasClass("stages-of-work__response_active1")){
            text.addClass('stages-of-work__response_active2');

            setTimeout(function(){
                text.removeClass('stages-of-work__response_active2');
            }, 300)
        }
    
        $(this).attr("aria-expanded" ,function(index, attr){
            if(attr == 'false'){
                btn.addClass('stages-of-work__btn-icon_rotate');
                return true;
            }else{
                btn.removeClass('stages-of-work__btn-icon_rotate');
                return false;
            }
        })
        
        activeSlide = li;
    });

    function close(){
        const li = activeSlide,
              pElem = li.children('.stages-of-work__container-response'),
              text = pElem.children('.stages-of-work__response'),
              btnIcon = li.find('.stages-of-work__item-btn-icon'),
              btn = li.find('.stages-of-work__btn-stages-of-work');

        pElem.hide('slowe');      
        text.removeClass('stages-of-work__response_active1');
        btn.attr("aria-expanded", "false");
        btnIcon.removeClass('stages-of-work__item-btn-icon_rotate');

        if(!text.hasClass("stages-of-work__response_active1")){
            text.addClass('stages-of-work__response_active2');

            setTimeout(function(){
                text.removeClass('stages-of-work__response_active2');
            }, 300)
        }
    };
    
});