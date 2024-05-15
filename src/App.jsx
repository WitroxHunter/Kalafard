import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const quote_list = ["ludzie śpią", "gradientowy jogurt istnieje", "eeeem", "lubie umięśnionych mężczyzn"];
let random_quote

function App() {
  return (
    <>
      <div className="main">
        <h1>KALAFARD</h1>
        <div className="card"></div>
        <button onClick={() => {
          GetRandomQuote();
          console.log(random_quote)
        }}>losu losu</button>
        <p>Kalafard by WitroxHunter & 7even</p>
      </div>
    </>
  );
}

function GetRandomQuote() {
  random_quote = quote_list[Math.floor(Math.random() * (quote_list.length))]
}

export default App;