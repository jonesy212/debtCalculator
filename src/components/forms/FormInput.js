import React, { useState } from "react";
import "./../../css/formInput.css";


const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, id, errorMessage, ...inputProps } = props;

  
  const handleFocus = () => {
    setFocused(true);
  };
  
  const calculate = () => {

    // let M;// monthly mortgage payment;
    // let P = principal;
    // let i = interestRate;
    // let n = inMonths || inYears;

    // //calculate
    // M = P * ((1 + interestRate*.001) ^n)/n/12
    // //monthly mortgage payment formula
    // M = monthlyPayment(P, n, i);
    // console.log(M);



    // function monthlyPayment(p, n, i) {
    //   return (p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    // }
      
    
    // let principal = { ...(inputProps === "principal") };
    // const interest = (principal * (interestRate * 0.01)) / 12;
    // const paymentReceived = makeAPayment;

    // if (principal) {
    //   //formula for principal
    //   principal = M/ ((1 + interestRate/100) ^ n) * n * 12
    // }
    
    // if (makeAPayment) {
      //   let newPrincipal = principal - (payment - interest);
      //   principal = newPrincipal;
    //   return principal;
    // }
   return
  };
  
  
  
  const calculatedValue = calculate();
  // console.log('calculate',calculatedValue)
  return (
    <div className="formInput">
      {/*remember to pass down as a props on change to get the value back */}
      <div className="form-label">
        <label>{label}</label>
      </div>
      <div className="form-input">
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
          calculate={calculatedValue}
        />
        <span>{errorMessage}</span>
      </div>
    </div>
  );
};

export default FormInput;

// const calculate = (props) => {

// const { makeAPayment, interestRate,  } = props;

//   const principal = inputProps
//   const interest = (interestRate * .01)/ 12
//   const payments = makeAPayment
// }

// onBlur={handleFocus}
// focused={focused.toString()}
//for user form
// onFocus={()=>inputProps.name === "confirmPassword" && setFocused(true)}
// onChange={onChange(calculate())}
