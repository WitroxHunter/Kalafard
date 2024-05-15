import { useState } from "react";
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
  let random_quote;

  function GetRandomQuote() {
    var chosen_row = Math.floor(Math.random() * 6);
    setChosenRow(chosen_row);
    random_quote =
      quote_list[chosen_row][
        Math.floor(Math.random() * quote_list[chosen_row].length)
      ];

    setCurrentQuote(random_quote);
  }

  return (
    <>
      <button onClick={GetRandomQuote}>Losuj quote!</button>
      {currentQuote}
      <br />
      {chosenRow}
    </>
  );
}

export default App;
