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
  ["Nie rzucaj mięsem"], // martyna
];

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
  const [end_screen, setEndScreen] = useState("");

  let random_quote;

  function GetRandomQuote() {
    var chosen_row = Math.floor(Math.random() * 7);
    setChosenRow(chosen_row);
    random_quote =
      quote_list[chosen_row][
        Math.floor(Math.random() * quote_list[chosen_row].length)
      ];

    setCurrentQuote(random_quote);
  }

  function CheckGussedQuote(a) {
    if(chosenRow == a) {setEndScreen("W")} 
    else if(chosenRow != a) {setEndScreen("L")}
  }

  return (
    <>
      <button onClick={GetRandomQuote}>Losuj quote!</button>
      {currentQuote}
      <br/>
      {chosenRow}
      <br/>
      {end_screen}
      <button onClick={()=>{CheckGussedQuote(0)}}>Michaj</button>
      <button onClick={()=>{CheckGussedQuote(1)}}>Pio</button>
      <button onClick={()=>{CheckGussedQuote(2)}}>Wiktor</button>
      <button onClick={()=>{CheckGussedQuote(3)}}>Klubiś</button>
      <br/>
      <button onClick={()=>{CheckGussedQuote(4)}}>Mbycz</button>
      <button onClick={()=>{CheckGussedQuote(5)}}>Kubisex</button>
      <button onClick={()=>{CheckGussedQuote(6)}}>Niedźwiedź</button>
      <button onClick={()=>{CheckGussedQuote(7)}}>Martyna</button>
    </>
  );
}

export default App;
