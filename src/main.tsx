import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/assets/style/global.css";
import "@/lang/i18n";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      draggable
      pauseOnHover
      theme="dark"
    />
  </React.StrictMode>
);
