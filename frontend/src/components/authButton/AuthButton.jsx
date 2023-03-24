const AuthButton = ({ text, className }) => {
  return (
    <button
      className={`btn btn-warning d-block mx-auto fw-bold ${className}`}
      type="submit"
    >
      {text}
    </button>
  );
};

export default AuthButton;
