import CategoriesHeader from '@/components/CategoriesHeader';
import DishesCategoriesItem from '@/components/DishesCategoriesItem';
import HeaderMain from '@/components/HeaderMain';
import { useInput } from '@/hooks/useInput';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import MainLayout, { AppName, AppURL } from '@/layouts/MainLayout';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchCategories } from '@/store/actions-creators/categoria';
import { ICategoria } from '@/types/categoria';
import axios, { AxiosResponse } from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';


const CategoriaPage = ({ serverCategoria }: { serverCategoria: ICategoria }) => {
  const [categoria, setCategoria] = useState<ICategoria>(serverCategoria);
  const { categories } = useTypedSelector((state) => state.categoria || { categories: [], error: '' });
  const router = useRouter();

  useEffect(() => {
    const fetchCategoria = async () => {
      if (router.query.id) {
        try {
          const response: AxiosResponse = await axios.get(`${AppURL}/categories/${router.query.id}`);
          setCategoria(response.data);
        } catch (error) {
          console.error('Ошибка при обновлении данных категории:', error);
        }
      }
    };

    fetchCategoria();
  }, [router.query.id]);

  return (
    <MainLayout>
      <CategoriesHeader categories={categories} />
      <div style={{ paddingTop: '30px', paddingBottom: '50px' }}>
        <DishesCategoriesItem categoria={categoria} over={categoria?.name === 'Сеты'} />
      </div>
    </MainLayout>
  );
};

export default CategoriaPage;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ params }) => {
    const dispatch = store.dispatch as NextThunkDispatch;

    let serverCategoria = null;

    try {
      if (params?.id) {
        const response: AxiosResponse = await axios.get(`${AppURL}/categories/${params.id}`);
        serverCategoria = response.data;
      }

      await dispatch(fetchCategories());
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }

    return {
      props: {
        serverCategoria,
      },
    };
  }
);
