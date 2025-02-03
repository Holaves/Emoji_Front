import React, { useEffect, useState } from 'react';
import ContainerA from './ContainerA';
import styles from '../styles/Header/Header.module.scss'
import Button, { buttonState } from './UI/Button';
import ModalWindow from './UI/ModalWindow';
import AutorizationWindow from './AutorizationWindow';
import VerificationWindow from './VerificationWindow';
import { AppURL } from '@/layouts/MainLayout';
import { IUser } from '@/types/user';
import { useRouter } from 'next/router';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import BurgerMenu from './BurgerMenu';
import Link from 'next/link';
import Cart from './Cart';
import { ICategoria } from '@/types/categoria';

interface HeaderMainProps{
    onChangeDeliveType?: (type: boolean) => void;
    order?: boolean,
    categories?: ICategoria[]
}


const HeaderMain:React.FC<HeaderMainProps> = ({order = false, onChangeDeliveType, categories}) => {
    const [changeHeader, setChangeHeader] = useState<boolean>(false)
    const [headerView, setHeaderView] = useState<boolean>(true)
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [user, setUser] = useState <IUser | null>(null)
    const [width, setWidth] = useState <number>(1000)
    const [deliveType, setDeliveType] = useState <boolean>(true)
    const [isOpenModal, setIsOpenModal] = useState <boolean>(false)
    const [isOpenBurger, setIsOpenBurger] = useState <boolean>(false)


    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const openAuthModal = () => setIsAuthModalOpen(true);
    const closeAuthModal = () => setIsAuthModalOpen(false);

    const onClickHandler = () => {
        setIsOpenModal(!isOpenModal);
      };


    const router = useRouter()

    const checkUser = async () => {
            const token = localStorage.getItem("jwtToken");
            if (!token) {
                return;
            }

            try {
                const response = await fetch(`${AppURL}/check/`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    const error = await response.json();
                    return
                }
                const data = await response.json();
                if(data.phone_number){
                    setUser(data)
                }
                setIsAuth(true)

            } catch (error) {
                console.error("Ошибка доступа:", error);
                
            }
        };
    useEffect(() => {
        setWidth(window.innerWidth)
        addEventListener("resize", (event) => {setWidth(window.innerWidth)});

    }, [])


    const changeHeaderHandler =  () => {
        setIsOpenModal(false)
        if(width > 800){
            setHeaderView(false)
            setTimeout(() => {
                setHeaderView(true)
                setChangeHeader(!changeHeader)
            }, 1000)
        }
        else{
            setIsOpenBurger(!isOpenBurger)
        }
       
    }
    useEffect(() => {
        // setHeaderView(true)
        checkUser()
    }, [])

   return(
       <nav className={headerView ? styles.header : styles.header_disabled}>
            <ContainerA styless={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
                <div className={styles.headerWrapper}>
                {
                    !changeHeader ?
                        <div className={styles.headerMainOne}>
                            <div className={styles.logoFull} onClick={() => router.push('/')}></div>
                            {
                                order ? (
                                    <div className={styles.deliveType_block}>
                                        <div
                                            className={deliveType ? styles.deliveType_delive_active : styles.deliveType_delive}
                                            onClick={() => {
                                                setDeliveType(true);
                                                onChangeDeliveType ? onChangeDeliveType(true) : console.log('');
                                            }}
                                        >
                                            <h3>Доставка</h3>
                                        </div>
                                        <div className={styles.deliveType_block_stick}></div>
                                        <div
                                            className={!deliveType ? styles.deliveType_samo_active : styles.deliveType_samo}
                                            onClick={() => {
                                                setDeliveType(false);
                                                onChangeDeliveType ? onChangeDeliveType(false) : console.log('');
                                            }}
                                        >
                                            <h3>Самовывоз</h3>
                                        </div>
                                    </div>
                                ) : (
                                    width >= 600 ? (
                                        <Button
                                            isAnimation={true}
                                            state={buttonState.active}
                                            width={width > 970 ? 504 : 360}
                                            height={width > 1440 ? 59 : 52}
                                        >
                                            <Link className={styles.anchor} href="/#anchor_two">Сделать заказ</Link>
                                        </Button>
                                    ) : (
                                        <></>
                                    )
                                )
                            }

                            <div className={styles.headerButtonContainer}>
                            {!order ? <div className={styles.header_cart_icon} onClick={onClickHandler}></div> : <></>}
                            <Cart isOpenModal={isOpenModal} ></Cart>
                                <div className={styles.headerChangeButton} onClick={changeHeaderHandler}>
                                    <span className={styles.headerChangeButton_item} id={styles.changeButton_item_first}></span>
                                    <span className={styles.headerChangeButton_item} id={styles.changeButton_item_second}></span>
                                    <span className={styles.headerChangeButton_item} id={styles.changeButton_item_three}></span>
                                </div>
                            </div>
                        </div>
                        :
                        <div className={styles.headerMainTwo}>
                            <div className={styles.headerList}>
                                <div className={styles.headerList_list}>
                                    <li><a style={{textDecoration: 'none'}} href="https://yandex.ru/maps/org/emodzi/5950025613/reviews/?ll=37.442145%2C45.262077&tab=reviews&z=17.4">Отзывы</a></li>
                                    <li onClick={() => router.push('/stocks')}>Акции</li>
                                    <li onClick={() => router.push('/Contacts')}>Контакты</li>
                                    <li id={styles.telephone_num}>+7(900)00-000-00</li>
                                </div>
                                <div className={styles.headerList_buttons}>
                                <Link href={'https://chat.whatsapp.com/DwJaagbhleKBIQNvS26G5L'} className={styles.headerList_buttons_WhatsApp}>
                                        <div className={styles.WhatsApp_Icon_gray}></div>
                                    </Link>
                                    <Link href={'https://vk.com/emojer27'} className={styles.headerList_buttons_Vk}>
                                        <div className={styles.Vk_icon_gray}></div>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.headerButtonsBlock}>
                                {
                                    isAuth ? 
                                    <div style={{marginRight: '20px'}} id={styles.telephone_numb}>{user?.phone_number}</div>
                                    :
                                    <div className={styles.log_in_button} onClick={openAuthModal}>
                                        Войти
                                    </div>

                                }
                                <ModalWindow isOpen={isAuthModalOpen} onClose={closeAuthModal} width={903}>
                                    <AutorizationWindow />
                                </ModalWindow>
                                <div className={styles.header_cart_icon} onClick={onClickHandler} style={{marginRight: 0}}></div>
                                <Cart isOpenModal={isOpenModal} ></Cart>

                                {/* Модальное окно верификации */}
                                {/* <ModalWindow isOpen={isVerificationModalOpen} onClose={closeVerificationModal} width={903}>
                                    <VerificationWindow phoneNumber={phoneNumber} />
                                </ModalWindow> */}
                                    <div className={styles.headerChangeButton_active} onClick={changeHeaderHandler}>
                                        <span className={styles.headerChangeButton_item_active} id={styles.changeButton_item_first}></span>
                                        <span className={styles.headerChangeButton_item_active} id={styles.changeButton_item_second}></span>
                                        <span className={styles.headerChangeButton_item_active} id={styles.changeButton_item_three}></span>
                                    </div>
                            </div>
                        </div>

                    }
                    <BurgerMenu isOpen={isOpenBurger} categories={categories ? categories : []}/>
                </div>
            </ContainerA>
       </nav>
   );
};


export default HeaderMain;