import React from "react";
import Btn from './btn';
import InputBox from './inputbox';

function Login(props) {
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
      <InputBox placeholder="Username"/>
      <InputBox placeholder="Password" type="password"/>
      {props.register?<InputBox placeholder="Confirm Password" type="password"/>:null}
      {props.register?<Btn value="Register" />:<Btn value="Login"/>}
      <p className="mt-5 mb-3 text-muted">
        &copy; 2020. Ishan Inc. All Rights Reserved.
      </p>
    </form>
  );
}

export default Login;