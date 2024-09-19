import { useState } from 'react';
import {
    ContainerFilled,
    FileTextFilled,
    CloseOutlined,
    FileFilled,
    SettingFilled,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { ConfigProvider, Menu } from 'antd';
import './profileSetting.scss';

type MenuItem = Required<MenuProps>['items'][number];

export const ProfileSettings = () => {
    const themeMenu = {
        components: {
            Menu: {
                darkPopupBg: '#171D2C',
                itemMarginBlock: 10,
                itemHeight: 60,
                itemBorderRadius: 10,
                subMenuItemBorderRadius: 20,
            },
        },
    };

    const items: MenuItem[] = [
        {
            key: '1',
            icon: <SettingFilled />,
            label: 'Настройки',
            children: [
                { key: '2', label: 'Option' },
                { key: '3', label: 'Option' },
            ],
        },
        {
            key: '4',
            icon: <FileFilled />,
            label: 'Внесение данных',
            children: [
                { key: '5', label: 'Option' },
                { key: '6', label: 'Option' },
            ],
        },
        {
            key: '7',
            icon: <FileTextFilled />,
            label: 'Отчеты',
            children: [
                { key: '8', label: 'Option' },
                { key: '9', label: 'Option' },
            ],
        },
        {
            key: '10',
            label: 'База знаний',
            icon: <ContainerFilled />,
            children: [
                { key: '10', label: 'Option' },
                { key: '11', label: 'Option' },
            ],
        },
    ];

    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className="profileSettings">
            <div className="profileSettings-header">
                <p className="profileSettings-header__title">
                    <span>ФИН</span> Контроль
                </p>
                <button className="profileSettings-header__btn" onClick={() => toggleMenu()}>
                    <p>Меню</p>
                    <CloseOutlined />
                </button>
            </div>
            <div
                className="profileSettings-body"
                style={{
                    display: showMenu ? 'block' : 'none',
                }}
            >
                <ConfigProvider theme={themeMenu}>
                    <Menu mode="inline" theme="dark" items={items} />
                </ConfigProvider>
            </div>
        </div>
    );
};
