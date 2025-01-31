import HeaderMain from '@/components/HeaderMain';
import MainContainer from '@/components/MainContainer';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import styles from '../../styles/404/404.module.scss'
import CategoriesList from '@/components/CategoriesList';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchCategories } from '@/store/actions-creators/categoria';

 


const Index = () => {
   const { stocks, error } = useTypedSelector(state => state.stock || { stocks: [], error: '' });
     const { categories } = useTypedSelector(state => state.categoria || { categories: [], error: '' });
   
    return(
       <div className='AboutUs'>
                <HeaderMain/>

                <MainContainer>
                    <div style={{paddingTop: '150px'}}>
                    <h2 className={styles.titleAbout}>Кафе Эмодзи  приветствует Вас!</h2>
                    <h3 className={styles.textAbout}>
                    В нашем заведении вы можете вкусно и не дорого покушать Японскую и Итальянскую кухню<br></br>
                    Мы можем предложить вам:<br></br>
                    <ul className={styles.aboutList}>
                        <li>Роллы</li>
                        <li>Суши</li>
                        <li>Пиццу</li>
                        <li>Салаты</li>
                        <li>Закуски</li>
                        <li>Супы</li>
                        <li>Пасту</li>
                        <li>Десерты</li>
                    </ul>
                    У нас вы никогда не останетесь голодные <br></br>
                    Мы стараемся для вас !
                    </h3>
                    </div>
                    <div style={{marginTop: '20px'}}><CategoriesList styless={{width: '100%', maxWidth: 'none', marginBottom:'20px'}} categories={categories}/></div>
                </MainContainer>
       </div>
   );
};

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  const dispatch = store.dispatch as NextThunkDispatch;

  try {
    await dispatch(fetchCategories());
  } catch (error) {
    console.error('Failed to fetch categories:', error);
  }
  return { props: {} };
});

export default Index;