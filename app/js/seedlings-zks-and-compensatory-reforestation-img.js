document.addEventListener('DOMContentLoaded', function(){
    const ZKSimgContainer = document.querySelector('.seedlings-zks__img-wrap');
    const ZKSfakeContainer = document.querySelector('.seedlings-zks__img-fake');
    const ZKSblockContainer = document.querySelector('.seedlings-zks__container');
    const compensatoryImgContainer = document.querySelector('.compensatory-reforestation__img-wrap');
    const compensatoryFakeContainer = document.querySelector('.compensatory-reforestation__img-fake');
    const compensatoryBlockContainer = document.querySelector('.compensatory-reforestation__container');

    sizeSetting (ZKSimgContainer, ZKSfakeContainer, ZKSblockContainer);
    sizeSetting (compensatoryImgContainer, compensatoryFakeContainer, compensatoryBlockContainer);
    
    window.addEventListener('resize', function(){
        sizeSetting (ZKSimgContainer, ZKSfakeContainer, ZKSblockContainer);
        sizeSetting (compensatoryImgContainer, compensatoryFakeContainer, compensatoryBlockContainer);
    });

    function sizeSetting (img, fake, block){
        const imgContainer = img;
        const fakeContainer = fake;
        const blockContainer = block;

        let paddingTop = window.getComputedStyle( blockContainer, null).getPropertyValue('padding-top');

        paddingTop = paddingTop.replace(/[a-zа-яё]/gi, '');

        paddingTop = Number(paddingTop);
    
        let width = imgContainer.clientWidth,
            height = imgContainer.clientHeight;

        console.log(height)
        console.log(blockContainer)
        console.log('----------')

       // height = height - paddingTop;
    
        fakeContainer.style.width = width + 'px';
        fakeContainer.style.height = height + 'px';
    }

})