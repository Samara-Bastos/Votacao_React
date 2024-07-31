import React, { useState, useEffect } from 'react';
import { parse, differenceInMinutes } from 'date-fns';

const Timer = ({ tempoInicio, tempoFim }) => {

    const formato = 'HH:mm:ss';

    const inicio = parse(tempoInicio, formato, new Date());
    const fim = parse(tempoFim, formato, new Date());
    
    const totalMinutes = differenceInMinutes(fim, inicio);

    const [minutes, setMinutes] = useState(totalMinutes);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timerId);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);

        return () => clearInterval(timerId);
    }, [minutes, seconds]);

    return (
        <div>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
    );
};

export default Timer;