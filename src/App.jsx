import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// michaj
// pio
// wiktor
// klubiś
// mbycz
// kubibex
// niedzwiedz
// martyna

const quote_list = 
[["Ludzie śpią", "Moi rodzice są nubkami", "eeeem"],
["Ej bez kitu", "To nieźle..."], 
[], 
[], 
[], 
[], 
["Jogurt gradientowy istnieje"], 
["Nie rzucaj mięsem"]]

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

export default App