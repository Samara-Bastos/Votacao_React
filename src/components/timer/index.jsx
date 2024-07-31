import React, { useState, useEffect } from 'react';
import { parse, differenceInSeconds } from 'date-fns';

const Timer = ({ tempoFim }) => {
    const formato = 'HH:mm:ss';
    const fim = parse(tempoFim, formato, new Date());

    const totalSeconds = differenceInSeconds(fim, new Date());

    const [secondsLeft, setSecondsLeft] = useState(totalSeconds);

    useEffect(() => {
        const timerId = setInterval(() => {
            if (secondsLeft <= 0) {
                clearInterval(timerId);
            } else {
                setSecondsLeft(secondsLeft - 1);
            }
        }, 1000);

        return () => clearInterval(timerId);
    }, [secondsLeft]);

    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    return (
        <div>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
    );
};

export default Timer;