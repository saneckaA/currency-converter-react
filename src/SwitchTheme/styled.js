import styled from "styled-components";

export const SwitchButton = styled.button`
    cursor: pointer;
    border-radius: 10px;
    border: none;
    height: 35px;
    width: 35px; 
    font-size: 25px;
    margin-right: 600px;
    background: ${({ theme }) => theme.buttonColor};
    color: ${({ theme }) => theme.iconColor};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 31px 11px rgba(0, 0, 0);
    transition: 1s;

    &:hover {
        transform: scale(1.1);
    }
`;


