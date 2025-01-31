// import ContainerB from '@/components/ContainerB';
import SwiperComp from '@/components/SwiperComp';
import HeaderMain from '../components/HeaderMain';
import MainLayout from '../layouts/MainLayout';
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

const Index = () => {
  const { stocks, error } = useTypedSelector(state => state.stock || { stocks: [], error: '' });
  const { categories } = useTypedSelector(state => state.categoria || { categories: [], error: '' });

  const [width, setWidth] = useState <number>(1440) 
  const [isAtTop, setIsAtTop] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  console.log(stocks);
  console.log(error);

  const router = useRouter();

 

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

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }

  return (
   
   <div style={{ paddingTop: width > 700 ? '100px' : '15px' }}>
       <MainLayout>
        <Head>
          <title>Эмодзи | Кафе японской и итальянской кухни в Темрюке</title>
          <meta
            name="description"
            content="Кафе Эмодзи в Темрюке предлагает блюда японской и итальянской кухни. Доставка, самовывоз и возможность поесть в кафе. Попробуйте роллы, пиццы, пасты и многое другое!"
          />
          <link rel="icon" href="/assets/fav.ico" />
          <meta
            name="keywords"
            content="Эмодзи, кафе Темрюк, японская кухня, итальянская кухня, доставка еды, самовывоз, роллы, пиццы, пасты, сеты, супы, салаты, напитки"
          />
          <meta property="og:title" content="Эмодзи | Кафе японской и итальянской кухни в Темрюке" />
          <meta
            property="og:description"
            content="Доставка и самовывоз блюд японской и итальянской кухни. Попробуйте наши роллы, пиццы и пасты в кафе Эмодзи в Темрюке!"
          />
          <meta property="og:image" content="../assets/images/logo_vk.jpg" />
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

export const getStaticProps = async () => {
  try {
    const stocks = await fetchStocks();
    const categories = await fetchCategories();

    return {
      props: {
        stocks: JSON.parse(JSON.stringify(stocks)),
        categories: JSON.parse(JSON.stringify(categories)),
      },
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return { props: { stocks: [], categories: [], error: 'Ошибка загрузки данных' } };
  }
};

