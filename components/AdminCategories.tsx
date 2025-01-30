import React, { useEffect, useState } from 'react';
import styles from '../styles/AdminPanel/AdminPanel.module.scss';
import { AppURL } from '@/layouts/MainLayout';
import { ICategoria } from '@/types/categoria';
import Button, { buttonState } from './UI/Button';
import MainContainer from './MainContainer';

const AdminCategories = () => {
    const [selectType, setSelectType] = useState('ViewCategories');
    const [categories, setCategories] = useState<ICategoria[]>([]);
    const [inputName, setInputName] = useState<string>('');
    const [inputSubName, setInputSubName] = useState<string>('');
    const [inputPicture, setInputPicture] = useState<File | null>(null);
    const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
    const [availableCategories, setAvailableCategories] = useState<ICategoria[]>([]);
    const [inputIdDelete, setInputIdDelete] = useState <string>('')

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
                    return;
                }
                const data = await response.json();
                setCategories(data);
                setAvailableCategories(data);
            } catch (error) {
                alert("Error fetching categories:");
            }
        }
    };
    const handleDelete = async (id: string) => {
            const token = localStorage.getItem("jwtToken");
            if (!token) {
                alert("Не удалось получить токен авторизации.");
                return;
            }
    
            try {
                const response = await fetch(`${AppURL}/categories/${id}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
    
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || "Ошибка при удалении.");
                }
    
                alert("Категория успешно удалена.");
                setCategories(categories.filter(categorya => String(categorya._id) !== id));
            } catch (error) {
                console.error("Ошибка при удалении:", error);
                //@ts-ignore
                alert(`Ошибка: ${error.message}`);
            }
        };

    const handleCreateCategory = async () => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            alert("Не удалось получить токен авторизации.");
            return;
        }
    
        const formData = new FormData();
        formData.append("name", inputName);
        formData.append("subName", inputSubName);
    
        // Добавление подкатегорий с ключом subCategoria
        selectedSubCategories.forEach((subId, index) => {
            formData.append(`subCategories[${index}]`, subId);
        });
    
        if (inputPicture) {
            formData.append("picture", inputPicture);
        }
    
        try {
            const response = await fetch(`${AppURL}/categories`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });
    
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка при создании категории.");
            }
    
            alert("Категория успешно создана.");
            setInputName('');
            setInputSubName('');
            setInputPicture(null);
            setSelectedSubCategories([]);
            fetchCategories(); // Refresh categories after creation
        } catch (error) {
            console.error("Ошибка при создании категории:", error);
            //@ts-ignore
            alert(`Ошибка: ${error.message}`);
        }
    };

    const handleRemoveSubCategory = (id: string) => {
        setSelectedSubCategories(selectedSubCategories.filter((subId) => subId !== id));
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className={styles.AdminCategories}>
            <div className={styles.AdminTitle}>Категории</div>
            <div className={styles.AdminPanel_selectType}>
                <ul>
                    <li
                        className={selectType === 'ViewCategories' ? styles.activeLi : ''}
                        onClick={() => setSelectType('ViewCategories')}
                    >
                        Просмотр категорий
                    </li>
                    <li
                        className={selectType === 'CreateCategory' ? styles.activeLi : ''}
                        onClick={() => setSelectType('CreateCategory')}
                    >
                       
                        Создать категорию
                    </li>
                    <li
                        className={selectType === 'DeleteCategory' ? styles.activeLi : ''}
                        onClick={() => setSelectType('DeleteCategory')}
                    >Удалить категорию</li>
                </ul>
            </div>

            {selectType === 'ViewCategories' && (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Имя</th>
                            <th>Подкатегории</th>
                            <th>Картинка</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category._id}>
                                <td>{category._id}</td>
                                <td>{category.subName}</td>
                                <td>
                                    {/* @ts-ignore */}
                                    {category.subCategories?.length ? (
                                        // @ts-ignore
                                        category.subCategories.map((sub) => <div key={sub._id}>{sub.name}</div>)
                                    ) : (
                                        <div>Нет подкатегорий</div>
                                    )}
                                </td>
                                <td>
                                    {category.picture ? (
                                        <a href={`${AppURL}/${category.picture}`} target="_blank" rel="noopener noreferrer">
                                            Ссылка на картинку
                                        </a>
                                    ) : (
                                        'Нет изображения'
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {
                selectType === 'DeleteCategory' && (
                    <MainContainer>
                        <div className={styles.Admin_subTitle}>ID (удаления)</div>
                        <input
                        type="text"
                        className={styles.AdminInput}
                        value={inputIdDelete}
                        onChange={(e) => setInputIdDelete(e.target.value)}/>
                        <Button styless={{marginTop: '30px'}} state={buttonState.active} onClickBut={() => handleDelete(inputIdDelete)}>Удалить</Button>
                    </MainContainer>
                )
            }
            {selectType === 'CreateCategory' && (
                <MainContainer>
                    <div className={styles.AdminSubTitle}>Создать категорию</div>
                    <div className={styles.Admin_twoBlocks}>
                        <div className={styles.Admin_subTitle}>Название</div>
                        <input
                            type="text"
                            className={styles.AdminInput}
                            value={inputName}
                            onChange={(e) => setInputName(e.target.value)}
                        />
                        <div className={styles.Admin_subTitle}>Подназвание</div>
                        <input
                            type="text"
                            className={styles.AdminInput}
                            value={inputSubName}
                            onChange={(e) => setInputSubName(e.target.value)}
                        />
                        <div className={styles.Admin_subTitle}>Изображение</div>
                        <input
                            type="file"
                            className={styles.AdminInput}
                            onChange={(e) => setInputPicture(e.target.files?.[0] || null)}
                        />
                    </div>
                    <div className={styles.Admin_subTitle}>Подкатегории</div>
                    <select
                        className={styles.AdminSelect}
                        onChange={(e) => {
                            const selectedId = e.target.value;
                            if (!selectedSubCategories.includes(selectedId)) {
                                setSelectedSubCategories([...selectedSubCategories, selectedId]);
                            }
                        }}
                    >
                        <option value="">Выберите подкатегорию</option>
                        {availableCategories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.subName}
                            </option>
                        ))}
                    </select>
                    <div className={styles.SelectedItems}>
                        {selectedSubCategories.map((id) => {
                            const subCategory = availableCategories.find((cat) => cat._id === id);
                            return (
                                <div key={id} className={styles.SelectedItem}>
                                    {subCategory?.subName}{' '}
                                    <button
                                        className={styles.RemoveButton}
                                        onClick={() => handleRemoveSubCategory(id)}
                                    >
                                        Удалить
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                    <Button styless={{marginTop: '30px'}} state={buttonState.active} onClickBut={handleCreateCategory}>
                        Создать
                    </Button>
                </MainContainer>
            )}
        </div>
    );
};

export default AdminCategories;
