document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('#form'),
          priceForm = document.querySelector('#js-price-form'),
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
            body.classList.remove('open-modal');
        }
    })

    body.addEventListener('click', function(e){
        if(!form.contains(e.target) && !e.target.classList.contains('btn-open-modal')  && !e.target.classList.contains('open-card')){
            form.innerHTML = '';
            form.classList.remove('form_active');
            form.classList.remove('card');
            body.classList.remove('open-modal');
        }
    })

    form.addEventListener('submit', formSend);
    priceForm.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();
        let forms;

        if(this.tagName === 'FORM'){
            forms = this;
        }else{
            forms = this.querySelector('form');
        }

        const formTitle = forms.querySelector('h3').textContent.replace(/\s+/g, ' ').trim(),
              formStatys = forms.querySelector('span');

        let classFormStatys = formStatys.classList,
            classProcessing = classFormStatys + '_processing',
            classAccomplished = classFormStatys + '_accomplished',
            classError = classFormStatys + '_error';

        formStatys.classList.remove(classProcessing);
        formStatys.classList.remove(classError);

        formStatys.innerHTML = 'Обработка ...';
        formStatys.classList.add(classProcessing);

        let formData = new FormData(forms);
        formData.set('title', formTitle);

        let response = await fetch('sendmail.php',{
            method: 'POST',
            body: formData
        });

        if(response.ok){
            forms.reset();
            formStatys.classList.remove(classProcessing);
            formStatys.classList.add(classAccomplished);
            formStatys.innerHTML = 'Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.';
            setTimeout(()=>{
                formStatys.classList.remove(classAccomplished);
                formStatys.innerHTML = '';
            },3000)
        }else{
            formStatys.classList.remove(classProcessing);
            formStatys.classList.add(classError);
            formStatys.innerHTML = 'Отправка не удалась';
            setTimeout(()=>{
                formStatys.classList.remove(classError);
                formStatys.innerHTML = '';
            },3000)
        }
    }

    function formСreation(object){
        form.classList.add('form_active');
        body.classList.add('open-modal');

        form.innerHTML = `
            <div class="form__container">
                <button id="js-form-close-btn" class="form__close"></button>

                <form action='#' class="form__form" action="#">
                    <h3 class="form__form-title">
                        ${object.title}
                    </h3>

                    <label class="form__form-label">  
                        <input class="form__form-input" name="name" type="text" placeholder="Ваше имя:" required>

                        <svg class="form__form-icon" viewbox="0 0 12 12">
                            <use xlink:href="img/svg/price/icon_name.svg#name"></use> 
                        </svg>
                    </label>

                    <label class="form__form-label">
                        <input class="form__form-input" name="phone" type="tel" placeholder="Ваш телефон:" required>

                        <svg class="form__form-icon" viewbox="0 0 12 12">
                            <use xlink:href="img/svg/price/icon_phone.svg#phone"></use> 
                        </svg>
                    </label>

                    <label class="form__form-label">
                        <input class="form__form-input" name="email" type="email" placeholder="Ваш e-mail:" required>

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