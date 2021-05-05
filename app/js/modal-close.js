document.addEventListener('DOMContentLoaded', function(){
    const body = document.querySelector('body'),
          modal = document.querySelector('.modal');

    body.addEventListener('click', function(e){
        if(!e.target.closest('.modal') && 
           !e.target.closest('.footer__card') &&
           !e.target.closest('.new-services__btn')
        ){
            modal.classList.remove('modal_active');
        }
    })
})