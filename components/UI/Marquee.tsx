import React, { FC, ReactNode, useEffect, useState } from "react";
import styles from "./styles/Marquee/Marquee.module.scss";

interface MarqueeProps {
  text: string; // Слово для повторения
  speed?: number; // Скорость анимации в секундах
}

const Marquee: FC<MarqueeProps> = ({ text, speed = 10 }) => {
    const [repeatedText, setRepeatedText] = useState<string>("");

    // Заполнение строки повторяющимся текстом
    useEffect(() => {
      const screenWidth = window.innerWidth;
      const textWidth = text.length * 12; // Ширина одного слова (подстройка под шрифт)
      const repeatCount = Math.ceil(screenWidth / textWidth) + 2; // Запас повторений
      setRepeatedText(Array(repeatCount).fill(text).join(" "));
    }, [text]);

  return (
    <div className={styles.marquee}>
      <div
        className={styles.track}
        style={{ animationDuration: `${speed}s` }}
      >
        <span>{repeatedText}</span>
        <span>{repeatedText}</span>
        <span>{repeatedText}</span>
        <span>{repeatedText}</span>
        <span>{repeatedText}</span>
      </div>
    </div>
  );
};

export default Marquee;
