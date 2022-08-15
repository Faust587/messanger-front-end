import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import "./scss/reset.scss";
import {AuthPage} from "./pages/AuthPage";
import {ActivationSuccess} from "./pages/EmailActivation/ActivationSuccess";
import {ActivationFail} from "./pages/EmailActivation/ActivationFail";
import {useAuthorization} from "./hooks/useAuthorization";
import {HomeLayout} from "./layout/HomeLayout";

function App() {
  const authResult = useAuthorization();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={authResult ? <HomeLayout /> : <AuthPage />} />
        <Route path="/authorization" element={<AuthPage />} />
        <Route path="/activation-success" element={<ActivationSuccess />} />
        <Route path="/activation-fail" element={<ActivationFail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
