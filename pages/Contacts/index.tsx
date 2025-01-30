
import HeaderMain from '@/components/HeaderMain';
import MainContainer from '@/components/MainContainer';
import MainLayout, { AppName, AppURL } from '@/layouts/MainLayout';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../../styles/StocksPage/StocksPage.module.scss'

// @ts-ignore
const Index = ({}) => {
    const router = useRouter()

   return(
       <MainLayout
    //    title={`${AppName} - ${stock.name} - ${track.artist} `}
    //    keywords={`Музыка, треки, артисты, новый звук, ${AppName}, песни, ${track.name}, ${track.artist}, ${track.name} - ${track.artist}`}
       >
        <HeaderMain/>
            <MainContainer styless={{marginTop: '100px'}}>
                <h1 className={styles.stocks_h1}>Email</h1>
                <h1 className={styles.stocks_h1}>Телефон</h1>
                <h1 className={styles.stocks_h1}>Whatsapp</h1>
                <h3 className={styles.stocks_text}></h3>
            </MainContainer>
       </MainLayout>
   );
};


export default Index;
