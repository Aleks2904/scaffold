document.addEventListener('DOMContentLoaded', function(){
    const titleCompensatory = document.querySelector('.compensatory-reforestation__title'),
          imgContainerCompensatory = document.querySelector('.compensatory-reforestation__img-wrap'),
          titleZKS = document.querySelector('.seedlings-zks__title'),
          imgContainerZKS = document.querySelector('.seedlings-zks__img-wrap');
          imgHeight = 300,
          marginTopImg = 5;

    let defoltWidth = window.innerWidth;

    function heightSetting (title, imgContainer){
        const width = window.innerWidth;
        title.style.paddingBottom = 0;

        if(width < 480){
            const titleHeight = title.clientHeight;
    
            title.style.paddingBottom = imgHeight + marginTopImg + 'px';
            imgContainer.style.height = imgHeight + 'px';
            imgContainer.style.top = marginTopImg + titleHeight + 'px';
        }
    }

    window.addEventListener('resize', ()=>{
        if(defoltWidth != window.innerWidth){
            heightSetting(titleCompensatory, imgContainerCompensatory);
            heightSetting(titleZKS, imgContainerZKS);
            location.reload();
        
        }
    })

    heightSetting(titleCompensatory, imgContainerCompensatory);
    heightSetting(titleZKS, imgContainerZKS);
})