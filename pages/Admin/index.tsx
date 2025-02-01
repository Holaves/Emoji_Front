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
     const checkAdmin = async () => {
            const token = localStorage.getItem("jwtToken");
            if (!token) {
                return;
            }

            try {
                const response = await fetch(`${AppURL}/check/admin/`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || "Ошибка доступа.");
                }
                setIsAdmin(true)

            } catch (error) {
                console.error("Ошибка доступа:", error);
                //@ts-ignore
                alert(`Ошибка: ${error.message}`);
            }
        };
    

    const onClickHandler = (selectTypeInput: string) => {
        if(selectTypeInput)
        setSelectType(selectTypeInput)
    }
    useEffect(() => {
        // checkAdmin()
    }, [])
   return(
       <div className={styles.AdminPanel}>
            {/* <div className={styles.AdminPanel_title}>Админ панель</div>
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
            </div> */}
       </div>
   );
};


export default Index;