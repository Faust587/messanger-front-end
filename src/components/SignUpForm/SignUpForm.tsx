import React, {FC} from "react";
import userIcon from "../../assets/images/icons/user-icon.svg";
import passwordIcon from "../../assets/images/icons/password-icon.svg";
import {signUpDataType} from "../../types/authTypes";
import {fieldErrorType} from "../../types/validationTypes";

interface IProps {
  data: signUpDataType,
  setData: React.Dispatch<React.SetStateAction<signUpDataType>>,
  usernameError: fieldErrorType,
  passwordError: fieldErrorType,
  repeatPasswordError: fieldErrorType,
  setUsernameError: React.Dispatch<React.SetStateAction<fieldErrorType>>,
  setPasswordError: React.Dispatch<React.SetStateAction<fieldErrorType>>,
  setRepeatPasswordError: React.Dispatch<React.SetStateAction<fieldErrorType>>,
}

export const SignUpForm: FC<IProps> = (
  {
    data,
    setData,
    usernameError,
    passwordError,
    repeatPasswordError,
    setUsernameError,
    setPasswordError,
    setRepeatPasswordError
  }) => {

  return (
    <div className="sign-in-container">
      <div className="sign-in-title">
        <div className="sign-in-title__text">
          Create your account
        </div>
      </div>
      <form className="sign-in-form">
        <div className="input-container">
          <img src={userIcon} alt="username" className="input-container__icon"/>
          <input value={data.username}
                 onChange={(e) => {
                   setData({...data, username: e.target.value});
                   setUsernameError({...usernameError, error: false});
                 }}
                 type="text"
                 className="input-container__text-input"
                 placeholder="User name"/>
          {usernameError.error ? (
            <div className="field-error">
              <div className="field-error__text">
                {usernameError.value}
              </div>
            </div>
          ) : null}
        </div>
        <div className="input-container">
          <img src={passwordIcon} alt="username" className="input-container__icon"/>
          <input value={data.password}
                 onChange={(e) => {
                   setData({...data, password: e.target.value});
                   setPasswordError({...passwordError, error: false});
                 }}
                 type="password"
                 className="input-container__text-input"
                 placeholder="Password"/>
          {passwordError.error ? (
            <div className="field-error">
              <div className="field-error__text">
                {passwordError.value}
              </div>
            </div>
          ) : null}
        </div>
        <div className="input-container">
          <img src={passwordIcon} alt="username" className="input-container__icon"/>
          <input value={data.repeatPassword}
                 onChange={(e) => {
                   setData({...data, repeatPassword: e.target.value});
                   setRepeatPasswordError({...repeatPasswordError, error: false});
                 }}
                 type="password"
                 className="input-container__text-input"
                 placeholder="Repeat password"/>
          {repeatPasswordError.error ? (
            <div className="field-error">
              <div className="field-error__text">
                {repeatPasswordError.value}
              </div>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
}
