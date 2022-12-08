import React, { useState } from "react";
import "./../css/styles.css";
function Debt(props) {
  //state

    
  const [state, setState] = useState("");
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [totalDebt, setTotalDebt] = useState("");
  const [loanTermYears, setLoanTermYears] = useState("");
  const [loanTermMonths, setLoanTermMonths] = useState("");
  // const [date, setDate] = useState("");
  // const [monthlyPayment, setMonthlyPayment] = useState("");


  let now = new Date();
  let duedate = new Date(now);
  duedate.setDate(now.getDate() + 365);

  // review later
  // let scheduledDate
  // let now = new Date();
  // let duedate = (new Date(setDate({scheduledDate})));
  // duedate.setDate(now.getDate() + 365);

  // const submitData = async () => {
  // 	try {
  // 		const result
  // 	}
  // }

  const handleSubmit = (data, e) => {
    e.preventDefault();
    console.log(data, e);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();

    console.log("data", data);
    console.log(setState(state));
    // setState(state);
  };

  const onError = (errors, e) => console.log(errors, e);

  return (
    <div className="main-container">
      <div className="calculator-window">
        <form
          onSubmit={(e) => handleSubmit(onSubmit, onError)}
          className="form"
          action="calculate"
        >
          <div className="debt-input-section">
            <div className="section-content">
              <div className="section-title">
                <label htmlFor="principal"></label>
                <div>Loan Amount</div>
              </div>
              <div className="section-input">
                <input
                  type="number"
                  value={principal}
                  placeholder="Enter loan amount"
                  onChange={(e) => setPrincipal(e.target.value)}
                />
              </div>
              <div className="entering-section">
                <div className="section-name">Entering</div>
                <p className="principal"> {principal}</p>
              </div>
            </div>
          </div>
          <div className="debt-input-section">
            <div className="section-content">
              <div className="section-title">
                <label htmlFor="loan term years"></label>
                <div>Loan term in years</div>
              </div>
              <div className="section-input">
                <input
                  type="number"
                  value={loanTermYears}
                  placeholder="Enter loan term"
                  onChange={(e) => setLoanTermYears(e.target.value)}
                />
              </div>
              {/* <p className="loanTerms">Entering  Term Years{loanTermYears}</p> */}
            </div>
          </div>
          Or
          <div className="debt-input-section">
            <div className="section-content">
              <div className="section-title">
                <label htmlFor="termMonths"></label>

                <div>Loan term in months</div>
              </div>
              <div className="section-input">
                <input
                  type="number"
                  value={loanTermMonths}
                  placeholder="Enter loan term"
                  onChange={(e) => setLoanTermMonths(e.target.value)}
                />
              </div>
              {/* <p className="loanTerms">Entering  Term Years{loanTermYears}</p> */}
            </div>
          </div>
          <div className="debt-input-section">
            <div className="section-content">
              <div className="section-title">
                <label htmlFor="interestRate"></label>

                <div> Interest Rate</div>
              </div>
              <div className="section-input">
                <input
                  type="number"
                  value={interestRate}
                  placeholder="Enter loan term"
                  onChange={(e) => setInterestRate(e.target.value)}
                />
              </div>
              {/* <p className="loanTerms">Entering  Term Years{loanTermYears}</p> */}
            </div>
          </div>
          <div className="debt-input-section">
            <label htmlFor="debt information"> Total Amount Due </label>
            <input
              type="number"
              name="totalDebt"
              value={totalDebt}
              placeholder="Total Debt"
              onChange={(e) => setTotalDebt(e.target.value)}
            />
            <p className="principal">{totalDebt}</p>
          </div>
        </form>
        <div>
          <hr className="center-line" />
        </div>
        <div className="display-window">
          <div className="content-container">
            <h2 className="section-title">Monthly Payments</h2>
            {/* <h2 className="payment">{monthlyPayment}</h2> */}
          </div>

          <div className="content-container">
            <div className="section-title">Total Principal Paid</div>
            <div className="section-title paid">$5,000</div>
          </div>

          <hr />

          <div className="content-container">
            <div className="section-title">Total Interst Paid</div>
            <div className="section-title paid">$5,000</div>
          </div>
  
        </div>
      </div>
    </div>
  );
}

export default Debt;
