document.addEventListener('DOMContentLoaded', function(){
    const openCard = document.querySelectorAll('.open-card'),
          form = document.querySelector('#form'),
          body = document.querySelector('body');

    openCard.forEach( el => {
        el.addEventListener('click', function(e){ 
            e.preventDefault();
            form.innerHTML = '';
            ymaps.ready(init);

            form.classList.add('form_active');
            form.classList.add('card');    
        })
    })

    function init(){
        const card = new ymaps.Map(form, {
            center: [56.070856068651935,92.93172249999995],
            zoom: 14,
            controls: ['zoomControl']
        });
        
        const marks = new ymaps.Placemark([56.070856068651935,92.93172249999995],{
            hintContent: "<strong>Красноярский лесопитомник</strong>",
            balloonContent: "г. Красноярск, ул. Шумяцкого, 10 , 3 этаж, офис 307"
        }// },{
        //     iconLayout: 'default#image',
        //     iconImageHref: '../img/svg/card-metka.svg',
        //     iconImageSize: [20,20]
        
        // });
        );

        card.geoObjects.add(marks);
    }

})