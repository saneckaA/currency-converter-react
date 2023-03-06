import "./style.css";
import React, { useState } from "react";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const Container = ({ formContent, resultContent, timeContent, showResult }) => {

    const [color, setColor] = useState(false);
    const [icon, setIcon] = useState(false);

    const handleClick = () => {
        setColor(current => !current);
        setIcon(current => !current);
    }

    return (
        <div className="grid__container">
            <div
                className="grid__item grid__item--first"
                style={{
                    background: color ? 'rgba(211, 197, 153, 0.5)' : 'rgb(41, 39, 39, 0.7)',
                    color: color ? 'rgb(32, 31, 31)' : 'white',
                }}
            >
                <button
                    className="dayNightButton"
                    onClick={handleClick}
                    style={{
                        color: icon ? 'black' : 'white',
                        background: icon ? 'white' : 'black'
                    }}>
                    {icon ? <HiMoon size={25} /> : <CgSun size={25} />}
                </button>
                <p>
                    {formContent}
                </p>
            </div>
            <div className="grid__item grid__item--second"
                style={{
                    background: color ? 'rgba(211, 197, 153, 0.5)' : 'rgb(41, 39, 39, 0.7)',
                    color: color ? 'rgb(32, 31, 31)' : 'white',
                }}
            >
                <p>
                    {timeContent}
                </p>
            </div>
            {
                showResult ?
                    <div
                        className="grid__item grid__item--last"
                        style={{ background: color ? 'rgba(211, 197, 153, 0.5)' : 'rgb(41, 39, 39, 0.7)', color: color ? 'rgb(32, 31, 31)' : 'white', }}
                    >
                        {resultContent}
                    </div>
                    : null
            }
        </div>
    )
};

export default Container;