import React, { useState, useEffect } from "react";
import { Hour, Weekday, Day, Month, Year } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {

    const date = useCurrentDate();

    return (
        <div>
            <Hour>
                {date.toLocaleTimeString(undefined, {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })}
            </Hour>
            <Weekday>
                {date.toLocaleDateString(undefined, {
                    weekday: "long"
                })}
            </Weekday>
            <Day>
                {date.toLocaleDateString(undefined, {

                    day: "numeric",
                })}
            </Day>
            <Month>
                {date.toLocaleString(undefined, {
                    month: "long"
                })}
            </Month>
            <Year>
                {date.toLocaleDateString(undefined, {
                    year: "numeric"
                })}
            </Year>
        </div>
    )
};

export default Clock;