import { GithubFilled, CalendarFilled, CaretRightFilled } from '@ant-design/icons';
import './profileHeader.scss';
export const ProfileHeader = () => {
    return (
        <>
            <div className="profileHeader">
                <div className="profileHeader-wrap">
                    <div className="profileHeader-avatar">
                        <GithubFilled className="profileHeader-avatar__icon" />
                        <div className="profileHeader-avatar__name">Иванов И. И</div>
                    </div>
                    <div className="profileHeader-tariff">
                        <CalendarFilled />
                        <p className="profileHeader-tariff__text">Тариф до 15.04.2024</p>
                    </div>
                </div>
                <div className="profileHeader-actions">
                    <button className="profileHeader-actions__btn profileHeader-actions__out">
                        Выйти
                    </button>
                    <a href="#" className="profileHeader-actions__btn profileHeader-actions__link">
                        <span>О нас</span>
                        <CaretRightFilled className="profileHeader-actions__link-icon" />
                    </a>
                </div>
            </div>
        </>
    );
};
