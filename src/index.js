import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";
import { BasketProvider } from "./context/BasketContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BasketProvider>
          <ScrollToTop />
          <App />
        </BasketProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
