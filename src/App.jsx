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
  var guessed_quote;

  function GetRandomQuote() {
    var chosen_row = Math.floor(Math.random() * 7);
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
      <br/>
      {chosenRow}
      <br/>
      {end_screen}
      <button onClick={()=>{if(chosenRow == 0) {setEndScreen("W")} else if(chosenRow != guessed_quote) {setEndScreen("L")}}}>Michaj</button>
      <button onClick={()=>{if(chosenRow == 1) {setEndScreen("W")} else if(chosenRow != guessed_quote) {setEndScreen("L")}}}>Pio</button>
      <button onClick={()=>{if(chosenRow == 2) {setEndScreen("W")} else if(chosenRow != guessed_quote) {setEndScreen("L")}}}>Wiktor</button>
      <button onClick={()=>{if(chosenRow == 3) {setEndScreen("W")} else if(chosenRow != guessed_quote) {setEndScreen("L")}}}>Klubiś</button>
      <br/>
      <button onClick={()=>{if(chosenRow == 4) {setEndScreen("W")} else if(chosenRow != guessed_quote) {setEndScreen("L")}}}>Mbycz</button>
      <button onClick={()=>{if(chosenRow == 5) {setEndScreen("W")} else if(chosenRow != guessed_quote) {setEndScreen("L")}}}>Kubisex</button>
      <button onClick={()=>{if(chosenRow == 6) {setEndScreen("W")} else if(chosenRow != guessed_quote) {setEndScreen("L")}}}>Niedźwiedź</button>
      <button onClick={()=>{if(chosenRow == 7) {setEndScreen("W")} else if(chosenRow != guessed_quote) {setEndScreen("L")}}}>Martyna</button>
    </>
  );
}

export default App;
