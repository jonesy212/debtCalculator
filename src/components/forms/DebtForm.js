import React, { useState } from "react";
// import OutputData from './../OutputData';

import DisplayWindow from "./../DisplayWindow";
import FormInput from "./FormInput";
const DebtForm = ({ makeAPayment }) => {
  // const [principal, setPrincipal] = useState("");

  const userProfile = "";
  const userProfiles = [];

  // const userProflie
  const [values, setValues] = useState({
    paymentsMade: [],
    makeAPayment: "",
    interestRate: "",
    principal: "",
    inYears: "",
    inMonths: "",
    remainingPayment: "",
  });

  // <!---->
  console.log("principal", values.principal);
  console.log("years", values.inYears);
  console.log("months", values.inMonths);
  console.log("interest rate", values.interestRate);
  console.log("paying", values.makeAPayment);

  const calculated = () => {
    const { principal, inYears, inMonths, interestRate, makeAPayment } = values;

    const years = inYears;
    const months = inMonths;

    const interest = principal * (interestRate * 0.01)/12;
    console.log("CALCULAED INTEREST", interest);
    console.log(
      `We are calculating ('interest with'${principal} * ${interestRate}*.01)/ 12`
    );

    let M; // monthly mortgage payment;
    let P = principal;
    let i = interest;

    const monthlyPayment = (p, n, i) => {
      return (p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    };
    monthlyPayment();
  };

  calculated();
  const handleSubmit = (e, data) => {
    e.preventDefault();
    // another way to capture data
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()))
    console.log("submitting", userProfiles.push({ values }));
    console.log("userProfile", userProfiles);
  };

  const inputs = [
    {
      id: 0,
      name: "interestRate",
      type: "number",
      placeholder: "Interest Rate",
      label: "Interest Rate",
      errorMessage: "must be a number",
      required: false,
    },
    {
      id: 1,
      name: "makeAPayment",
      type: "number",
      placeholder: "Payment Amount",
      label: "Payment Amount",
      errorMessage: "Must add a payment amount",
      // required: true,
    },
    {
      id: 2,
      name: "principal",
      type: "number",
      placeholder: "Loan Amount",
      label: "Loan Amount",
      errorMessage: "",
    },
    {
      id: 3,
      name: "inYears",
      type: "number",
      placeholder: "Loan term in years",
      label: "Loan term in years",
      errorMessage: "",
    },
    {
      id: 4,
      name: "inMonths",
      type: "number",
      placeholder: "Loan term in months",
      label: "Loan term in months",
      errorMessage: "",
    },

    {
      id: 5,
      name: "paymentsMade",
      type: "number",
      placeholder: "PaymentsMade",
      errorMessage: "No payment information provided",
    },
  ];

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  //CAPTURES INPUT IN FIELDS IN REAL TIME
  // console.log(values)
  return (
    <div className="form-container">
      <div className="title">
        Update the necessary information below to calculate the payment amount.
      </div>
      <div className="content-container">
        <div className="form-container">
          <form onSubmit={handleSubmit} action="">
            <div>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  // value={values[input.name]}
                  placeholder={input.placeholder.toString()}
                  onChange={onChange}
                  calculating={calculated}
                />
              ))}
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        <DisplayWindow makeApayment={makeAPayment} />
      </div>
    </div>
  );
};

export default DebtForm;
