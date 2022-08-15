import "./styles.scss";
import {useState} from "react";
import {AuthTitle} from "../../components/AuthTitle";
import {SignUpForm} from "../../components/forms/SignUp";
import {SignInForm} from "../../components/forms/SignIn";

export const AuthPage = () => {

  const [openedForm, setOpenedForm] = useState<"sign-in" | "sign-up">("sign-up");

  return (
    <div className="auth-page-container">
      <SignUpForm setForm={setOpenedForm} active={openedForm === "sign-up"} />
      <SignInForm setForm={setOpenedForm} active={openedForm === "sign-in"} />
      <AuthTitle openedForm={openedForm} />
    </div>
  );
}
