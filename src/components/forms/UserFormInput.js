import "./formInput.css";

const UserFormInput = (props) => {
  const { label, onChange, id,  ...inputProps } = props;
  return (
    <div className="formInput">
      {/*remember to pass down as a props on change to get the value back */}
      <div className="form-label">
        <label>{label}</label>
      </div>
      <div className="form-input">
        <input {...inputProps} onChange={onChange} />
      </div>
    </div>
  );
};

export default UserFormInput;
