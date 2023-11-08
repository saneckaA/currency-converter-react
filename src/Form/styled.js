import styled from "styled-components";

export const Header = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    padding: 10px;
    text-align: justify;
    font-size: 18px;
    font-weight: bold;

    @media (max-width: 767px) {
        margin-left: 25px;
    }
`;

export const Input = styled.input`
    margin-left: 8px;
    padding: 3px;
    border-radius: 25px;
    border: none;
    background-color: rgb(255, 255, 255, 0.6);
    width: 100%;
    max-width: 250px;
    text-align: center;
    box-shadow: 0px 0px 21px 11px rgba(0, 0, 0);

    &:invalid {
        background-color: hsl(348, 83%, 87%);
    }

    @media (max-width: 767px) {
        max-width: 220px;
    }
`;

export const Select = styled.select`
    margin-left: 8px;
    padding: 3px;
    border-radius: 25px;
    border: none;
    width: 100%;
    max-width: 250px;
    text-align: center;
    background-color: rgb(255, 255, 255, 0.6);
    box-shadow: 0px 0px 21px 11px rgba(0, 0, 0);

    @media (max-width: 767px) {
        max-width: 220px;
    }
`;

export const Button = styled.button`
    border-radius: 10px;
    border: none;
    width: 500px;
    padding: 5px;
    background-color: rgb(255, 255, 255, 0.6);
    transition: 1s;
    margin-top: 10px;
    box-shadow: 0px 0px 21px 11px rgba(0, 0, 0);

    &:hover {
        background-color: rgb(209, 204, 177);
        transform: scale(1.1);
    }

    @media (max-width: 767px) {
        max-width: 240px;
        margin-top: 20px;
    }
`;

export const Loading = styled.p`
   color: ${({ theme }) => theme.loadingColor};
   font-size: 20px;
   padding-top: 30px;
`;

export const Failure = styled.p`
color: ${({ theme }) => theme.failureColor};
`;
