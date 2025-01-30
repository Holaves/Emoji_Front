import React, { useEffect, useState } from 'react';
import styles from '../styles/AdminPanel/AdminPanel.module.scss';
import { AppURL } from '@/layouts/MainLayout';
import MainContainer from './MainContainer';
import Button, { buttonState } from './UI/Button';

interface IRole {
    name: string;
    description: string;
    _id: string
}

interface IUser {
    _id: string;
    phone_number: string;
    name?: string;
    adress?: string;
    roles?: IRole[];
}

const AdminUsers = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [roles, setRoles] = useState<string[]>([]);
    const [selectedRole, setSelectedRole] = useState<string>('');
    const [userId, setUserId] = useState<string>('');

    useEffect(() => {
        const fetchUsers = async () => {
            const token = localStorage.getItem("jwtToken");
            if (!token) return alert("Не удалось получить токен авторизации.");

            try {
                const response = await fetch(`${AppURL}/users`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    console.log(response.status)
                    throw new Error('Ошибка при получении пользователей');
                }

                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Ошибка при загрузке пользователей:', error);
                alert('Не удалось загрузить пользователей.');
            }
        };

        const fetchRoles = async () => {
            const token = localStorage.getItem("jwtToken");
            if (!token) return alert("Не удалось получить токен авторизации.");

            try {
                const response = await fetch(`${AppURL}/roles`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Ошибка при получении ролей');
                }

                const data = await response.json();
                setRoles(data.map((role: { name: string }) => role.name));
            } catch (error) {
                console.error('Ошибка при загрузке ролей:', error);
                alert('Не удалось загрузить роли.');
            }
        };

        fetchUsers();
        fetchRoles();
    }, []);

    const handleAssignRole = async () => {
        if (!userId.trim() || !selectedRole.trim()) {
            return alert('Введите ID пользователя и выберите роль.');
        }

        const token = localStorage.getItem("jwtToken");
        if (!token) return alert("Не удалось получить токен авторизации.");

        try {
            const response = await fetch(`${AppURL}/users/${userId}/roles`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ role: selectedRole }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Ошибка при назначении роли');
            }

            alert('Роль успешно назначена.');
            setUserId('');
            setSelectedRole('');
        } catch (error) {
            console.error('Ошибка при назначении роли:', error);
            //@ts-ignore
            alert(`Ошибка: ${error.message}`);
        }
    };

    return (
        <div className={styles.AdminUsers}>
            <div className={styles.AdminTitle}>Пользователи</div>
            <MainContainer>
                <div className={styles.Admin_subTitle}>Всего пользователей зарегестрированных на сайте: {users.length}</div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Телефон</th>
                            <th>Имя</th>
                            <th>Адрес</th>
                            <th>Роли</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.phone_number}</td>
                                <td>{user.name || 'Не указано'}</td>
                                <td>{user.adress || 'Не указано'}</td>
                                <td>{user.roles && (user.roles.map((item) => <div>{item.name}, </div>))}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className={styles.AdminActions} style={{ marginTop: '20px' }}>
                    <div className={styles.Admin_subTitle}>ID пользователя</div>
                    <input
                        type="text"
                        className={styles.AdminInput}
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                    <div className={styles.Admin_subTitle}>Выберите роль</div>
                    <select
                        className={styles.AdminSelect}
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                    >
                        <option value="">Выберите роль</option>
                        {roles.map((role) => (
                            <option key={role} value={role}>
                                {role}
                            </option>
                        ))}
                    </select>
                    <Button
                        styless={{ marginTop: '20px' }}
                        state={buttonState.active}
                        onClickBut={handleAssignRole}
                    >
                        Назначить роль
                    </Button>
                </div>
            </MainContainer>
        </div>
    );
};

export default AdminUsers;
