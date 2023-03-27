const AuthButton = ({ text }) => {
  return (
    <button className="btn btn-warning d-block mx-auto fw-bold" type="submit">
      {text}
    </button>
  );
};

export default AuthButton;
