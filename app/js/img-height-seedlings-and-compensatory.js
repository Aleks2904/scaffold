document.addEventListener('DOMContentLoaded', function(){
    const titleCompensatory = document.querySelector('.compensatory-reforestation__title'),
          imgContainerCompensatory = document.querySelector('.compensatory-reforestation__img-wrap'),
          titleZKS = document.querySelector('.seedlings-zks__title'),
          imgContainerZKS = document.querySelector('.seedlings-zks__img-wrap');
          imgHeight = 300,
          marginTopImg = 5;

    function heightSetting (title, imgContainer){
        width = window.innerWidth;

        if(width < 768){
            title.style.paddingBottom = 0;

            const titleHeight = title.clientHeight;
    
            title.style.paddingBottom = imgHeight + marginTopImg + 'px';
            imgContainer.style.height = imgHeight + 'px';
            imgContainer.style.top = marginTopImg + titleHeight + 'px';
        }else{

        }
    }

    window.addEventListener('resize', ()=>{
        heightSetting(titleCompensatory, imgContainerCompensatory);
        heightSetting(titleZKS, imgContainerZKS);
        location.reload();
    })

    heightSetting(titleCompensatory, imgContainerCompensatory);
    heightSetting(titleZKS, imgContainerZKS);
})