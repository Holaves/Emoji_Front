import Button, { buttonState } from '@/components/UI/Button';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../../styles/OrderPage/OrderPage.module.scss'
import Link from 'next/link';

const Index = () => {
    const router = useRouter()
   return(
       <div className={styles.ThanksFor}>    
           <div className={styles.Thanks_wrapper}>
                <h1>Спасибо за заказ!</h1>
                <h2>Оставьте отзыв после получения. Во вкладке <Link href={'https://yandex.ru/maps/org/emodzi/5950025613/reviews/?ll=37.442145%2C45.262077&tab=reviews&z=17.4'}>отзывы</Link></h2>
                <Button width={500} fz='24px' onClickBut={() => router.push('/')} state={buttonState.active}>Вернутся на главную страницу</Button>
           </div>
       </div>
   );
};


export default Index;