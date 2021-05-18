document.addEventListener('DOMContentLoaded', function(){
    sizeSetting ();
    window.addEventListener('resize', sizeSetting);

    function sizeSetting (){
        const imgContainer = document.querySelector('.seedlings-zks__img-wrap');
        const fakeContainer = document.querySelector('.seedlings-zks__img-fake');
        const blockContainer = document.querySelector('.seedlings-zks__container');

        let paddingTop = window.getComputedStyle( blockContainer, null).getPropertyValue('padding-top');

        paddingTop = paddingTop.replace(/[a-zа-яё]/gi, '');

        paddingTop = Number(paddingTop);
    
        let width = imgContainer.clientWidth,
            height = imgContainer.clientHeight;

        console.log(paddingTop)
        console.log(height)

        height = height - paddingTop;
    
        fakeContainer.style.width = width + 'px';
        fakeContainer.style.height = height + 'px';
    }

})