import "./Login.css";

export const Login = () => {
  return (
    <section className="login">
      <div className="login__container">
        <h2>Sign In</h2>
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <button>Login</button>
        <p>
          Don't have an account? <a href="/">Sign Up</a>
        </p>
      </div>
    </section>
  );
};
