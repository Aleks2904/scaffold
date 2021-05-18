document.addEventListener('DOMContentLoaded', function(){

    saveHeight();

    window.addEventListener('resize', saveHeight);
    
    function saveHeight(){
        const width = document.documentElement.clientWidth,
              imgContainer = document.querySelector('.compensatory-reforestation__img-wrap'),
              block = document.querySelector('.compensatory-reforestation'),
              pb = 148;

        if(width < 1384){
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
        }else{
            imgContainer.style.height = '100%';
            block.style.paddingBottom = pb + 'px';
        }
        
    }
})