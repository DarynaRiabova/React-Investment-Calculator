import Board from "./components/Board";
import "./index.css";
import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";
function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(1);
  const [investmentResults, setInvestmentResults] = useState([]);
  const calculateResults = () => {
    const investmentParams = {
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    };

    const results = calculateInvestmentResults(investmentParams);
    setInvestmentResults(results);
  };
  return (
    <div>
      <div id="user-input" className="input-group">
        <Board
          text="INITIAL INVESTMENT"
          value={initialInvestment}
          onChange={setInitialInvestment}
        />
        <Board
          text="ANNUAL INVESTMENT"
          value={annualInvestment}
          onChange={setAnnualInvestment}
        />
        <Board
          text="EXPECTED RETURN"
          value={expectedReturn}
          onChange={setExpectedReturn}
        />
        <Board text="DURATION" value={duration} onChange={setDuration} />
        <button className="button-results" onClick={calculateResults}>
          Calculate Results
        </button>
      </div>
      <div id="result" className="center">
        <h2>Investment Results</h2>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest per Year</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {investmentResults.map((result) => (
              <tr key={result.year}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(result.interestAccumulated)}</td>
                <td>{formatter.format(result.investedCapital)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
