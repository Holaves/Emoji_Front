import { FC, useState } from "react";
import Button, { buttonState } from "./UI/Button";
import styles from '../styles/VerificationWindow/VerificationWindow.module.scss'
import { useRouter } from "next/router";
import { AppURL } from "@/layouts/MainLayout";

interface VerificationWindowProps {
    phoneNumber: string; // Номер телефона из предыдущего окна
}

const VerificationWindow: FC<VerificationWindowProps> = ({ phoneNumber }) => {

    const [buttonStateIs, setbuttonStateIs] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const router = useRouter();
    console.log(phoneNumber)

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue: string = e.target.value;
        setbuttonStateIs(true)
        setInputValue(inputValue)
    }

    const submitHandler = async () => {
        if (!buttonStateIs || isSubmitting) return; 
        setIsSubmitting(true);
    
        try {
            const response = await fetch(`${AppURL}/sms/check-verification-code`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone_number: phoneNumber,
                    verificationCode: inputValue
                }),
            });
    
            if (response.ok) {
                const responseText = await response.text(); 
                
                router.push('/authComplete')
                if (responseText) {
                    const data = JSON.parse(responseText); 
                    console.log('Success:', data);
                } else {
                    console.warn('Ответ пустой или невалидный JSON');
                }
            } else {
                const errorText = await response.text(); 
                console.error('Ошибка при отправке запроса:', errorText);
            }
        } catch (error) {
            console.error('Ошибка сети или сервера:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className={styles.verification}>
            <h1>Подтверждение</h1>
            <p>На номер {phoneNumber} был отправлен код подтверждения.</p>
            <input type="text" placeholder="Введите код" onChange={inputHandler} value={inputValue} />
            <Button
                state={buttonState.active}
                width={636}
                height={102}
                styless={{ marginTop: '52px' }}
                onClickBut={submitHandler}
            >
                Подтвердить
            </Button>
        </div>
    );
};

export default VerificationWindow;