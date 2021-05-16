document.addEventListener('DOMContentLoaded', function(){
    const header = document.querySelector('#js-header'),
          navLogo = document.querySelector('#js-nav-header'),
          link = document.querySelectorAll('.header__nav-link'),
          minDesktopWidth = 1024;

    window.addEventListener('scroll', function() {
        headerScroll();
        activeLinkScroll();
    });

    window.addEventListener('resize', headerScroll);
    
    headerScroll();
    activeLinkScroll();

    function headerScroll(){
        const posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop,
               width = window.innerWidth;
        if(posTop !== 0 && width >= minDesktopWidth){
            header.classList.add('header_scroll');
            navLogo.classList.add('header__nav_scroll');
            link.forEach((el)=>{
                el.classList.add('header__nav-link_scroll')
            })
        }else{
            header.classList.remove('header_scroll');
            navLogo.classList.remove('header__nav_scroll');
            link.forEach((el)=>{
                el.classList.remove('header__nav-link_scroll')
            })
        }
    }

    function activeLinkScroll(){
        const topMenu = $("#js-header"),
              menuItems = topMenu.find("a"),
              scrollItems = menuItems.map((i, el)=>{
                const item = el.getAttribute("href");

                if (item.length){ 
                    const link = document.querySelector(`a[href="${item}"]`)
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

       const linkActive = document.querySelector(`a[href="#${cur}"]`);
       linkActive.classList.add('header__nav-link_active');
    }

    const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
})