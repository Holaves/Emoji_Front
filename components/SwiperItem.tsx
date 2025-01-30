import React, { FC } from 'react';
import styles from '../styles/SwiperItem/SwiperItem.module.scss'
import { IStock } from '@/types/stock';
import { useRouter } from 'next/router';
import { AppName, AppURL } from '@/layouts/MainLayout';

interface SwiperItem{
    item: IStock;
}

const SwiperItem:FC<SwiperItem> = ({item}) => {
    const reservImage = 'https://abrakadabra.fun/uploads/posts/2022-03/1647518534_1-abrakadabra-fun-p-serii-tsvet-fon-odnotonnii-1.png'
    const router = useRouter()
   return(
       <div className={styles.swiperItem}>
            <img src={item.picture ? `${AppURL}/${item.picture}` : reservImage} alt='Картинка' />
            <button  onClick={() => router.push(`/stocks/${item._id}`)}>Перейти</button>
       </div>
   );
};


export default SwiperItem;