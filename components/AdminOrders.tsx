import React, { useEffect, useState } from 'react';
import styles from '../styles/AdminPanel/AdminPanel.module.scss';
import MainContainer from './MainContainer';
import { AppURL } from '@/layouts/MainLayout';
import { IOrder } from '@/types/order';
import ModalWindow from './UI/ModalWindow';
import AdminOrderModal from './AdminOrderModal';
import { CartDish } from '@/types/dish';
import Button, { buttonState } from './UI/Button';

const AdminOrders = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [sortedOrders, setSortedOrders] = useState<IOrder[]>([]);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [orderToDelete, setOrderToDelete] = useState<string | null>(null);
    const [inputStatuses, setInputStatuses] = useState<{ [key: string]: string }>({});
    const [cartOrder, setCartOrder] = useState <CartDish>()
    const [cartID, setCartID] = useState <string>('')

    const closeOrderModal = () => setIsOrderModalOpen(false);
    const openOrderModal = () => {setIsOrderModalOpen(true);
        
        
    }
   
    const formatDate = (date: Date) => {
        const formatedDate = date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()
        return formatedDate
    }
    const openDeleteModal = (orderId: string) => {
        setOrderToDelete(orderId);
        setIsDeleteModalOpen(true)
    };
    const closeDeleteModal = () => setIsDeleteModalOpen(false);
    const deleteOrderHandler = async (orderId: string) => {
        closeDeleteModal();
        const token = localStorage.getItem('jwtToken');
        if (token) {
            try {
                const response = await fetch(`${AppURL}/orders/${orderId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    alert('Failed to delete order');
                    return;
                }

                // Remove the deleted order from the orders and sortedOrders state
                setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
                setSortedOrders((prevSortedOrders) =>
                    prevSortedOrders.filter((order) => order._id !== orderId)
                );
            } catch (error) {
                alert('Error deleting order');
            }
        }
    };

    const handlerButton = async () => {
const token = localStorage.getItem('jwtToken');
        if (token) {
            try {
                const response = await fetch(`${AppURL}/orders/${cartID}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
    
                if (!response.ok) {
                    alert('Failed to change order status');
                    return;
                }
                const data = await response.json();
                setCartOrder(data.cart)
                openOrderModal()
            } catch (error) {
                alert('Error updating order status');
            }
        }
    }
    const changeStatus = async (orderId: string, newStatus: string) => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            try {
                const response = await fetch(`${AppURL}/orders/${orderId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ status: newStatus }),
                });
    
                if (!response.ok) {
                    alert('Failed to change order status');
                    return;
                }
    
                setInputStatuses((prevStatuses) => ({
                    ...prevStatuses,
                    [orderId]: newStatus,
                }));
            } catch (error) {
                alert('Error updating order status');
            }
        }
    };
    
    const fetchOrders = async () => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            try {
                const response = await fetch(`${AppURL}/orders`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    alert('Failed to fetch orders');
                    return;
                }

                const data = await response.json();
                setOrders(data);
                setSortedOrders(data);

                const initialStatuses: { [key: string]: string } = {};
                data.forEach((order: IOrder) => {
                    initialStatuses[order.orderIndex] = order.status || 'waiting';
                });
                setInputStatuses(initialStatuses);
            } catch (error) {
                alert('Error fetching orders');
            }
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);


    const handleSort = (key: string) => {
        const direction = sortConfig?.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
        setSortConfig({ key, direction });

        const sorted = [...orders].sort((a, b) => {
            if (key === 'createdAt') {
                const dateA = new Date(a[key]);
                const dateB = new Date(b[key]);
                return direction === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
            }

            if (key === 'fullPrice') {
                return direction === 'asc' ? a[key] - b[key] : b[key] - a[key];
            }

            if (key === 'status') {
                const statusOrder = ['waiting', 'inWay', 'complete'];
                return direction === 'asc'
                    ? statusOrder.indexOf(a[key]) - statusOrder.indexOf(b[key])
                    : statusOrder.indexOf(b[key]) - statusOrder.indexOf(a[key]);
            }

            return 0;
        });

        setSortedOrders(sorted);
    };

    return (
        <div className={styles.AdminOrders}>
            <div className={styles.AdminTitle}>Заказы</div>

            <MainContainer>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.subTr}>
                            <td>Номер заказа</td>
                            <td>Адрес</td>
                            <td>Заказ на:</td>
                            <td>Номер телефона</td>
                            <td>Корзина (открыть)</td>
                            <td onClick={() => handleSort('fullPrice')} style={{ cursor: 'pointer' }}>
                                Стоимость {sortConfig?.key === 'fullPrice' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                            </td>
                            <td onClick={() => handleSort('createdAt')} style={{ cursor: 'pointer' }}>
                                Время создания {sortConfig?.key === 'createdAt' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                            </td>
                            <td onClick={() => handleSort('status')} style={{ cursor: 'pointer' }}>
                                Статус заказа {sortConfig?.key === 'status' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                            {sortedOrders.map((item: IOrder, index: number) => {
                            const createdAt = new Date(item.createdAt).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                            });

                            return (
                                <tr
                                    key={item.orderIndex}
                                    //@ts-ignore
                                    className={
                                        inputStatuses[item.orderIndex] === 'complete'
                                            ? styles.grenTr
                                            : inputStatuses[item.orderIndex] === 'inWay'
                                            ? styles.orangeTr
                                            : styles.greyTr
                                    }
                                >
                                    <td>{item.orderIndex}</td>
                                    <td>{item.adress}</td>
                                    {/* @ts-ignore */}
                                    <td>{item.dateTime ? formatDate(item.dateTime) : '-'}</td>
                                    <td>{item.phone_number}</td>
                                    <td>    
                                        {item._id}
                                    </td>
                                    
                                    <td>{item.fullPrice}</td>
                                    <td>{createdAt}</td>
                                    <td>
                                        <select
                                            value={inputStatuses[item.orderIndex]}
                                            style={{cursor: 'pointer'}}
                                            onChange={(e) => {
                                                const newStatus = e.target.value;
                                                setInputStatuses((prevStatuses) => ({
                                                    ...prevStatuses,
                                                    [item.orderIndex]: newStatus,
                                                }));
                                                changeStatus(item._id, newStatus);
                                            }}
                                            className={styles.AdminSelectOrder}
                                        >
                                            {['complete', 'inWay', 'waiting'].map((status, index) => (
                                                <option key={index} value={status}>
                                                    {status}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td onClick={() => openDeleteModal(item._id)} style={{ color: 'blue', cursor: 'pointer' }}>
                                        Удалить
                                    </td>
                                  
                                    <ModalWindow isOpen={isDeleteModalOpen} onClose={closeDeleteModal} width={903}>
                                        <div className={styles.AdminModalDelete}>
                                            <h1>Вы уверены?</h1>
                                            <div className={styles.AdminModalDelete_Bot}>
                                                <h2 onClick={() => deleteOrderHandler(orderToDelete!)}>Да</h2>
                                                <h2 onClick={closeDeleteModal}>Нет</h2>
                                            </div>
                                        </div>
                                    </ModalWindow>
                                </tr>
                            );
                        })}
                    </tbody>
                    
                </table>
                <h2>ID заказа(для того, чтобы посмотреть товары заказа)</h2>
                <input className={styles.AdminInput} value={cartID} onChange={(e) => setCartID(e.target.value)} type="text" />
                <Button state={buttonState.active} onClickBut={() => handlerButton()}>Открыть</Button>
                <ModalWindow isOpen={isOrderModalOpen} onClose={closeOrderModal} width={903}>
                    {cartOrder ? <AdminOrderModal cart={cartOrder} /> : <p>Загрузка...</p>}
                </ModalWindow>
            </MainContainer>
        </div>
    );
};

export default AdminOrders;
