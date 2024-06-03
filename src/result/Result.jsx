import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Result({ data }) {
  let annualData = calculateInvestmentResults(data);
  const initialIvestiment =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investiment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          {/* <th>Invested Capital</th> */}
        </tr>
      </thead>
      <tbody>
        {annualData.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialIvestiment;

          const totalAmountInvested = result.valueEndOfYear - totalInterest;
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
