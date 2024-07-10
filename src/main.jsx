import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { PortfolioContextProvider } from "./Context/PortfolioContext"
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PortfolioContextProvider>
      <App></App>
    </PortfolioContextProvider>    
  </React.StrictMode>
);