import Footer from '@/components/Footer';
import HeaderMain from '@/components/HeaderMain';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({children, title, description, keywords}) => {
    // const {setHeight, setWidth} = useActions()
    // const {width} = useTypedSelector(state => state.size)

    // const setSizes = (): void => {
    //     setWidth(window.innerWidth) 
    //     setHeight(window.innerHeight)
    // }
    
    // const getMaxWidth = (windowW: number): number | string => {
    //     if(windowW >= 1870){
    //         return 1690
    //     }
    //     else if(windowW >= 1685){
    //         return 1630
    //     }
    //     else if(windowW >= 1340){
    //         return 1139
    //     }
    //     return 'none';
    // }
    // useEffect(() => {
    //     setSizes()
    //     window.addEventListener('resize', function(event) {
    //         setSizes()
    //     }, true)
    // },  [])
   
   return(
       <>
            <Head>
                <title>{title || 'Музыкальная площадка'}</title>
                <meta name="description" content={`Японская и Итальянская кухня в темрюке с доставкой ${description ? description : ''}`} />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content={keywords || 'Роллы, Суши, суши, ролы, роллы'} />
                <meta name="viewport" content='width=device-width, initial-scale=1' />
            </Head>
                {children}
            <Footer/>
          
       </>
   );
};


export default MainLayout;

export const AppURL: string = `https://holaves-emoji-3566.twc1.net`
export const AppName: string = "Emoji"