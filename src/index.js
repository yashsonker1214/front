import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppState from './context/AppState'; // Import AppState

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppState> 
      <App /> {/* App is now wrapped by AppState */}
    </AppState>
  </React.StrictMode>
);

reportWebVitals();
