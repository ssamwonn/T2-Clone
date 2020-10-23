import React, { Component } from "react";
import Card from "./Card";
import { config } from "./../../config";
import "./Join.scss";

const EMAILREGEX = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
);

class Join extends Component {
  constructor() {
    super();
    this.state = {
      contentList: [
        {
          type: "img",
          img:
            "https://cdn.intelligencebank.com/au/share/NOrD/e3oNW/A9jnj/original/T2-you-desktop",
          introName: "You be You",
          pText: "With rewards, experiences and  personalised offers.",
          pSubText: "Sign up and start brewing the benefits today.",
        },
        {
          type: "video",
          img:
            "https://player.vimeo.com/external/365424904.sd.mp4?s=8b8aaec388a549c2cf4d2714d79ad42470e4aa89&profile_id=139",
          introName: "Give and receive.",
          pText:
            "Exclusive invitations to events for tea brewing and blending demos,first looks and stacks of festivities.",
          pSubText:
            "Recognising our brewing force is more than just a list of emails. It's faces, individuality, experiences, and thousands of different ways to enjoy tea.",
        },
        {
          type: "img",
          img:
            "https://cdn.intelligencebank.com/au/share/NOrD/e3oNW/18qGP/original/T2-strength-in-numbers-desktop",
          introName: "Strength in numbers.",
          pText: "With rewards, experiences and personalised offers",
          pSubText:
            "Giving you the option to purchase products that donate to our charitable causes and following the journy of getting our products to 100% sustainable.",
        },
      ],

      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirmPwd: "",
      phone: "",
      birthyear: "",
      birthmonth: "",
      birthday: "",

      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  birtdate = (e) => {
    this.setState({ [e.taget.name]: e.target.value });
  };

  handleClick = () => {
    // console.log(first_name);
    // console.log(last_name);
    fetch(`${config.api}/user/join`, {
      method: "POST",
      body: JSON.stringify({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        birthyear: this.state.birthyear,
        birthmonth: this.state.birthmonth,
        birthday: this.state.birthday,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  handleChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    this.setState({ [name]: value }, () => {
      switch (name) {
        case "firstName":
          formErrors.firstName =
            value.length < 2 && value.length > 0 ? "first name?" : "";
          break;
        case "lastName":
          formErrors.lastName =
            value.length < 2 && value.length > 0 ? "last name??" : "";
          break;
        case "email":
          formErrors.email =
            EMAILREGEX.test(value) || !value ? "" : "invalid email address";
          break;
        case "phone":
          formErrors.phone =
            value.length < 10 && value.length > 0
              ? "minimum 11 chracaters required"
              : "";
          break;
        case "password":
          formErrors.password =
            value.length < 8 && value ? "minimum 8 characaters required" : "";
          break;
        case "confirmPwd":
          if (this.state.password === this.state.confirmPwd) {
            formErrors.confirmPassword = "";
          } else {
            formErrors.confirmPassword = "passwords do not match";
          }
          break;
        default:
          break;
      }
      this.setState({ formErrors });
    });
  };

  dateChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { formErrors } = this.state;
    const years = Array(70)
      .fill(1950)
      .map((x, y) => x + y);
    const month = Array(12)
      .fill(1)
      .map((x, y) => x + y);
    const days = Array(31)
      .fill(1)
      .map((x, y) => x + y);

    return (
      <main className="Join">
        <div className="teaSoMain">
          <div className="teaSoLogoBox">
            <img
              className="LogoImg"
              alt="LogoImg"
              src="https://www.t2tea.com/on/demandware.static/-/Library-Sites-T2SharedLibrary/default/dw0cb04d00/images/content/Tea_Society_Logo_2019-Mini.png"
            />
            <span className="LogoText">You be you.</span>
            <a>
              <button className="moveLoginBtn">Login</button>
            </a>
            <a>
              <button className="moveJoinBtn">Join</button>
            </a>
          </div>
          <div className="videoWrapper">
            <video
              className="video"
              autoPlay
              muted
              loop
              src="https://player.vimeo.com/external/365212010.hd.mp4?s=07d666cac6503c9ba1f301c0bb5e1e3e1ba32143&profile_id=175"
            />
          </div>
        </div>
        <div className="headerIntro">
          <div className="introTextBox">
            <h2 className="introTitle">You,me and a cup of tea</h2>
            <p className="introSubText">
              Tea Society is a chance to let your passion for tea run wild, and
              to be rewarded for that passion. As a much-loved member you can
              expect pressies, events and oodles of benefits!
            </p>
          </div>
          <div className="contentBox">
            <h3 className="contentTitle">You're in for a treat!</h3>
            <div className="contentHeader">
              {this.state.contentList.map((el) => (
                <Card
                  cardType={el.type}
                  cardImg={el.img}
                  cardTitle={el.introName}
                  cardText={el.pText}
                  cardSubText={el.pSubText}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="joinFormSection">
          <div className="joinFormHeader">
            <img
              className="joinFormImg"
              src="https://www.t2tea.com/on/demandware.static/-/Library-Sites-T2SharedLibrary/default/dwb93811dd/images/content/tea-society-offer.png"
              alt="formImg"
            />
          </div>
          <div className="formTable">
            <div className="nameTable">
              <div className="firstNameWrap">
                <div
                  className={`firstName ${
                    formErrors.firstName.length > 0 ? "error" : null
                  }`}
                >
                  <input
                    onChange={this.handleChange}
                    type="text"
                    placeholder="First name"
                    name="firstName"
                  />
                </div>
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>
              <div className="lastNameWrap">
                <div
                  className={`lastName ${
                    formErrors.lastName.length > 0 ? "error" : null
                  }`}
                >
                  <input
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                  />
                </div>
                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </div>
            </div>
            <div className="inputFormSub">
              <div
                className={`emailWrapper ${
                  formErrors.email.length > 0 ? "error" : null
                }`}
              >
                <input
                  onChange={this.handleChange}
                  className="loginEmail"
                  type="text"
                  placeholder="Email*"
                  name="email"
                />
              </div>
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
              <div
                className={`phoneWrapper ${
                  formErrors.phone.length > 0 ? "error" : null
                }`}
              >
                <input
                  onChange={this.handleChange}
                  className="phoneInput"
                  type="text"
                  placeholder="Contact number*"
                  name="phone"
                />
              </div>
              {formErrors.phone.length > 0 && (
                <span className="errorMessage">{formErrors.phone}</span>
              )}

              <div
                className={`pwdInputWrapper ${
                  formErrors.password.length ? "error" : ""
                }`}
              >
                <input
                  onChange={this.handleChange}
                  className="pwdInput"
                  type="password"
                  placeholder="Password*"
                  name="password"
                />
              </div>
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
              <p class="labelText">
                Must have a minimum 8 characters including 1 uppercase and 1
                numeric
              </p>
              <div
                className={`confirmWapper ${
                  formErrors.confirmPassword.length > 0 ? "error" : null
                }`}
              >
                <input
                  onChange={this.handleChange}
                  className="confirmInput"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPwd"
                />
              </div>
              {formErrors.confirmPassword && (
                <span className="errorMessage">
                  {formErrors.confirmPassword}
                </span>
              )}
              <div className="dateCategory">
                <select
                  name="birthyear"
                  value={this.state.birthyear}
                  onChange={this.dateChange}
                >
                  <option>YYYY</option>
                  {years.map((el) => (
                    <option value={el}> {el}년 </option>
                  ))}
                </select>
                <select
                  name="birthmonth"
                  value={this.state.birthmonth}
                  onChange={this.dateChange}
                >
                  <option>MM</option>
                  {month.map((el) => (
                    <option value={el}> {el}월</option>
                  ))}
                </select>
                <select
                  name="birthday"
                  value={this.state.birthmonth}
                  onChange={this.dateChange}
                >
                  <option>DD</option>
                  {days.map((el) => (
                    <option value={el}> {el}일 </option>
                  ))}
                </select>
              </div>
              <div className="checkTable">
                <input className="joinCheckBox" type="checkbox" />
                <span className="infoText">
                  I would like to receive communications about exclusive
                  discount offers, special events & new products.
                </span>
              </div>
              <div className="checkTable">
                <input className="joinCheckBox" type="checkbox" />
                <span className="infoText">
                  I agree to T2 Terms & Condition and Privacy Poicy.
                </span>
              </div>
              <button onClick={this.handleClick} className="joinBtn">
                Join tea Society
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Join;
