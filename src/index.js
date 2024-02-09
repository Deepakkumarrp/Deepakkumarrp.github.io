// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import ThemeContextProvider from './contexts/ThemeContext'


// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// ReactDOM.render(
//     <ThemeContextProvider>
//       <App />
//     </ThemeContextProvider>,
//   document.getElementById('root')
// );


// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
