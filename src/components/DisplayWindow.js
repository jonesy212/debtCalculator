import React from "react";

const DisplayWindow = ({
  makeAPayment,
  monthlyPayment,
  principal,
  principalPaid,
}) => {
  return (
    <div className="display">
      <div className="content-container">
        <h2 className="section-title">Monthly Payments: {makeAPayment}</h2>
        <h2 className="payment">{monthlyPayment}</h2>
      </div>
      <input type="number" name={makeAPayment} />
      <div>
        <button className="" type="submit">
          Make a payment
        </button>
      </div>

      <div className="content-container">
        <div className="section-title paid">
          Total Principal Paid: {principalPaid}
        </div>
        <div className="div" principal={principal}>
          {" "}
          Loan Amount: {principal}
        </div>
      </div>

      <hr />

      <div className="content-container">
        <div className="section-title">Total Interest Paid</div>
        <div className="section-title paid">$5,000</div>
      </div>
    </div>
  );
};

export default DisplayWindow;
