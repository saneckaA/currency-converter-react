import "./style.css"

const Result = ({ result, }) => (

    <p className="result">
        {result !== undefined && (
            <>
               {result.inputAmount.toFixed(2)} {result.inputCurrency} =&nbsp; 
               <strong>{result.outputAmount.toFixed(2)} {result.outputCurrency}</strong>
            </>
        )}
    </p>
)

export default Result;