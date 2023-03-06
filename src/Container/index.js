import { GridContainer, Item, Button } from "./styled";
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
        <GridContainer>
            <Item
                first
                style={{
                    background: color ? 'rgba(211, 197, 153, 0.5)' : 'rgb(41, 39, 39, 0.7)',
                    color: color ? 'rgb(32, 31, 31)' : 'white',
                }}
            >
                <Button
                    onClick={handleClick}
                    style={{
                        color: icon ? 'black' : 'white',
                        background: icon ? 'white' : 'black'
                    }}>
                    {icon ? <HiMoon size={25} /> : <CgSun size={25} />}
                </Button>
                <p>
                    {formContent}
                </p>
            </Item>
            <Item
                style={{
                    background: color ? 'rgba(211, 197, 153, 0.5)' : 'rgb(41, 39, 39, 0.7)',
                    color: color ? 'rgb(32, 31, 31)' : 'white',
                }}
            >
                <p>
                    {timeContent}
                </p>
            </Item>
            {
                showResult ?
                    <Item
                        last
                        style={{ background: color ? 'rgba(211, 197, 153, 0.5)' : 'rgb(41, 39, 39, 0.7)', color: color ? 'rgb(32, 31, 31)' : 'white', }}
                    >
                        {resultContent}
                    </Item>
                    : null
            }
        </GridContainer>
    )
};

export default Container;