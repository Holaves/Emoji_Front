
import HeaderMain from '@/components/HeaderMain';
import MainContainer from '@/components/MainContainer';
import MainLayout, { AppName, AppURL } from '@/layouts/MainLayout';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../../styles/StocksPage/StocksPage.module.scss'
import Link from 'next/link';

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
                <h1 className={styles.stocks_h1}>Email - emojitemr@gmail.com</h1>
                <h1 className={styles.stocks_h1}>Телефон - +7 901 102-22-21</h1>
                <h1 className={styles.stocks_h1}>Whatsapp - <Link href={'https://chat.whatsapp.com/DwJaagbhleKBIQNvS26G5L'}>Нажмите для перехода</Link> </h1>
                <h3 className={styles.stocks_text}></h3>
            </MainContainer>
       </MainLayout>
   );
};


export default Index;
