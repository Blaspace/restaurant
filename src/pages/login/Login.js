import React from "react";

function Login() {
  return (
    <div className="login">
      <div>
        <h1>Welcome, login to your account</h1>
        <form>
          <lebel>Password</lebel>
          <br />
          <input type="password" placeholder="enter password..." />
          <br />
          <br />
          <lebel>Password</lebel>
          <br />
          <input type="password" placeholder="enter password..." />
          <br />
          <br />
          <button>Login</button>
        </form>
      </div>
      <section></section>
    </div>
  );
}

export default Login;
