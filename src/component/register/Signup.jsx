import "./Signup.css";

export const Signup = () => {
  return (
    <section className="signup">
      <div className="signup__container">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <button>signup</button>
        <p>
          Already have an account? <a href="/">Sign In</a>
        </p>
      </div>
    </section>
  );
};
