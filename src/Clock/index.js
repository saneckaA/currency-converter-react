import React, { useState, useEffect } from "react";

import "./style.css";

const Clock = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="clock">
            <div className="hour">
                {date.toLocaleTimeString(undefined, {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })}
            </div>
            <div className="weekday">
                {date.toLocaleDateString(undefined, {
                    weekday: "long"
                })}
            </div>
            <div className="day">
                {date.toLocaleDateString(undefined, {

                    day: "numeric",
                })}
            </div>
            <div className="month">
                {date.toLocaleString(undefined, {
                    month: "long"
                })}
            </div>
            <div className="year">
                {date.toLocaleDateString(undefined, {
                    year: "numeric"
                })}
            </div>
        </div>
    )
};

export default Clock;