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

let pool = [];
let last_chosen_quote;

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

function CheckQuoteListLen() {
  let list_len = 0;
  for(let i = 0; i <= 7; i++) {
    for(let a = 0; a < quote_list[i].length; a++){
      list_len++;
    }
  }

  return(list_len)
}

function CheckIfInArray(arrayA, elementA) {
  let is_in_array = 0;

  for(let i = 0; i <= arrayA.length; i++) {
    if(elementA == arrayA[i]) {
      is_in_array = 1;
    }
  }

  return(is_in_array)
}

function LosuComponent() {
  const [currentQuote, setCurrentQuote] = useState("");
  const [chosenRow, setChosenRow] = useState("");
  const [end_screen, setEndScreen] = useState("");
  const [quotes_left, setQuotesLeft] = useState("");

  let random_quote;

  function GetRandomQuote() {
    setEndScreen("")
    var chosen_row = Math.floor(Math.random() * 8);
    setChosenRow(chosen_row);
    random_quote =
      quote_list[chosen_row][
        Math.floor(Math.random() * quote_list[chosen_row].length)
      ];

    //Nie powtarza się
    if(CheckIfInArray(pool, random_quote) == 0) {
      if(last_chosen_quote != random_quote) {
        setCurrentQuote(random_quote);
        last_chosen_quote = random_quote;
        pool.push(random_quote);
        setQuotesLeft(CheckQuoteListLen() - pool.length)
      } else if(last_chosen_quote == random_quote){
        GetRandomQuote();
      }
    } else if(CheckIfInArray(pool, random_quote) != 0 && pool.length != CheckQuoteListLen()) {
      GetRandomQuote();
    } else if(pool.length == CheckQuoteListLen()) {
      setCurrentQuote("Nie ma więcej cytatów")
    }
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
      <br />
      {quotes_left}
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
