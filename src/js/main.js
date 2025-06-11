document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.querySelector('.contact-btn');
    const contactModal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.contact-modal__close');

    // Открытие модального окна
    contactBtn.addEventListener('click', function() {
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
    });

    // Закрытие модального окна по кнопке
    closeBtn.addEventListener('click', function() {
        contactModal.classList.remove('active');
        document.body.style.overflow = ''; // Разблокируем прокрутку страницы
    });

    // Закрытие модального окна по клику вне его области
    contactModal.addEventListener('click', function(e) {
        if (e.target === contactModal) {
            contactModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Закрытие модального окна по клавише Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && contactModal.classList.contains('active')) {
            contactModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}); 