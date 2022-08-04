import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {SignInPage} from "./pages/SignInPage/SignInPage";
import "./scss/reset.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/sign-up" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
