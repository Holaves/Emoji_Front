import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/404/404.module.scss'

const Custom404 = () => {
    const router = useRouter();

    const goHome = () => {
        router.push('/'); // Редирект на главную
    };

    return (
        //@ts-ignore
        <div className={styles.container}>
            <h1 className={styles.title}>404 - Страница не найдена</h1>
            <p className={styles.description}>
                Кажется, вы заблудились. Хотите вернуться на главную?
            </p>
            <button className={styles.button} onClick={goHome}>
                На главную
            </button>
        </div>
    );
};

// Стили для страницы


export default Custom404;
