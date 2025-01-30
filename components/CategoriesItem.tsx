import { AppURL } from '@/layouts/MainLayout';
import { ICategoria } from '@/types/categoria';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import styles from '../styles/Categories/item/item.module.scss'

interface CategoriesItemProps {
    item: ICategoria
}

const CategoriesItem:FC<CategoriesItemProps> = ({item}) => {
    const router = useRouter()
    const reservImage = "https://avatars.mds.yandex.net/i?id=b9b921ac2dbc73fffebb5f5289b215ff070c29b1-12803022-images-thumbs&n=13"
   return(
        <div className={styles.CategoriesItem} onClick={() => router.push(`/categories/${item._id}`)}>
            <img src={item.picture ? `${AppURL}/${item.picture}`: reservImage} alt={'Картинка'} />
            <h3>{item.subName}</h3>
        </div>
   );
};


export default CategoriesItem;