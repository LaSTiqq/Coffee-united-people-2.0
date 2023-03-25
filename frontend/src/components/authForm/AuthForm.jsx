import AuthButton from "../authButton/AuthButton";

function AuthForm({ handleInput, handleSubmit, buttonText }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control my-2"
        onChange={handleInput}
        placeholder="Username"
        type="text"
        name="login"
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
      <AuthButton text={buttonText} className="my-2" />
    </form>
  );
}

export default AuthForm;
