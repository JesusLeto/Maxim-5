import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeContext from "./context";

const Main = () => {
  console.log(JSON.parse(localStorage.getItem("Table")))
  const [TableArr, setTableArr] = useState(JSON.parse(localStorage.getItem("Table")) == null ? [[null]]: JSON.parse(localStorage.getItem("Table")))

  return(
    
    <React.StrictMode>
      <ThemeContext.Provider value = {{TableArr, setTableArr}}>
        <App />
      </ThemeContext.Provider>
  </React.StrictMode>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

