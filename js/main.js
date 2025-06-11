document.addEventListener('DOMContentLoaded', () => {
    const contactPanel = document.getElementById('contactPanel');
    const contactButtons = document.querySelectorAll('.contact-btn');
    const closeButton = document.querySelector('.contact-panel__close');
    const overlay = document.querySelector('.contact-panel__overlay');

    // Функция для открытия модального окна
    const openContactPanel = () => {
        contactPanel.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Функция для закрытия модального окна
    const closeContactPanel = () => {
        contactPanel.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Обработчики событий для кнопок
    contactButtons.forEach(button => {
        button.addEventListener('click', openContactPanel);
    });

    // Закрытие по кнопке
    closeButton.addEventListener('click', closeContactPanel);

    // Закрытие по клику на оверлей
    overlay.addEventListener('click', closeContactPanel);

    // Закрытие по клавише Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && contactPanel.classList.contains('active')) {
            closeContactPanel();
        }
    });

    // Добавляем эффект сканирования для индустриального стиля
    const hero = document.querySelector('.hero');
    let scanPosition = 0;

    const updateScanEffect = () => {
        scanPosition = (scanPosition + 1) % 100;
        hero.style.setProperty('--scan-position', `${scanPosition}%`);
        requestAnimationFrame(updateScanEffect);
    };

    updateScanEffect();
}); 