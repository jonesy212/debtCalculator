import React, { useState } from "react";
import FormInput from "./FormInput";

const UserForm = () => {
  
  const [values, setValues] = useState({
    userProfile: {
      username: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
    },
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't any special characters.",
      required: true,
      // pattern: "^[A-Za-z0-9]{6,18}$",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
      errorMessage: "Email should be a valid email",
      required: true,
    },
    {
      id: 3,
      name: "confirmEmail",
      type: "text",
      placeholder: "Confirm Email",
      label: "Confirm Email",
      errorMessage: "Both emails do not match",
      pattern: values.email,
      // require: true
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage:
        "Password should contain and include 1 letter, 1 number and 1 special character",
      // pattern: "/^ (?=.* [0-9]) (?=.* [a-zA-Z]) ([a-zA-Z0-9]+)$/",
      // required: true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Both passwords don't match, please try again",
      pattern: values.password,
      // require: true
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    //     const data = new FormData(e.target);
    //     console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} action="">
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
