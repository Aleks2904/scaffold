document.addEventListener('DOMContentLoaded', function(){
    const btnOpen = document.querySelector('#js-header-btn-open'),
          btnClose = document.querySelector('#js-header-btn-close'),
          nav = document.querySelector('#js-nav-header'),
          body = document.querySelector('body'),
          header = document.querySelector('#js-header'),
          link = document.querySelectorAll('.header__nav-link');

    btnOpen.addEventListener('click', function(e){
        e.preventDefault();

        nav.classList.add('header__nav_active');
        body.classList.add('open-modal');
        header.classList.add('header_active');
        btnOpen.setAttribute('aria-expanded', 'true');
        btnClose.setAttribute('aria-expanded', 'false');

    })

    link.forEach(function(e){
        e.addEventListener('click', function(){
            close();
        })

        e.addEventListener('touchend', function(){
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
        nav.classList.remove('header__nav_active');
        body.classList.remove('open-modal');
        header.classList.remove('header_active');
        btnOpen.setAttribute('aria-expanded', 'false');
        btnClose.setAttribute('aria-expanded', 'true');
    };
})