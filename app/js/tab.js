document.addEventListener('DOMContentLoaded', function(){
    const linkFooter = document.querySelectorAll('.footer__item-link'),
          footer = document.querySelector('#js-footer'),
          footerContainer = document.querySelector('.footer__container'),
          body = document.querySelector('body');

    document.addEventListener('keyup', function(e){
        if(e.key == 'Tab'){
            console.log(footer);
            linkFooter.forEach(function(event){
                if(e.target == event || e.target == footer){
                    footer.classList.add('footer-active');
                    footerContainer.classList.add('footer-container-active');
                }
            })

            if(!e.target.classList.contains('footer__item-link')){
                if(!e.target.classList.contains('footer')){
                    footer.classList.remove('footer-active');
                    footerContainer.classList.remove('footer-container-active');
                }
            }
        }
    });

    body.addEventListener('click', function(e){
        if(!e.target.closest('#js-footer')){
            footer.classList.remove('footer-active');
            footerContainer.classList.remove('footer-container-active');
        }
    })
});