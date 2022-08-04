import React from "react";
import {InformationBlock} from "../../components/informationBlock/InformationBlock";
import {SignInForm} from "../../components/SignInForm/SignInForm";
import "./Authorization.scss";

export const SignInPage = () => {

  return (
    <div className="authorization-container">
      <InformationBlock />
      <SignInForm />
    </div>
  );
}
