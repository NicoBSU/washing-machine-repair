document.addEventListener('DOMContentLoaded', function() {
    // Элементы модального окна
    const contactButtons = document.querySelectorAll('.contact-button, .cta-button');
    const contactPanel = document.querySelector('.contact-panel');
    const closeButton = document.querySelector('.contact-panel__close');
    const overlay = document.querySelector('.contact-panel__overlay');

    // Открытие модального окна
    function openContactPanel() {
        contactPanel.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Закрытие модального окна
    function closeContactPanel() {
        contactPanel.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Обработчики событий для кнопок
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openContactPanel();
        });
    });

    // Закрытие по клику на крестик
    closeButton.addEventListener('click', closeContactPanel);

    // Закрытие по клику на оверлей
    overlay.addEventListener('click', closeContactPanel);

    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && contactPanel.classList.contains('active')) {
            closeContactPanel();
        }
    });
}); 