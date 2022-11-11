import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider/StateProvider';
import reducer, {initialState} from "./StateProvider/Reducer"
// import StateProvider from Stateprovider.jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // import initialState and reducer form Reducer.jsx
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
          <App />
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

