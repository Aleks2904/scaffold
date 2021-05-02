document.addEventListener('DOMContentLoaded', function(){
    const imgBlock = document.querySelectorAll('.aboutUs__img-block');
    const imgBlock2 = document.querySelector('.when__img-block');

    function setHeight(){
        imgBlock.forEach((el)=>{
            const container = el.parentElement,
                  textHeight = container.querySelector('.aboutUs__discription').offsetHeight,
                  imgHeimg = textHeight/100*90;
    
            el.style.height = `${imgHeimg}px`;
    
        })
    }

    function test(){
        const container = document.querySelector('.when__text-container').offsetHeight;
        imgBlock2.style.height = `${container}px`;
    }

    setHeight();
    test();

    window.onresize = setHeight();
});