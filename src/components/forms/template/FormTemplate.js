import React, { useState } from "react";

import FormInput from "../FormInput";
const Form = () => {
  // const [principal, setPrincipal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // another way to capture data
      // const data = new FormData(e.target);
      // console.log(Object.fromEntries(data.entries()))
  };

  const [values, setValues] = useState({
    principal: "",
    inYears: "",
    inMonths: "",
    
  })

  const inputs = [
    {
       
    }
  ]


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} action="">
        <FormInput name="principal" placeholder="Loan Amount" />
        <FormInput name="interestRate" placeholder="Interest rate" />
        <FormInput name="loanAmountInYears" placeholder="Loan term in years" />
        <FormInput
          name="loanAmountInMonths"
          placeholder="Loan term in nonths"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
