import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const quote_list = ["ludzie śpią", "gradientowy jogurt istnieje", "eeeem", "lubie umięśnionych mężczyzn"];

function App() {

  let chosen_quote = quote_list[Math.floor(Math.random() * (quote_list.length))]

  return (
    <>
      <div className="main">
        <h1>KALAFARD</h1>
        <div className="card"></div>
        <button>losu losu</button>
        <p>Kalafard by WitroxHunter & 7even {chosen_quote}</p>
      </div>
    </>
  );
}

function GetRandomQuote() {
  let random_quote = quote_list[Math.floor(Math.random() * (quote_list.length))]
  return (random_quote)
}

export default App;
