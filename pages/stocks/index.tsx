import MainLayout, { AppURL } from '@/layouts/MainLayout';
import { IStock } from '@/types/stock';
import axios, { AxiosResponse } from 'axios';
import { GetServerSideProps, GetStaticProps } from 'next';
import React, { useState } from 'react';
import styles from '../../styles/StocksPage/StocksPage.module.scss'
import HeaderMain from '@/components/HeaderMain';
import MainContainer from '@/components/MainContainer';
import { useRouter } from 'next/router';

//@ts-ignore
const Index = ({serverStocks}) => {
    const [stocks, setStocks] = useState<IStock[]>(serverStocks)
    const router = useRouter()
    return(
        <MainLayout
       >
        <HeaderMain/>
        <MainContainer styless={{marginTop: '100px'}}>
            <ul className={styles.stocks_list}>
                {stocks.map((item: IStock) =>
                <li 
                className={styles.stocks_h1_pointer}
                onClick={() => router.push(`/stocks/${item._id}`)}
                >
                    {
                        item.text.length > 20 ?
                        <>{item.name} </>
                        :
                        <>{item.name} </>
                    }
                    <div className={styles.arrow_stocks}></div>
                </li>)}
            </ul>
        </MainContainer>
       </MainLayout>
   );
};


export default Index;



export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const response = await axios.get(`${AppURL}/ads/`);
        return {
            props: {
                serverStocks: response.data || [],
            },
        };
    } catch (error) {
        console.error('Ошибка при получении данных о рекламных акциях:', error);
        return {
            props: {
                serverStocks: [],
            },
        };
    }
};