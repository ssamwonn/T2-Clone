import React, { Component } from "react";
import "./Login.scss";
import { config } from "./../../config";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      pwpass: false,
      errorActive: true,
    };
  }

  loginEmail = (e) => {
    const { email } = this.state;
    this.setState({ email: e.target.value });
    if (email.length > 5 && email.includes("@")) {
      this.setState({ errorActive: true });
    } else {
      this.setState({ errorActive: false });
    }
  };

  loginPassWord = (e) => {
    const { password } = this.state;
    this.setState({ password: e.target.value });
    if (password.length >= 8) {
      this.setState({ pwpass: true });
    } else {
      this.setState({ pwpass: false });
    }
  };

  handleClick = () => {
    fetch(`${config.api}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res["login response"].access_token) {
          window.sessionStorage.setItem(
            "login_token",
            res["login response"].access_token
          );
          this.props.history.push("/");
        } else {
          alert("로그인 정보가 다릅니다");
        }
      });
  };

  render() {
    const { email, pwpass, errorActive, password } = this.state;
    return (
      <main className="Login">
        <div className="headerImg">
          <span className="headeText">
            <a href="#">Terms & Conditions</a>
          </span>
        </div>
        <div className="loginBox">
          <div className="contentHeader">
            <h2 className="contentText">Welcome back!</h2>
            <span className="contentSubText">
              Enter your log in details below.
            </span>
          </div>
          <div className="formBox">
            <span className="formBoxText">Fields marked* are mandatory.</span>
            <input
              onChange={this.loginEmail}
              className={errorActive ? "inputEmail" : "inputBox"}
              type="text"
              placeholder="Enter your email*"
            />
            <img
              className={errorActive ? "succesImg" : "errorImg"}
              alt="succes"
              src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598112872308/images/validation_success.svg"
            />
            <span className={errorActive ? "displayNone" : "displayOn"}>
              <img
                className={errorActive ? "errorIconNone" : "errorIcon"}
                alt="succes"
                src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598112872308/images/error_cross.svg"
              />
              {email.length === 0
                ? "please enter your email address"
                : "Please enter a valid email address."}
            </span>
            <span className={errorActive ? "displayOn" : "displayNone"}></span>
            <input
              onChange={this.loginPassWord}
              className={pwpass ? "inputPassWord" : "inputBox"}
              type="password"
              placeholder="Enter your password*"
            />
            <img
              className={pwpass ? "succesImg" : "errorImg"}
              alt="succes"
              src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598112872308/images/validation_success.svg"
            />
            <img
              className={pwpass ? "errorIconNone" : "errorIcon"}
              alt="errorMessage"
              src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598112872308/images/error_cross.svg"
            />
            <span className={pwpass ? "displayNone" : "displayOn"}>
              {this.state.password.length === 0
                ? "Please enter your password"
                : "The information you have entered is invalid.Please try again."}
            </span>
            <span className={pwpass ? "displayOn" : "displayNone"}></span>
            <div className="inputChekBox">
              <input className="inputChek" type="checkbox" />
              <span className="inpuChekText">Remember me.</span>
            </div>
            <button
              className={
                email.length >= 5 && email.includes("@") && password.length >= 8
                  ? "nextLoginBtn"
                  : "prevLoginBtn"
              }
              type="button"
              onClick={this.handleClick}
              disabled={
                email.length >= 5 && email.includes("@") && password.length >= 9
                  ? false
                  : true
              }
            >
              Login
            </button>
            <a className="findPassword" href="#">
              Forgotten password?
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
