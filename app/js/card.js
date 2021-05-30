document.addEventListener('DOMContentLoaded', function(){
    const openCard = document.querySelectorAll('.open-card'),
          form = document.querySelector('#form'),
          defoltCard = document.querySelector('.footer__card');

    openCard.forEach( el => {
        el.addEventListener('click', function(e){ 
            e.preventDefault();
            form.innerHTML = '';
            ymaps.ready(init(form));

            form.classList.add('form_active');
            form.classList.add('card');    
        })
    })

    setTimeout(()=>{
        ymaps.ready(init(defoltCard));
    }, 1000)

    function init(rout){
        const card = new ymaps.Map(rout, {
            center: [56.070856068651935,92.93172249999995],
            zoom: 14,
            controls: ['zoomControl']
        });
        
        const marks = new ymaps.Placemark([56.070856068651935,92.93172249999995],{
            hintContent: "<strong>Красноярский лесопитомник</strong>",
            balloonContent: "г. Красноярск, ул. Шумяцкого, 10 , 3 этаж, офис 307"
        });

        card.geoObjects.add(marks);
    }

})