import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // O Router deve estar aqui
import App from "./App";
import { FormProvider } from "./pages/context/FormContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FormProvider>
  </React.StrictMode>
);