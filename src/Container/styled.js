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
    background: ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.textColor};
    margin: 10px;
    border-radius: 20px;
    box-shadow: 0px 0px 31px 11px rgba(0, 0, 0);

    ${({first}) => first && css`
        min-height: 200px;
        text-align: center;
    `}

    ${({second}) => second && css`
    @media (max-width: 767px) {
        display: none;
    }
    `} 
    
    ${({last}) => last && css`
    min-height: 70px;
    grid-column-start: 3;
    grid-column-end: 1;

    @media (max-width: 767px) {
        grid-column-start: 1;
        grid-column-end: 1;
    }
    `}

    @media (max-width: 767px) {
       grid-template-columns: 300px;
       grid-gap: 20px;
    }
`;

export const Flex =styled.div`
 
 @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 100px 150px;

    
 }

`;

export const Button = styled.div`
${({button}) => button && css`
border: none;
`}
`;

export const Time = styled.div`


${({time}) => time && css`

@media (max-width: 767px) {
    
    border-radius: 10px;
    box-shadow: 0px 0px 31px 11px rgba(0, 0, 0);
}
`}

`;