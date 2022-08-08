import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import "./scss/reset.scss";
import {AuthorizationPage} from "./pages/Authorization/AuthorizationPage";
import {AuthInputElement} from "./UI/inputElement/AuthInput";
import userIcon from "./assets/images/icons/user-icon.svg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthorizationPage />} />
      </Routes>
    </BrowserRouter>
    //<AuthInputElement type={"text"} alt="user logo" imageURL={userIcon} placeholder="Username" />
  );
}

export default App;
