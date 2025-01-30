import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();


    useEffect(() => {
        const token = new URLSearchParams(window.location.search).get('token');
        if (token) {
          localStorage.setItem('jwtToken', token);
          console.log('Токен сохранен:', token);
        }
        const timer = setTimeout(() => {
            router.push('/'); 
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div>
            <h1>Авторизация завершена успешно</h1>
            <p>Перенаправление на главную страницу...</p>
        </div>
    );
};

export default Index;
