import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css"; // Pastikan file styles.css ada jika diimpor

// Cari elemen root dari file public/index.html
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "Root element not found. Ensure there is a <div id='root'></div> in index.html."
  );
}

const root = ReactDOM.createRoot(rootElement);

// Render aplikasi React
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
