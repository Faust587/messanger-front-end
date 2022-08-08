import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import "./scss/reset.scss";
import {AuthorizationPage} from "./pages/Authorization/AuthorizationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthorizationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
