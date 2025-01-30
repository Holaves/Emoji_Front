import React, { CSSProperties, FC, ReactNode } from 'react';
import styles from './styles/Button/Button.module.scss';

export enum buttonState {
    disabled = 'disabled',
    active = 'active',
}

interface ButtonProps {
    children: ReactNode;
    state: buttonState;
    isAnimation?: boolean;
    width?: number;
    height?: number;
    styless?: CSSProperties;
    onClickBut?: () => void;
    fz?: string;
}

const Button: FC<ButtonProps> = ({
    children,
    state,
    isAnimation,
    width = 400,
    height = 68,
    styless,
    onClickBut,
    fz
}) => {
    const buttonClassName = () => {
        if (state === buttonState.active && isAnimation === true) return styles.Button_animation_active;
        if (state === buttonState.disabled) return styles.Button_disabled;
        if (state === buttonState.active) return styles.Button_active;
    };

    return (
        <button
            className={buttonClassName()}
            style={{
                ...styless,
                maxWidth: `${width}px`,
                height: `${height}px`,
                cursor: state === buttonState.disabled ? 'not-allowed' : 'pointer',
                //@ts-ignore
                '--hover-max-width': `${width + width / 10}px`,
            }}
            onClick={state === buttonState.active && onClickBut ? onClickBut : undefined}
            disabled={state === buttonState.disabled} // Отключает кнопку в состоянии `disabled`
        >
            <h4 style={{fontSize: fz && (fz)}}>{children}</h4>
        </button>
    );
};

export default Button;
