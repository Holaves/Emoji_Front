import React, { useEffect, useState } from 'react';
import styles from '../styles/AdminPanel/AdminPanel.module.scss';
import { AppURL } from '@/layouts/MainLayout';
import { IDish } from '@/types/dish';
import MainContainer from './MainContainer';
import Button, { buttonState } from './UI/Button';
import { ICategoria } from '@/types/categoria';

const AdminDishes = () => {
    const [selectType, setSelectType] = useState('Получить');
    const [dishes, setDishes] = useState<IDish[]>([]);
    const [categories, setCategories] = useState<ICategoria[]>([]);

    const [inputCategoria, setInputCategoria] = useState<string>('');
    const [inputName, setInputName] = useState<string>('');
    const [inputWeight, setInputWeight] = useState<string>('');
    const [inputPrice, setInputPrice] = useState<string>('');
    const [inputPicture, setInputPicture] = useState<File | null>(null);
    const [inputDescription, setInputDescription] = useState<string>('');
    const [inputId, setInputId] = useState<string>('');
    const [inputIdDelete, setInputIdDelete] = useState<string>('')

const handleDelete = async (id: string) => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            alert("Не удалось получить токен авторизации.");
            return;
        }

        try {
            const response = await fetch(`${AppURL}/dishes/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка при удалении.");
            }

            alert("Блюдо успешно удалено.");
            setDishes(dishes.filter(dish => String(dish._id) !== id));
        } catch (error) {
            console.error("Ошибка при удалении:", error);
            //@ts-ignore
            alert(`Ошибка: ${error.message}`);
        }
    };

    const handleSubmit = async () => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            alert("Не удалось получить токен авторизации.");
            return;
        }

        const data: Record<string, any> = {};
        if (inputCategoria) data.categoria = inputCategoria;
        if (inputName) data.name = inputName;
        if (inputWeight) data.weight = inputWeight;
        if (inputPrice) data.price = inputPrice;
        if (inputDescription) data.description = inputDescription;

        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }

        if (inputPicture) {
            formData.append('picture', inputPicture);
        }

        try {
            const method = inputId ? 'PUT' : 'POST';
            const url = inputId ? `${AppURL}/dishes/${inputId}` : `${AppURL}/dishes`;

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

            alert(inputId ? "Блюдо успешно обновлено." : "Блюдо успешно создано.");

            // Сбросить значения полей после успешной отправки
            setInputCategoria('');
            setInputName('');
            setInputWeight('');
            setInputPrice('');
            setInputPicture(null);
            setInputDescription('');
            setInputId('');
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
            //@ts-ignore
            alert(`Ошибка: ${error.message}`);
        }
    };

    useEffect(() => {
        const fetchDishes = async () => {
            const token = localStorage.getItem("jwtToken");
            if (token) {
                try {
                    const response = await fetch(`${AppURL}/dishes`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    if (!response.ok) {
                        alert("Failed to fetch dishes");
                    }

                    const data = await response.json();
                    setDishes(data);
                } catch (error) {
                    alert("Error fetching dishes:");
                }
            }
        };

        const fetchCategories = async () => {
            const token = localStorage.getItem("jwtToken");
            if (token) {
                try {
                    const response = await fetch(`${AppURL}/categories`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    if (!response.ok) {
                        alert("Failed to fetch categories");
                    }

                    const data = await response.json();
                    setCategories(data);
                } catch (error) {
                    alert("Error fetching categories:");
                }
            }
        };

        fetchCategories();
        fetchDishes();
    }, []);

    return (
        <div className={styles.AdminDishes}>
            <div className={styles.AdminTitle}>Блюда</div>
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
                            <th>Название</th>
                            <th>ID</th>
                            <th>Категория</th>
                            <th>Описание</th>
                            <th>Цена</th>
                            <th>Вес</th>
                            <th>Изображение</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dishes.map((item: IDish) => (
                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item._id}</td>
                                {/* @ts-ignore */}
                                <td>{item.categoria?.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.weight}</td>
                                <td>
                                    <a href={`${AppURL}/${item.picture}`} target="_blank" rel="noopener noreferrer">
                                        ссылка
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            
            <MainContainer>
            {selectType === 'Удалить' && (
                <MainContainer>
                    <div className={styles.Admin_subTitle}>ID (удаления)</div>
                    <input
                    type="text"
                    className={styles.AdminInput}
                    value={inputIdDelete}
                    onChange={(e) => setInputIdDelete(e.target.value)}/>
                    <Button styless={{marginTop: '30px'}} state={buttonState.active} onClickBut={() => handleDelete(inputIdDelete)}>Удалить</Button>
                </MainContainer>
             
            )}
                {selectType === 'Создать_Изменить' && (
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
                                <div className={styles.Admin_subTitle}>Цена</div>
                                <input
                                    type="text"
                                    className={styles.AdminInput}
                                    value={inputPrice}
                                    onChange={(e) => setInputPrice(e.target.value)}
                                />
                                <div className={styles.Admin_subTitle}>Вес</div>
                                <input
                                    type="text"
                                    className={styles.AdminInput}
                                    value={inputWeight}
                                    onChange={(e) => setInputWeight(e.target.value)}
                                />
                            </div>
                            <div className={styles.Admin_twoBlocks}>
                                <div className={styles.Admin_subTitle}>Изображение</div>
                                <input
                                    type="file"
                                    className={styles.AdminInput}
                                    onChange={(e) => setInputPicture(e.target.files?.[0] || null)}
                                />
                                <div className={styles.Admin_subTitle} style={{ marginTop: '50px' }}>Категория</div>
                                <select
                                    className={styles.AdminSelect}
                                    value={inputCategoria}
                                    onChange={(e) => setInputCategoria(e.target.value)}
                                >
                                    <option value="">Выберите категорию</option>
                                    {categories.map((item: ICategoria) => (
                                        <option key={item._id} value={item._id}>{item.subName}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={styles.Admin_subTitle}>Описание</div>
                        <input
                            type="text"
                            className={styles.AdminInput_large}
                            value={inputDescription}
                            onChange={(e) => setInputDescription(e.target.value)}
                        />
                        <div className={styles.buttonCont}>
                            <Button state={buttonState.active} onClickBut={handleSubmit}>Отправить</Button>
                        </div>
                    </div>
                )}
            </MainContainer>
        </div>
    );
};

export default AdminDishes;
