document.addEventListener('DOMContentLoaded', function(){
    const imgBlock = document.querySelectorAll('.aboutUs__img-block');

    function setHeight(){
        imgBlock.forEach((el)=>{
            const container = el.parentElement,
                  textHeight = container.querySelector('.aboutUs__discription').offsetHeight,
                  imgHeimg = textHeight/100*90;
    
            el.style.height = `${imgHeimg}px`;
    
        })
    }

    setHeight();

    window.onresize = setHeight();
});