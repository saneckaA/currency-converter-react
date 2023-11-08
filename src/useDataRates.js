import {useState, useEffect } from "react";

export const useDataRates = () => {
    const [dataRates, setDataRates] = useState({
    status: "loading",
    date: "",
    currencyData: [],
});

useEffect(() => {
    const fetchRates = async () => {

        const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_PRX7LeNNmSkfTzb5Tcx9Roxv3Lq4XR72xKzUiWDy`;
        try {
            const response = await fetch(url);
            console.log(response);

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const {data, meta} = await response.json()

            setDataRates({
                status: "success",
                data,
                meta
            });

            console.log("Data:", data);
            console.log("Meta:", meta);

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

