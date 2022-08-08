import React, {FC} from "react";
import userIcon from "../../assets/images/icons/user-icon.svg";
import passwordIcon from "../../assets/images/icons/password-icon.svg";
import {signInDataType} from "../../types/authTypes";
import {fieldErrorType} from "../../types/validationTypes";

interface IProps {
  data: signInDataType,
  setData: React.Dispatch<React.SetStateAction<signInDataType>>,
  usernameError: fieldErrorType,
  passwordError: fieldErrorType,
  setUsernameError: React.Dispatch<React.SetStateAction<fieldErrorType>>,
  setPasswordError: React.Dispatch<React.SetStateAction<fieldErrorType>>
}

export const SignInForm: FC<IProps> = (
  {
    data,
    setData,
    usernameError,
    passwordError,
    setUsernameError,
    setPasswordError
  }) => {

  return (
    <div className="sign-in-container">
      <div className="sign-in-title">
        <div className="sign-in-title__text">
          Login to your account
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
          {
            usernameError.error ? (
              <div className="field-error">
                <div className="field-error__text">
                  {usernameError.value}
                </div>
              </div>
            ) : null
          }
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
          {
            passwordError.error ? (
              <div className="field-error">
                <div className="field-error__text">
                  {passwordError.value}
                </div>
              </div>
            ) : null
          }
        </div>
      </form>
    </div>
  );
}
