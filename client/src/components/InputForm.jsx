const InputForm = ({ type, placeholder, classes }) => {
  return (
    <input
      type="email"
      placeholder={placeholder}
      className={`${classes} p-2`}
    />
  );
};

export default InputForm;
