document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('#form'),
          body = document.querySelector('body');

    const objectServices = {
        title: 'Отправьте нам заявку, чтобы получить консультацию и&nbsp;узнать стоимость услуг с&nbsp;учетом особенностей участка и&nbsp;прочих факторов:',
        btnName: 'Отправить заявку на&nbsp;услуги'
    };

    const objectSeedling = {
        title: 'Оставьте заявку на&nbsp;выращивание сеянцев:',
        btnName: 'Отправить заявку'
    };

    const btnServices = document.querySelector('#js-footer-btn-services'),
          btnSeedling1 = document.querySelector('#js-footer-btn-seedlings'),
          btnSeedling2 = document.querySelector('#js-seedlings-zks-btn');

    btnServices.addEventListener('click', ()=>{
        formСreation(objectServices)
    });
    btnSeedling1.addEventListener('click', ()=>{
        formСreation(objectSeedling)
    });
    btnSeedling2.addEventListener('click', ()=>{
        formСreation(objectSeedling)
    });

    form.addEventListener('click', function(e){
        if(e.target.id == 'js-form-close-btn'){
            form.innerHTML = '';
            form.classList.remove('form_active');
            form.classList.remove('card');
        }
    })

    body.addEventListener('click', function(e){
        if(!form.contains(e.target) && !e.target.classList.contains('btn-open-modal')  && !e.target.classList.contains('open-card')){
            form.innerHTML = '';
            form.classList.remove('form_active');
            form.classList.remove('card');
        }
    })

    form.addEventListener('submit', function(e){
        e.preventDefault();

        form.querySelector('.form__form').reset();

        const formStatys = form.querySelector('.form__form-check');

        formStatys.innerHTML = 'Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.';
        formStatys.classList.add('form__form-check_active');

        setTimeout(()=>{
            formStatys.classList.remove('form__form-check_active');
        },3000)

        setTimeout(()=>{
            formStatys.innerHTML = 'Cтатус заявки'
        },3000)
    })

    function formСreation(object){
        form.classList.add('form_active');

        form.innerHTML = `
            <div class="form__container">
                <button id="js-form-close-btn" class="form__close"></button>

                <form class="form__form" action="#">
                    <h3 class="form__form-title">
                        ${object.title}
                    </h3>

                    <label class="form__form-label">  
                        <input class="form__form-input" type="text" placeholder="Ваше имя:" required>

                        <svg class="form__form-icon" viewbox="0 0 12 12">
                            <use xlink:href="img/svg/price/icon_name.svg#name"></use> 
                        </svg>
                    </label>

                    <label class="form__form-label">
                        <input class="form__form-input" type="tel" placeholder="Ваш телефон:" required>

                        <svg class="form__form-icon" viewbox="0 0 12 12">
                            <use xlink:href="img/svg/price/icon_phone.svg#phone"></use> 
                        </svg>
                    </label>

                    <label class="form__form-label">
                        <input class="form__form-input" type="email" placeholder="Ваш e-mail:" required>

                        <svg class="form__form-icon" viewbox="0 0 12 14">
                            <use xlink:href="img/svg/price/icon_email.svg#email"></use> 
                        </svg>
                    </label>

                    <button class="form__form-btn" type="submit">
                        ${object.btnName}
                    </button>

                    <span class="form__form-check">
                        Cтатус
                    </span>
                </form>
            </div>
        `
    }
});