import AdminCategories from '@/components/AdminCategories';
import AdminDishes from '@/components/AdminDishes';
import AdminStocks from '@/components/AdminStocks';
import AdminUsers from '@/components/AdminUsers';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/AdminPanel/AdminPanel.module.scss'
import { AppURL } from '@/layouts/MainLayout';
import AdminOrders from '@/components/AdminOrders';

const Index = () => {
    const [selectType, setSelectType] = useState('Dishes')
    const [isAdmin, setIsAdmin] = useState <boolean>(false)    
    const onClickHandler = (type: string) => setSelectType(type)

    const checkAdmin = async () => {
        const token = localStorage.getItem("jwtToken");
        console.log(token)
        if (token) {
        try{
            const response = await fetch(`${AppURL}/check/admin`, {
                method: 'GET'
            });
  
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка при удалении.");
            }
  
            const data = await response.json();
            setIsAdmin(data);
        }
        catch (error) {
            console.error("Ошибка при удалении:", error);
        }
        }
    }
    useEffect(() => {
        checkAdmin()
    }, [])
    if(!isAdmin){
        return (
            <div>
                <h1>403 Forbidden</h1>
            </div>
        )
    }
   return(
       <div className={styles.AdminPanel}>
            <div className={styles.AdminPanel_title}>Админ панель</div>
            <div className={styles.AdminPanel_selectType}>
                <ul>
                    <li className={selectType == 'Dishes' ? styles.activeLi : ''} onClick={() => onClickHandler('Dishes')}>
                        Блюда
                    </li>
                    <li className={selectType == 'Categories' ? styles.activeLi : ''} onClick={() => onClickHandler('Categories')}>
                        Категории
                    </li>  
                    <li className={selectType == 'Users' ? styles.activeLi : ''} onClick={() => onClickHandler('Users')}>
                        Пользователи
                    </li>  
                    <li className={selectType == 'Stocks' ? styles.activeLi : ''} onClick={() => onClickHandler('Stocks')}>
                        Акции
                    </li>
                    <li className={selectType == 'Orders' ? styles.activeLi : ''} onClick={() => onClickHandler('Orders')}>
                        Заказы
                    </li>  
                </ul>        
            </div>
            <div className={styles.typeBlock}>
                {
                    selectType == 'Dishes' ?
                    <AdminDishes/> : selectType == 'Categories' ?
                    <AdminCategories/> : selectType == 'Users' ?
                    <AdminUsers/> : selectType == 'Stocks' ?
                    <AdminStocks/> : selectType == 'Orders' ?
                    <AdminOrders/> : <></>
                }
            </div>
       </div>
   );
};


export default Index;