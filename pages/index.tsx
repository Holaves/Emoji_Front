// import ContainerB from '@/components/ContainerB';
import SwiperComp from '@/components/SwiperComp';
import HeaderMain from '../components/HeaderMain';
import MainLayout, { AppURL } from '../layouts/MainLayout';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchStocks } from '@/store/actions-creators/stock';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchCategories } from '@/store/actions-creators/categoria';
import CategoriesList from '@/components/CategoriesList';
import DishesCategoriesList from '@/components/DishesCategoriesList';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import CategoriesHeader from '@/components/CategoriesHeader';
import Head from 'next/head';
import { IStock } from '@/types/stock';
import { ICategoria } from '@/types/categoria';
import { Metrika } from '@/components/metrica';

const Index = () => {
  const [stocks, setStocks] = useState <IStock[]>([])
  const [categories, setCategories] = useState <ICategoria[]>([])
  // const { stocks, error } = useTypedSelector(state => state.stock || { stocks: [], error: '' });
  // const { categories } = useTypedSelector(state => state.categoria || { categories: [], error: '' });
  const router = useRouter()
  const [width, setWidth] = useState <number>(1440) 
  const [isAtTop, setIsAtTop] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      if (token) {
        localStorage.setItem('jwtToken', token);
        urlParams.delete('token');
        const newUrl = `${window.location.origin}${window.location.pathname}?${urlParams.toString()}`;
        window.history.replaceState(null, '', newUrl);
      }
    }
  }, []);
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
      }
      catch (error) {
          console.error("Ошибка при удалении:", error);
      }
      try{
        const response = await fetch(`${AppURL}/categories/`, {
            method: 'GET'
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || "Ошибка при удалении.");
        }

        const data = await response.json();
        setCategories(data);
    }
    catch (error) {
        console.error("Ошибка при удалении:", error);
    }
  } 
  useEffect(() => {
    fetchStocks()
  }, [])


  const handleScroll = () => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      if (rect.top <= 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
          setWidth(window.innerWidth)
          addEventListener("resize", (event) => {setWidth(window.innerWidth)});
  
      }, [])


  return (
   
   <div style={{ paddingTop: width > 700 ? '100px' : '15px' }}>
       <MainLayout>
        <Metrika/>
        <Head>
          <title>Эмодзи | Кафе японской и итальянской кухни в Темрюке</title>
          <meta
            name="description"
            content="Кафе Эмодзи в Темрюке предлагает блюда японской и итальянской кухни. Доставка, самовывоз и возможность поесть в кафе. Попробуйте роллы, пиццы, пасты и многое другое!"
          />
          <link rel="icon" href="/assets/favicon.ico" />
          <meta
            name="keywords"
            content="Эмодзи, кафе Темрюк, японская кухня, итальянская кухня, доставка еды, самовывоз, роллы, пиццы, пасты, сеты, супы, салаты, напитки"
          />
          <meta property="og:title" content="Эмодзи | Кафе японской и итальянской кухни в Темрюке" />
          <meta
            property="og:description"
            content="Доставка и самовывоз блюд японской и итальянской кухни. Попробуйте наши роллы, пиццы и пасты в кафе Эмодзи в Темрюке!"
          />
          <meta property="og:image" content="" />
          <meta property="og:url" content="https://3a17-176-110-129-80.ngrok-free.app/" />
          <link rel="canonical" href="https://3a17-176-110-129-80.ngrok-free.app/" />
        </Head>
        {isAtTop && width >700 ? <CategoriesHeader categories={categories} /> : <HeaderMain categories={categories}/>}
        <SwiperComp stocks={stocks} />
        <CategoriesList categories={categories} />
        <div ref={targetRef}>
          <DishesCategoriesList categories={categories} />
        </div>
      </MainLayout> 
      </div>
  );
};

export default Index;


