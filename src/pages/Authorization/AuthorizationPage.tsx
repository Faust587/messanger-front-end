import React, {useState} from "react";
import "./Authorization.scss";
import {SignInForm} from "../../components/SignInForm/SignInForm";
import {SignUpForm} from "../../components/SignUpForm/SignUpForm";
import {signUpValidation} from "../../utils/authValidation";
import {errorType, fieldErrorType} from "../../types/validationTypes";
import {signInDataType, signUpDataType} from "../../types/authTypes";
import {fields} from "../../const/validation";
import axios from "axios";

export const AuthorizationPage = () => {

  const [sliderPosition, setSliderPosition] = useState(false);

  const [signUpData, setSignUpData] = useState<signUpDataType>({username: "", password: "", repeatPassword: ""});

  const [signUpUsername, setSignUpUsername] = useState<fieldErrorType>({error: false, value: ""});
  const [signUpPassword, setSignUpPassword] = useState<fieldErrorType>({error: false, value: ""});
  const [signUpRepeatPassword, setSignUpRepeatPassword] = useState<fieldErrorType>({error: false, value: ""});

  const [signInData, setSignInData] = useState<signInDataType>({username: "", password: ""});

  const [signInUsername, setSignInUsername] = useState<fieldErrorType>({error: false, value: ""});
  const [signInPassword, setSignInPassword] = useState<fieldErrorType>({error: false, value: ""});

  const signUpHandler = () => {
    if (!sliderPosition) {
      setSliderPosition(true);
    } else {
      axios({
        method: "POST",
        url: "http://localhost:5000/auth/sign-up",
        data: {
          username: signUpData.username,
          password: signUpData.password
        }}).then((data) => {
        console.log(data);
      });
      const {username, password, repeatPassword} = signUpData;
      const validationResult: errorType[] = signUpValidation(username.trim(), password.trim(), repeatPassword.trim());
      if (validationResult.length) {
        validationResult.forEach(({field, value}) => {
          const errorData = {error: true, value};
          switch (field) {
            case fields.USERNAME_FIELD: {
              setSignUpUsername(errorData);
              break;
            }
            case fields.PASSWORD_FIELD: {
              setSignUpPassword(errorData);
              break;
            }
            case fields.REPEAT_PASSWORD_FIELD: {
              setSignUpRepeatPassword(errorData);
              break;
            }
          }
        });
      } else {
        alert("SUCCESS");
      }
    }
  }

  const signInHandler = () => {
    if (sliderPosition) {
      setSliderPosition(false);
    } else {

    }
  }

  return (
    <div className="authorization-container">
      <div className={`app-title ${sliderPosition ? "left" : ""}`}>
        <div className={`app-title__text ${sliderPosition ? "text-left" : ""}`}>
          Welcome to my best pet project you ever seen
        </div>
      </div>
      <div className="auth-switcher">
        <button className={`auth-switcher__auth-button__left ${sliderPosition ? "active-auth-button" : "inactive-auth-button"}`}
                onClick={signUpHandler}>
          SIGN UP
        </button>
        <button className={`auth-switcher__auth-button__right ${sliderPosition ? "inactive-auth-button" : "active-auth-button"}`}
                onClick={signInHandler}>
          SIGN IN
        </button>
      </div>
      <SignUpForm data={signUpData}
                  setData={setSignUpData}
                  usernameError={signUpUsername}
                  passwordError={signUpPassword}
                  repeatPasswordError={signUpRepeatPassword}
                  setUsernameError={setSignUpUsername}
                  setPasswordError={setSignUpPassword}
                  setRepeatPasswordError={setSignUpRepeatPassword}/>
      <SignInForm data={signInData}
                  setData={setSignInData}
                  usernameError={signInUsername}
                  passwordError={signInPassword}
                  setUsernameError={setSignInUsername}
                  setPasswordError={setSignInPassword}/>
    </div>
  );
}
