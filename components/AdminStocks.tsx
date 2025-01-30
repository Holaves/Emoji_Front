import React, { useEffect, useState } from 'react';
import styles from '../styles/AdminPanel/AdminPanel.module.scss';
import { AppURL } from '@/layouts/MainLayout';
import { IStock } from '@/types/stock';
import MainContainer from './MainContainer';
import Button, { buttonState } from './UI/Button';

const AdminStocks = () => {
    const [selectType, setSelectType] = useState('Получить');
    const [stocks, setStocks] = useState<IStock[]>([]);
    const [inputId, setInputId] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputText, setInputText] = useState('');
    const [inputPicture, setInputPicture] = useState<File | null>(null);
    const [inputExpiresAt, setInputExpiresAt] = useState('');
    const [inputIdDelete, setIdDelete] = useState('');

    const handleSubmit = async () => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            alert("Не удалось получить токен авторизации.");
            return;
        }

        const formData = new FormData();
        if (inputId) formData.append('id', inputId);
        if (inputName) formData.append('name', inputName);
        if (inputText) formData.append('text', inputText);
        if (inputPicture) formData.append('picture', inputPicture);
        if (inputExpiresAt) formData.append('expiresAt', inputExpiresAt);

        try {
            const method = inputId ? 'PUT' : 'POST';
            const url = inputId ? `${AppURL}/ads/${inputId}` : `${AppURL}/ads`;

            const response = await fetch(url, {
                method,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка при отправке данных.");
            }

            alert(inputId ? "Акция успешно обновлена." : "Акция успешно создана.");
            setInputId('');
            setInputName('');
            setInputText('');
            setInputPicture(null);
            setInputExpiresAt('');
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
            //@ts-ignore
            alert(`Ошибка: ${error.message}`);
        }
    };

    const handleDelete = async (id: string) => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            alert("Не удалось получить токен авторизации.");
            return;
        }

        try {
            const response = await fetch(`${AppURL}/ads/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка при удалении.");
            }

            alert("Акция успешно удалена.");
            setStocks(stocks.filter(stock => stock._id !== id));
        } catch (error) {
            console.error("Ошибка при удалении:", error);
            //@ts-ignore
            alert(`Ошибка: ${error.message}`);
        }
    };

    useEffect(() => {
        const fetchStocks = async () => {
            const token = localStorage.getItem("jwtToken");
            if (token) {
                try {
                    const response = await fetch(`${AppURL}/ads`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    if (!response.ok) {
                        alert("Failed to fetch stocks");
                    }

                    const data = await response.json();
                    setStocks(data);
                } catch (error) {
                    alert("Error fetching stocks:");
                }
            }
        };

        fetchStocks();
    }, []);

    return (
        <div className={styles.AdminStocks}>
            <div className={styles.AdminTitle}>Акции</div>
            <div className={styles.AdminPanel_selectType} style={{ borderTop: '1px solid black' }}>
                <ul>
                    <li
                        className={selectType === 'Получить' ? styles.activeLi : ''}
                        onClick={() => setSelectType('Получить')}
                    >
                        Получить
                    </li>
                    <li
                        className={selectType === 'Удалить' ? styles.activeLi : ''}
                        onClick={() => setSelectType('Удалить')}
                    >
                        Удалить
                    </li>
                    <li
                        className={selectType === 'Создать_Изменить' ? styles.activeLi : ''}
                        onClick={() => setSelectType('Создать_Изменить')}
                    >
                        Создать_Изменить
                    </li>
                </ul>
            </div>
            {selectType === 'Получить' && (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Имя</th>
                            <th>Текст</th>
                            <th>Картинка</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stocks.map((stock: IStock) => (
                            <tr key={stock._id}>
                                <td>{stock._id}</td>
                                <td>{stock.name}</td>
                                <td>{stock.text}</td>
                                <td>
                                    <a href={`${AppURL}/${stock.picture}`} target="_blank" rel="noopener noreferrer">
                                        ссылка
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {selectType === 'Удалить' && (
                <MainContainer>
                    <div className={styles.Admin_subTitle}>ID (для удаления)</div>
                    <input
                    type="text"
                    className={styles.AdminInput}
                    value={inputIdDelete}
                    onChange={(e) => setIdDelete(e.target.value)}/>
                    <Button styless={{marginTop: '30px'}} state={buttonState.active} onClickBut={() => handleDelete(inputIdDelete)}>Удалить</Button>
                </MainContainer>
             
            )}
            {selectType === 'Создать_Изменить' && (
                <MainContainer>
                    <div style={{ marginTop: '50px' }}>
                        <div className={styles.AdminMainBlockTwo}>
                            <div className={styles.Admin_twoBlocks}>
                                <div className={styles.Admin_subTitle}>ID (для изменения)</div>
                                <input
                                    type="text"
                                    className={styles.AdminInput}
                                    value={inputId}
                                    onChange={(e) => setInputId(e.target.value)}
                                />
                                <div className={styles.Admin_subTitle}>Название</div>
                                <input
                                    type="text"
                                    className={styles.AdminInput}
                                    value={inputName}
                                    onChange={(e) => setInputName(e.target.value)}
                                />
                                <div className={styles.Admin_subTitle}>Время жизни</div>
                                <input
                                    type="date"
                                    className={styles.AdminInput}
                                    value={inputExpiresAt}
                                    onChange={(e) => setInputExpiresAt(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={styles.Admin_subTitle}>Текст</div>
                        <input
                            type="text"
                            className={styles.AdminInput_large}
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <div className={styles.Admin_subTitle}>Картинка</div>
                        <input
                            type="file"
                            className={styles.AdminInput}
                            onChange={(e) => setInputPicture(e.target.files?.[0] || null)}
                        />
                        <div className={styles.buttonCont}>
                            <Button state={buttonState.active} onClickBut={handleSubmit}>Отправить</Button>
                        </div>
                    </div>
                </MainContainer>
            )}
        </div>
    );
};

export default AdminStocks;
