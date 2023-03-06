import React, { useState, useRef } from "react";
import { Header, Input, Select, Button } from "./styled";
import currencies from "../currencies";

const Form = ({ calculateResult, showOnClick }) => {


    const [amount, setAmount] = useState("");
    const [inputCurrency, setInputCurrency] = useState(currencies[0].code);
    const [outputCurrency, setOutputCurrency] = useState(currencies[1].code);
    const [showResult, setShowResult] = useState(true);
    const inputRef = useRef(null);
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(inputCurrency, outputCurrency, amount);
        setShowResult(prev => !prev)
        inputRef.current.focus();
    };

    return (
        <form onSubmit={onFormSubmit}>
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
                        onChange={({ target }) => setInputCurrency(target.value)}
                    >
                        {currencies.map((inputCurrency => (
                            <option
                                key={inputCurrency.code}
                                value={inputCurrency.code}
                            >
                                {inputCurrency.name}
                            </option>
                        )))}
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
                        onChange={({ target }) => setOutputCurrency(target.value)}
                    >
                        {currencies.map((outputCurrency => (
                            <option
                                key={outputCurrency.code}
                                value={outputCurrency.code}
                            >
                                {outputCurrency.name}
                            </option>
                        )))}
                    </Select>
                </label>
            </p>
            <p>
                <Button
                    onClick={showOnClick}
                    className="form__button"
                >
                    Sprawdź kurs
                </Button>
            </p>
        </form>
    )
};


export default Form;