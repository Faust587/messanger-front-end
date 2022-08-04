import React from "react";
import userIcon from "../../assets/images/icons/user-icon.svg";
import passwordIcon from "../../assets/images/icons/password-icon.svg";
import {useState} from "react";

export const SignInForm = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSignInSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mockErrorResponse = "Password is incorrect!";
    if (error !== mockErrorResponse) {
      setError(mockErrorResponse);
    }
  }

  return (
    <div className="sign-in-container">
      <div className="sign-in-title">
        <div className="sign-in-title__text">
          Login to your account
        </div>
        {
          error !== "" ? (
            <div className="error-container">
              <div className="error-container__text-repeat-error">
                {error}
              </div>
            </div>
          ) : null
        }
      </div>
      <form onSubmit={handleSignInSubmit} className="sign-in-form">
        <div className="input-container">
          <img src={userIcon} alt="username" className="input-container__icon"/>
          <input value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 type="text"
                 className="input-container__text-input"
                 placeholder="User name"/>
        </div>
        <div className="input-container">
          <img src={passwordIcon} alt="username" className="input-container__icon"/>
          <input value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 type="password"
                 className="input-container__text-input"
                 placeholder="Password"/>
        </div>
        <div className="submit-container">
          <input type="submit" value="LOGIN" className="submit-container__button"/>
          <div className="link">
            <a href="/sign-up" className="link__to-sign-up">Don't have an account?</a>
          </div>
        </div>
      </form>
    </div>
  );
}
