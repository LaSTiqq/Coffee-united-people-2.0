const AuthButton = ({ text }) => {
  return (
    <button
      className="btn btn-warning d-block mx-auto fw-bold my-2"
      type="submit"
    >
      {text}
    </button>
  );
};

export default AuthButton;
