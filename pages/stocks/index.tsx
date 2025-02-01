import MainLayout, { AppURL } from '@/layouts/MainLayout';
import { IStock } from '@/types/stock';
import axios, { AxiosResponse } from 'axios';
import { GetServerSideProps, GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/StocksPage/StocksPage.module.scss'
import HeaderMain from '@/components/HeaderMain';
import MainContainer from '@/components/MainContainer';
import { useRouter } from 'next/router';

//@ts-ignore
const Index = ({}) => {
    const [stocks, setStocks] = useState<IStock[]>([])
    const router = useRouter()
    const fetchStocks = async () => {
        try{
            const response = await fetch(`${AppURL}/ads/`, {
                method: 'GET'
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка при удалении.");
            }

            const data = await response.json();
            setStocks(data);
            alert("Категория успешно удалена.");
        }
       
         catch (error) {
            console.error("Ошибка при удалении:", error);
            //@ts-ignore
            alert(`Ошибка: ${error.message}`);
        }
    } 
    useEffect(() => {
        fetchStocks()
    }, [])
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



// export const getServerSideProps: GetServerSideProps = async () => {
//     try {
//         const response = await axios.get(`${AppURL}/ads/`);
//         return {
//             props: {
//                 serverStocks: response.data || [],
//             },
//         };
//     } catch (error) {
//         console.error('Ошибка при получении данных о рекламных акциях:', error);
//         return {
//             props: {
//                 serverStocks: [],
//             },
//         };
//     }
// };