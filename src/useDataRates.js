import {useState, useEffect } from "react";

export const useDataRates = () => {

const [dataRates, setDataRates] = useState({
    status: "loading",
});

useEffect(() => {
    const fetchRates = async () => {
        try {
            const response = await fetch("https://api.exchangerate.host/latest");

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const { rates, date } = await response.json();

            setDataRates({
                status: "success",
                rates,
                date,
            });

        } catch (error) {
            setDataRates({
                status: "error",
            });
        }
    };

    setTimeout(fetchRates, 2000);
}, []);

return dataRates;
};

