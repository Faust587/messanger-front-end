import React, {FC, useState} from "react";
import {AuthInputElement} from "../../../UI/inputElement/AuthInput";
import userIcon from "../../../assets/images/icons/user-icon.svg";
import passwordIcon from "../../../assets/images/icons/password-icon.svg";

type PropsType = {
  active: boolean,
  setForm: React.Dispatch<React.SetStateAction<"sign-in" | "sign-up">>
}

export const SignInForm: FC<PropsType> = ({
    active,
    setForm,
  }) => {

  const [userErr, setUserErr] = useState<string>("");
  const [passErr, setPassErr] = useState<string>("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (active) {
      alert("EXECUTE!")
    } else {
      setForm("sign-in");
    }
  }

  return (
    <form onSubmit={submitHandler} className="sign-up-form">
      <div className="sign-up-form__title">
        Login to your account
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
          type="password"
          imageURL={passwordIcon}
          alt="password icon"
          placeholder="Password"
          error={passErr}
          value={password}
          setValue={setPassword}
        />
      </div>
      <div className="submit-container right">
        <input
          className={`submit-container__button sign-in ${active ? "active" : ""}`}
          type="submit"
          value="Sign in"
        />
      </div>
    </form>
  );
}
