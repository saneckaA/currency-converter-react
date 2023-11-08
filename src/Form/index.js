import React, { useState, useRef, useEffect } from "react";
import { Header, Input, Select, Button, Loading, Failure } from "./styled";
import currencies from "../currencies";
import { useDataRates } from "../useDataRates";
import BeatLoader from "react-spinners/BeatLoader";

const Form = ({ calculateResult, showOnClick }) => {
    const [amount, setAmount] = useState("");
    const [inputCurrency, setInputCurrency] = useState("PLN");
    const [outputCurrency, setOutputCurrency] = useState("EUR");
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);
    const dataRates = useDataRates();
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setDate(new Date(!!dataRates.meta && dataRates.meta.last_updated_at))
    });

    const formattedDate = date.toLocaleDateString(undefined, {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
    })

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(inputCurrency, outputCurrency, amount);
        setShowResult(prev => !prev)
        inputRef.current.focus();
    };


    return (
        <form onSubmit={onFormSubmit}>
            {dataRates.status === "loading"
                ? (<>
                    <Loading>
                        Kursy walut ładowane są z Europejskiego Banku Centralnego...
                    </Loading>
                        <BeatLoader color={"black"} loading={loading} size={20} />
                    </>
                )
                : (
                    dataRates.status === "error" ? (
                        <Failure>
                            Hmm.. Coś poszło nie tak. Sprawdź swoje połączenie z internetem lub spróbuj później
                        </Failure>
                    ) : (
                        <>
                            <p>
                                <label>
                                    <Header>
                                        Kwota do przeliczenia:
                                    </Header>
                                    <Input
                                        ref={inputRef}
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        placeholder="Podaj kwotę"
                                        required
                                        type="number"
                                        step="0.01"
                                        min="1"
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    <Header>
                                        Waluta wejściowa:
                                    </Header>
                                    <Select 
                                    value={inputCurrency}
                                    onChange={({target}) => setInputCurrency(target.value)}
                                    >
                                        {Object.keys(dataRates.data).map((inputCurrency) => (
                                            <option key={inputCurrency} value={inputCurrency}>
                                                {inputCurrency}
                                            </option>
                                        ))}
                                     
                                    </Select>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <Header>
                                        Waluta wyjściowa:
                                    </Header>
                                    <Select
                                    value={outputCurrency}
                                    onChange={({target}) => setOutputCurrency(target.value)}
                                    >
                                        {Object.keys(dataRates.data).map((outputCurrency) => (
                                            <option key={outputCurrency} value={outputCurrency}>
                                                {outputCurrency}
                                            </option>
                                        ))}
                                    
                                    </Select>
                                </label>
                            </p>
                            <p>
                                <Button onClick={showOnClick}> Sprawdź kurs </Button>
                            </p>
                            <p>
                                Kursy walut pochodzą z dnia: <strong> {formattedDate} </strong>
                            </p>
                        </>
                    )
                )
            }

        </form>

    )
};


export default Form;