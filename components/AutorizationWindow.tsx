import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/AutorizationWindow/AutorizationWindow.module.scss';
import { AppURL } from '@/layouts/MainLayout';
import Button, { buttonState } from './UI/Button';


const AutorizationWindow: FC = ({}) => {
    const router = useRouter();

    const handleStartChat = () => {
        window.open('https://t.me/EmojiAuth_bot', '_blank'); // Замените на имя вашего бота в Telegram
    };

    return (
        <div className={styles.autorization}>
            <h1>Авторизация</h1>
            <h5 style={{fontSize: '26px'}}>Войдите с помощью номера телефона, используя Нашего Telegram-бота</h5>
            <Button
                state={buttonState.active}
                width={636}
                height={102}
                styless={{ marginTop: '52px' }}
                onClickBut={handleStartChat} 
            >
                Перейти в Telegram
            </Button>
            <h5>
                Продолжая, вы соглашаетесь
                <a onClick={() => router.push('/privacy')}> со сбором и обработкой персональных данных и пользовательским соглашением</a>
            </h5>
        </div>
    );
};

export default AutorizationWindow;

