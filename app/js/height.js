document.addEventListener('DOMContentLoaded', function(){
    const containPage = document.querySelectorAll('.contain-page'),
          header = document.querySelector('#js-header'),
          body = document.querySelector('body');

    function installContainPageHeight (){
        const hHeader = header.clientHeight,
              hBody = body.clientHeight;

       let  allHeight,
            padding;

        if(hBody >= 960){
           padding = 60;
        }else if(hBody <= 320){
            padding = 60;
        }else if(hBody <= 360){
            padding = 60;
        }else if(hBody <= 375){
            padding = 60;
        }else if(hBody <= 414){
            padding = 60;
        }else if(hBody <= 768){
            padding = 60;
        }

       allHeight = hBody - ((hHeader * 2) + padding);

       containPage.forEach(function(e){
        e.style.height = `${allHeight}px`;
    })
    }

    window.addEventListener('resize', function(){
        installContainPageHeight ();
    })

    installContainPageHeight ();
})