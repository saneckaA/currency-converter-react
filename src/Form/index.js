import React, { useState } from "react";
import "./style.css"
import currencies from "../currencies";

const Form = ({ calculateResult, showOnClick }) => {

    const [amount, setAmount] = useState("");
    const [inputCurrency, setInputCurrency] = useState(currencies[0].code);
    const [outputCurrency, setOutputCurrency] = useState(currencies[1].code);
    const [showResult, setShowResult] = useState(true);

    const onFormSubmit = (event) => {
        event.preventDefault();

        calculateResult(inputCurrency, outputCurrency, amount);

        setShowResult(prev => !prev)
    }

    return (
        <form onSubmit={onFormSubmit}>
            <p>
                <label>
                    <span className="form__labelText">
                        Kwota do przeliczenia:
                    </span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placeholder="Podaj kwotę"
                        className="form__field"
                        required
                        type="number"
                        step="0.01"
                        min="1"
                    />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">
                        Waluta wejściowa:
                    </span>
                    <select
                        className="form__select"
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
                    </select>
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">
                        Waluta wyjściowa:
                    </span>
                    <select className="form__select"
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
                    </select>
                </label>
            </p>
            <p>
                <button
                    onClick={showOnClick}
                    className="form__button">Sprawdź kurs</button>
            </p>
        </form>
    )
};


export default Form;