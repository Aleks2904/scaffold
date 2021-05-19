document.addEventListener('DOMContentLoaded', function(){
    const header = document.querySelector('#js-header'),
          navBar = document.querySelector('#js-main-nav'),
          link = document.querySelectorAll('.header__nav-link'),
          minDesktopWidth = 1024;

    window.addEventListener('scroll', function() {
        headerScroll();
        activeLinkScroll();
    });

    window.addEventListener('resize', ()=>{
        headerScroll;
        headerBgMobail();
    })
    
    headerScroll();
    activeLinkScroll();
    headerBgMobail();

    function headerScroll(){
        const  posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop,
               width = window.innerWidth;

        
            if(posTop !== 0 && width >= minDesktopWidth){
                header.classList.add('header_scroll');
                navBar.classList.add('header__nav_scroll');
                link.forEach((el)=>{
                    el.classList.add('header__nav-link_scroll')
                })
            }else{
                header.classList.remove('header_scroll');
                navBar.classList.remove('header__nav_scroll');
                link.forEach((el)=>{
                    el.classList.remove('header__nav-link_scroll')
                })
            }
        
    }

    function activeLinkScroll(){

            const   topMenu = $("#js-main-nav"),
                    menuItems = topMenu.find("a"),
                    scrollItems = menuItems.map((i, el)=>{
                        const item = el.getAttribute("href");

                        if (item.length){ 
                            const link = navBar.querySelector(`a[href="${item}"]`)
                            link.classList.remove('header__nav-link_active');

                            return item; 
                        }
                    });

                let cur = scrollItems.map((i, el)=>{
                    const block = document.querySelector(`${el}`);

                    if (block.getBoundingClientRect().top >= 0){
                        return block;
                    }
                })

            cur = cur[0].id;

            const linkActive = navBar.querySelector(`a[href="#${cur}"]`);
            linkActive.classList.add('header__nav-link_active');
      
    }

    function headerBgMobail(){
        const width = window.innerWidth;

        if(width < 1024){
            header.classList.add('header_scroll')
        }
    }
})