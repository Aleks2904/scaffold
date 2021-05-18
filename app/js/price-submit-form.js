document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('#js-price-form');

    form.addEventListener('submit', function(e){
        const check = form.querySelector('.price__form-check');
        e.preventDefault();
        form.reset();

        check.innerHTML = 'Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.';
        check.classList.add('price__form-check_active');

        setTimeout(()=>{
            check.classList.remove('price__form-check_active');
        },3000)

        setTimeout(()=>{
            check.innerHTML = 'Cтатус заявки';
        },4000)
    })
})