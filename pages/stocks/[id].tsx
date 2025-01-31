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

        const paths = ads.map((ad: { id: string }) => ({
            params: { id: ad.id.toString() },
        }));

        return {
            paths,
            fallback: false, // 
        };
    } catch (error) {
        console.error('Ошибка при получении списка рекламных акций:', error);
        return {
            paths: [],
            fallback: false,
        };
    }
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        if (params?.id) {
            const response = await axios.get(`${AppURL}/ads/${params.id}`);
            return {
                props: {
                    serverStock: response.data || null, // Гарантия, что не будет `undefined`
                },
                revalidate: 60, // Обновление данных раз в 60 секунд
            };
        }
        return {
            props: {
                serverStock: null, // Если нет `params.id`
            },
            revalidate: 60,
        };
    } catch (error) {
        console.error('Ошибка при получении данных о рекламной акции:', error);
        return {
            props: {
                serverStock: null, // Возвращаем `null` в случае ошибки
            },
            revalidate: 60,
        };
    }
};