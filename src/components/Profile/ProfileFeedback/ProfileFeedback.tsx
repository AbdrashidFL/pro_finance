import './profileFeedback.scss';
export const ProfileFeedback = () => {
    return (
        <>
            <div className="profileFeedback">
                <p className="profileFeedback-title">Техническая поддержка</p>
                <div className="profileFeedback-contact">
                    <div className="profileFeedback-contact__item">
                        <p className="profileFeedback-contact__item-subtitle">Номер поддержки</p>
                        <a href="tel:89999999999" className="profileFeedback-contact__item-text">
                            8 (999) 999 99 99
                        </a>
                    </div>
                    <div className="profileFeedback-contact__item">
                        <p className="profileFeedback-contact__item-subtitle">Почта поддержки</p>
                        <a className="profileFeedback-contact__item-text">test@gmail.com</a>
                    </div>
                    <div className="profileFeedback-contact__item">
                        <p className="profileFeedback-contact__item-subtitle">Часы работы</p>
                        <p className="profileFeedback-contact__item-text">
                            Пн - Пт с 9:00 до 19:00 мск
                        </p>
                    </div>
                </div>
                <div className="profileFeedback-links">
                    <a href="#" className="profileFeedback-links__item">
                        Пользовательское соглашение
                    </a>
                    <a href="#" className="profileFeedback-links__item">
                        Политика и конфинденциальность
                    </a>
                    <a href="#" className="profileFeedback-links__item">
                        Юридеческая инфомрация
                    </a>
                    <a href="#" className="profileFeedback-links__item">
                        Публичная оферат
                    </a>
                </div>
            </div>
        </>
    );
};
