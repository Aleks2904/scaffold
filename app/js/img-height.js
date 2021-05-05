document.addEventListener('DOMContentLoaded', function(){
    const aboutUs = document.querySelectorAll('.aboutUs__img-block'),
          when = document.querySelector('.when__img-block'),
          newServices = document.querySelector('.new-services__img-block');

    function setHeightAboutUs(){
        aboutUs.forEach((el)=>{
            const container = el.parentElement,
                  textHeight = container.querySelector('.aboutUs__discription').offsetHeight,
                  imgHeimg = textHeight/100*90;
    
            el.style.height = `${imgHeimg}px`;
    
        })
    }

    function setHeightWhen(){
        const container = document.querySelector('.when__text-container').offsetHeight;
        when.style.height = `${container}px`;
    }
 
    function setHeightNewServices(){
        newServices.style.height = '0px';

        const container = document.querySelector('.new-services__text-container').offsetHeight;

        newServices.style.height = `${container}px`;
    }

    setHeightAboutUs();
    setHeightWhen();
    setHeightNewServices();

    window.onresize = setHeightAboutUs();
    window.onresize = setHeightWhen();
    window.onresize = setHeightNewServices();
});