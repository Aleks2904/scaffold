document.addEventListener('DOMContentLoaded', function(){

    saveHeight();

    window.addEventListener('resize', saveHeight);
    
    function saveHeight(){
        const width = window.innerWidth,
              imgContainer = document.querySelector('.compensatory-reforestation__img-wrap'),
              block = document.querySelector('.compensatory-reforestation');

        if(width > 1023){
            pb = 148;
        }else{
            pb = 80
        }

        if(width < 1400 && width > 767){
            const heightTextContainer = document.querySelector('.compensatory-reforestation__main-text-container').clientHeight;
            let paddingTop = document.querySelector('.compensatory-reforestation__container');

            paddingTop = window.getComputedStyle(paddingTop, null).getPropertyValue('padding-top');

            paddingTop = paddingTop.replace(/[a-zа-яё]/gi, '');

            paddingTop = Number(paddingTop);

            const height = heightTextContainer + paddingTop;

            imgContainer.style.height = height  + 'px';

            //текст с низу

            const textContainerHight = document.querySelector('.compensatory-reforestation__post-container').clientHeight;

            let padding = pb + textContainerHight;

            block.style.paddingBottom = padding + 'px';

        }else if(width < 768){
            const title = document.querySelector('.compensatory-reforestation__title');

            //высота

            let paddingBototm = window.getComputedStyle(title, null).getPropertyValue('padding-bottom');

            paddingBototm = paddingBototm.replace(/[a-zа-яё]/gi, '');

            paddingBototm = Number(paddingBototm);

            imgContainer.style.height = paddingBototm  + 'px';
            
            block.style.paddingBottom = 0;
        }else{
            imgContainer.style.height = '100%';
            block.style.paddingBottom = pb + 'px';
        }
        
    }
})