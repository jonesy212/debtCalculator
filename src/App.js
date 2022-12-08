import React from "react";
// import Debt from "./../src/cards/DebtCard";
import "./App.css";

import Form from "./components/forms/DebtForm";
function App() {
  // const { totalDebt, interestRate, monthlyPayment } = this.data;

  return (
    <div className="App">
      <header className="App-header">
        {/* <Debt /> */}
        <div className="main-container">
          <Form />
         
        </div>
      </header>
    </div>
  );
}

export default App;