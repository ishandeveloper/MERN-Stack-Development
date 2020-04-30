import React from "react";

function Login() {
  return (
    <form className="form-signin md-12">
      <img
        className="mb-4"
        src="https://www.ishandeveloper.com/assets/img/favicon.png"
        alt=""
        width="128"
        height="128"
      />
      <h1 className="h3 mb-3 font-weight-normal">Log In</h1>
      <label htmlFor="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="inputEmail"
        className="form-control"
        placeholder="Email address"
        required
        autoFocus
      />
      <label htmlFor="inputPassword" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="inputPassword"
        className="form-control"
        placeholder="Password"
        required
      />
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
      <p className="mt-5 mb-3 text-muted">
        &copy; 2020. Ishan Inc. All Rights Reserved.
      </p>
    </form>
  );
}

export default Login;