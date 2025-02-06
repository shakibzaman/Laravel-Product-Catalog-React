import React from "react";
import ReactDOM from "react-dom/client";
import "../css/app.css";
import App from "./app";

document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("app");

    if (rootElement) {
        ReactDOM.createRoot(rootElement).render(<App />);
    } else {
        console.error("Root element not found!");
    }
});
