document.addEventListener('DOMContentLoaded', function(){
    const btn = document.querySelector('.new-services__btn'),
          modal = document.querySelector('.modal');

    btn.addEventListener('click', function(e){
        e.preventDefault();

       modal.classList.add('modal_active');

       modal.innerHTML = `
            <form action="#" class="new-services__form">
                <h3 class="new-services__form-title">
                    Заявка на сеяцы
                </h3>

                <label class="new-services__form-label">
                    <span class="new-services__form-label-text">
                        Введите Имя:
                    </span>

                    <input class="new-services__form-input" type="text" placeholder="Имя"></input>
                </label>

                <label class="new-services__form-label">
                    <span class="new-services__form-label-text">
                        Введите e-mail:
                    </span>

                    <input class="new-services__form-input" type="text" placeholder="e-mail"></input>
                </label>

                <label class="new-services__form-label">
                    <span class="new-services__form-label-text">
                        Введите телефон:
                    </span>

                    <input class="new-services__form-input" type="text" placeholder="Телефон"></input>
                </label>

                <button class="new-services__form-btn" type="submit">Отправить заявка</button>
            </form>`;
    })
})