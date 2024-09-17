import './buttonAction.scss';

export enum EButtonActionMode {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

const mods = {
    [EButtonActionMode.BIG]: '_big',
    [EButtonActionMode.SMALL]: '_small',
};

interface IButtonActionAttrs {
    mode: EButtonActionMode;
    text: string;
}
export const ButtonAction = ({ mode, text, children }: IButtonActionAttrs) => {
    return (
        <button className={`buttonActionMode ${mods[mode]}`}>
            {children}
            {text}
        </button>
    );
};
