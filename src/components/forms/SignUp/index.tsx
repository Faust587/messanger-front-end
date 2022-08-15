import React, {FC, useState} from "react";
import "../styles.scss";
import userIcon from "../../../assets/images/icons/user-icon.svg";
import passwordIcon from "../../../assets/images/icons/password-icon.svg";
import emailIcon from "../../../assets/images/icons/email-icon.svg";

import {fields} from "../../../const/validation";
import {AuthInputElement} from "../../../UI/inputElement/AuthInput";
import {signUpValidation} from "../../../utils/authValidation";
import {errorType, validationResultType} from "../../../types/validationTypes";
import axios from "axios";

type PropsType = {
  active: boolean,
  setForm: React.Dispatch<React.SetStateAction<"sign-in" | "sign-up">>
}

export const SignUpForm: FC<PropsType> = ({
    active,
    setForm,
  }) => {

  const [userErr, setUserErr] = useState<string>("");
  const [emailErr, setEmailErr] = useState<string>("");
  const [passwordErr, setPasswordErr] = useState<string>("");
  const [repeatPasswordErr, setRepeatPasswordErr] = useState<string>("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const setFieldError = (errors: errorType[]) => {
    errors.forEach(({field, value}) => {
      switch (field) {
        case fields.USERNAME_FIELD: {
          setUserErr(value);
          break;
        }
        case fields.PASSWORD_FIELD: {
          setPasswordErr(value);
          break;
        }
        case fields.REPEAT_PASSWORD_FIELD: {
          setRepeatPasswordErr(value);
          break;
        }
        case fields.EMAIL_FIELD: {
          setEmailErr(value);
          break;
        }
      }
    })
  }

  const submitHandler = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (!active) {
      setForm("sign-up");
      return;
    }

    const validationResult: validationResultType = signUpValidation(username, email, password, repeatPassword);
    if (validationResult.result) {
      const userData = {
        username,
        password,
        email
      }
      axios.post(`${process.env.REACT_APP_API_URL}/auth/sign-up`, userData)
        .then(data => {
          alert("SUCCESS");
        })
        .catch((error: any) => {
          const {status, data} = error.response;
          if (status === 422) {
            setFieldError(data);
          } else {
            alert("SERVER ERROR")
          }
        });
    } else {
      setFieldError(validationResult.errors);
    }
  }

  return (
    <form onSubmit={submitHandler} className="sign-up-form">
      <div className="sign-up-form__title">
        Create your account
      </div>
      <div className="sign-up-form__input-container">
        <AuthInputElement
          type="text"
          imageURL={userIcon}
          alt="username icon"
          placeholder="User name"
          error={userErr}
          value={username}
          setValue={setUsername}
        />
      </div>
      <div className="sign-up-form__input-container">
        <AuthInputElement
          type="text"
          imageURL={emailIcon}
          alt="email icon"
          placeholder="Email"
          error={emailErr}
          value={email}
          setValue={setEmail}
        />
      </div>
      <div className="sign-up-form__input-container">
        <AuthInputElement
          type="password"
          imageURL={passwordIcon}
          alt="password icon"
          placeholder="Password"
          error={passwordErr}
          value={password}
          setValue={setPassword}
        />
      </div>
      <div className="sign-up-form__input-container">
        <AuthInputElement
          type="password"
          imageURL={passwordIcon}
          alt="password icon"
          placeholder="Repeat password"
          error={repeatPasswordErr}
          value={repeatPassword}
          setValue={setRepeatPassword}
        />
      </div>
      <div className="submit-container left">
        <input
          className={`submit-container__button sign-up ${active ? "active" : ""}`}
          type="submit"
          value="Sign up"
        />
      </div>
    </form>
  );
}
