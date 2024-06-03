import Header from "./header/Header.jsx";
import InputGroup from "./input-group/InputGroup";
import Result from "./result/Result";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <main>
        <InputGroup onChange={handleChange} userInput={userInput} />
        {!inputIsValid && (
          <p className="center">Please enter a duration greater than zero</p>
        )}
        {inputIsValid && <Result data={userInput} />}
      </main>
    </>
  );
}

export default App;
