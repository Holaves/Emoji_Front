import HeaderMain from '@/components/HeaderMain';
import MainContainer from '@/components/MainContainer';
import { useInput } from '@/hooks/useInput';
import MainLayout, { AppName, AppURL } from '@/layouts/MainLayout';
import { IStock } from '@/types/stock';
import axios, { AxiosResponse } from 'axios';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../../styles/StocksPage/StocksPage.module.scss'

// @ts-ignore
const StockPage = ({serverStock}) => {
    const [stock, setStock] = useState<IStock>(serverStock)
    const router = useRouter()

   return(
       <MainLayout
       >
        <HeaderMain/>
            <MainContainer styless={{marginTop: '100px'}}>
                <h1 className={styles.stocks_h1}>{stock.name}</h1>
                <h3 className={styles.stocks_text}>{stock.text}</h3>
            </MainContainer>
       </MainLayout>
   );
};


export default StockPage;

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const response = await axios.get(`${AppURL}/ads/`);
        const ads = response.data || [];

        const paths = ads.map((ad: { _id: string }) => ({
            params: { id: String(ad._id) }, // Используем _id вместо id
        }));
        
        return {
            paths,
            fallback: false, // Динамическая подгрузка новых страниц
        };
    } catch (error) {
        console.error('❌ Ошибка при получении списка акций:', error);
        return {
            paths: [],
            fallback: false,
        };
    }
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
    console.log("Params в getStaticProps:", params);

    try {
        const stockId = params?.id ? String(params.id) : null;

        if (!stockId) {
            return { props: { serverStock: null } };
        }

        const response = await axios.get(`${AppURL}/ads/${stockId}`);
        return {
            props: {
                serverStock: response.data || null,
            },
        };
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return { props: { serverStock: null } };
    }
};
