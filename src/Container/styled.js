import styled, {css} from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 600px 300px;
    padding: 80px;

    @media (max-width: 767px) {
        grid-template-columns: 300px;
    }
`;

export const Item = styled.div`
    padding: 20px;
    background: rgba(211, 197, 153, 0.8);
    color: rgb(32, 31, 31);
    margin: 10px;
    border-radius: 25px;
    box-shadow: 0px 0px 31px 11px rgba(0, 0, 0);

    ${({first}) => first && css`
        min-height: 200px;
        text-align: center;
    `}

    ${({last}) => last && css`
    min-height: 70px;
    grid-column-start: 3;
    grid-column-end: 1;
    `}
`;

export const Button = styled.button`
    cursor: pointer;
    border-radius: 50%;
    border: none;
    height: 35px;
    width: 35px; 
    font-size: 25px;
    margin-right: 600px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 31px 11px rgba(0, 0, 0);
    transition: 1s;

    &:hover {
        transform: scale(1.1);
    }
`;