import { ResultContainer } from "./styled";

const Result = ({ result, }) => (

    <ResultContainer>
        {result !== undefined && (
            <>
               {result.inputAmount.toFixed(2)} {result.inputCurrency} =&nbsp; 
               <strong>{result.outputAmount.toFixed(2)} {result.outputCurrency}</strong>
            </>
        )}
    </ResultContainer>
)

export default Result;