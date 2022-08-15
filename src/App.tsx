import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import "./scss/reset.scss";
import {AuthPage} from "./pages/AuthPage";
import {ActivationSuccess} from "./pages/EmailActivation/ActivationSuccess";
import {ActivationFail} from "./pages/EmailActivation/ActivationFail";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/activation-success" element={<ActivationSuccess />} />
        <Route path="/activation-fail" element={<ActivationFail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
