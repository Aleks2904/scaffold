document.addEventListener('DOMContentLoaded', function(){
    const btnOpen = document.querySelector('#js-header-btn-open'),
          btnClose = document.querySelector('#js-header-btn-close'),
          nav = document.querySelector('#js-nav-header'),
          body = document.querySelector('body'),
          header = document.querySelector('#js-header'),
          link = document.querySelectorAll('.header__nav-link'),
          openCard = document.querySelectorAll('.open-card');

    btnOpen.addEventListener('click', function(e){
        e.preventDefault();

        nav.classList.add('header__nav_active');
        btnOpen.setAttribute('aria-expanded', 'true');
        btnClose.setAttribute('aria-expanded', 'false');

        animationNavOpen();

    })

    openCard.forEach(function(e){
        e.addEventListener('click', function(){
            close();
        })
    })

    link.forEach(function(e){
        e.addEventListener('click', function(){
            close();
        })
    })

    btnClose.addEventListener('click', function(e){
        e.preventDefault();

        close();
    })

    body.addEventListener('click', function(e){
        if(e.target != btnOpen && !e.target.closest('#js-nav-header')){
            close();
        }
    })

    window.onresize = function(){
        const width = document.documentElement.clientWidth;
        
        if(width >= 1024){
            close();
        }
    };

    function close(){
        animationNavClose();
        setTimeout(()=>{
            nav.classList.remove('header__nav_active');
            btnOpen.setAttribute('aria-expanded', 'false');
            btnClose.setAttribute('aria-expanded', 'true');
        },600)
    };

    function animationNavOpen(){
        const width = document.documentElement.clientWidth;
        
        if(width >= 1024){
            nav.classList.remove('header__nav-block_active');

            nav.style.transform = 'translateX(0%)';

        }else{
            nav.style.transform = 'translateX(0%)';
            nav.style.transition = 'transform 0.7s'
        }
    }

    function animationNavClose(){
        const width = document.documentElement.clientWidth;
        
        if(width >= 1024){
            nav.classList.remove('header__nav-block_active');

            nav.style.transform = 'translateX(0%)';
        }else{
            nav.style.transform = 'translateX(150%)';
            nav.style.transition = 'transform 0.7s'
        }
    }
})