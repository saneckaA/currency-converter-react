import styled from "styled-components";

export const Hour = styled.div`
    text-align: center;
    font-size: 50px;
`;

export const Weekday = styled.div`
    text-align: center;
    font-size: 25px;
`;

export const Day = styled.div`
    text-align: center;
    font-size: 100px;
    transition: 1s;
    
    &:hover {
        transform: rotate(360deg);
    }
`;

export const Month = styled.div`
    text-align: center;
    font-size: 30px;
`;

export const Year = styled.div`
    text-align: center;
    font-size: 25px;
    padding-top: 15px;
`;