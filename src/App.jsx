import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const quote_list = [
  ["Ludzie śpią", "Moi rodzice są nubkami", "eeeem"], // michaj
  ["Ej bez kitu", "To nieźle..."], // pio
  ["asd"], // wiktor
  ["NUssLL"], // klubiś
  ["NaassdULL"], // mbycz
  ["NULssssL"], // kubibex
  ["Jogurt gradientowy istnieje"], // niedzwiedz
  ["Nie rzucaj mięsem"],
]; // martyna
let random_quote;
var bools = [0, 0, 0, 0, 0, 0, 0];

function App() {
  return (
    <>
      <div className="main">
        <h1>KALAFARD</h1>
        <div className="card"></div>
        <LosuComponent />
        <p>Kalafard by WitroxHunter & 7even</p>
      </div>
    </>
  );
}

function LosuComponent() {
  const [currentQuote, setCurrentQuote] = useState("");
  const [chosenRow, setChosenRow] = useState("");

  function GetRandomQuote() {
    var chosen_row = Math.floor(Math.random() * 6);
    setChosenRow(chosen_row);
    random_quote =
      quote_list[chosen_row][
        Math.floor(Math.random() * quote_list[chosen_row].length)
      ];
    bools[chosen_row] = 1;
    setCurrentQuote(random_quote);
  }

  return (
    <>
      <button
        onClick={() => {
          GetRandomQuote();
          console.log(random_quote);
        }}
      >
        Losuj quote
      </button>
      {currentQuote}
      <br />
      {chosenRow}
    </>
  );
}

export default App;
