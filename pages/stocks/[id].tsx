import HeaderMain from '@/components/HeaderMain';
import MainContainer from '@/components/MainContainer';
import { useInput } from '@/hooks/useInput';
import MainLayout, { AppName, AppURL } from '@/layouts/MainLayout';
import { IStock } from '@/types/stock';
import axios, { AxiosResponse } from 'axios';
import { GetServerSideProps } from 'next';
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

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    if(params){
        const response: AxiosResponse = await axios.get(`${AppURL}/ads/` + params.id)
        return {
            props: {
                serverStock: response.data
            }
        }
    }
    return {
        props: {
            serverStock: null
        }
    }
}