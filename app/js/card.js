document.addEventListener('DOMContentLoaded', function(){
    const card = document.querySelector('.footer__card'),
          modal = document.querySelector('.modal'),
          body = document.querySelector('body');


    card.addEventListener('click', function(e){
        modal.classList.add('modal_active');

        ymaps.ready(init);
    })    

    body.addEventListener('click', function(e){
        if(!e.target.closest('.modal') && !e.target.closest('.footer__card')){
            modal.classList.remove('modal_active');
        }
    })

    function init(){
        const card = new ymaps.Map( modal, {
            center: [56.0711921264669,92.93233040807338],
            zoom: 16,
            controls: ['zoomControl']
        });
        
        const marks = new ymaps.Placemark([56.070856068651935,92.93171349999994],{
            hintContent: "<strong>«Красноярский лесопитомник» </strong>",
            balloonContent: "ул. Шумяцкого, 10 , 3 этаж, офис 307"
        },{
            iconLayout: 'default#image',
            iconImageHref: '../img/svg/card-metka.svg',
            iconImageSize: [30,30]
        
        });

        card.geoObjects.add(marks);
    }
})