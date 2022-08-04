import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {SignInPage} from "./pages/Authorization/SignInPage";
import {SignUpPage} from "./pages/Authorization/SignUpPage";
import "./scss/reset.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
