const AuthForm = ({ handleInput, handleSubmit, buttonText }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control my-2"
        onChange={handleInput}
        placeholder="Email"
        type="email"
        name="email"
        required
      />
      <input
        className="form-control mb-2"
        onChange={handleInput}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <button
        className="btn btn-warning d-block mx-auto fw-bold my-2"
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;
