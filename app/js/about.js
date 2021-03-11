document.addEventListener('DOMContentLoaded', function(){
    const conteiner = document.querySelector('#js-about-us-container'),
          imgBlock = document.querySelector('.aboutUs__img-block'),
          heightImgBlock = 75;

    function setHeight(){
        const heightBlock = conteiner.offsetHeight,
              heightImg = heightBlock / 100 * heightImgBlock;

        imgBlock.style.height = `${heightImg}px`;
    }

    setHeight();

    window.onresize = setHeight();
});