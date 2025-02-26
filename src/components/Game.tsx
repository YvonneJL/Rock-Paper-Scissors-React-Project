import { useState } from "react";

const Game = () => {
  //Array, aus dem Cpu wählen kann mit Math.random()
  const allOptions = ["Rock", "Paper", "Scissors"];

  const [player, setPlayer] = useState("");
  const [cpu, setCpu] = useState("");
  const [result, setResult] = useState("");

  //asynchrone Funktion
  //Wahl cpu in Zwischenergebnis speichern
  //Die Auswahl vom Player durch Parameter gesetzt (eine Auswahl aus dem Array)
  const handleClick = (selection: string) => {
    setPlayer(selection);
    const cpuChoice = allOptions[Math.floor(Math.random() * 3)];
    setCpu(cpuChoice);
    //Bedingungen für Ergebnis
    if (
      (selection === "Scissors" && cpuChoice === "Paper") ||
      (selection === "Paper" && cpuChoice === "Rock") ||
      (selection === "Rock" && cpuChoice === "Scissors")
    ) {
      setResult("You Win");
    } else if (
      (selection === "Scissors" && cpuChoice === "Rock") ||
      (selection === "Paper" && cpuChoice === "Scissors") ||
      (selection === "Rock" && cpuChoice === "Paper")
    ) {
      setResult("You Lose");
    } else if (selection === cpuChoice) {
      setResult("Draw");
    }
  };

  //Funktion für den Reset Button
  const resetGame = () => {
    setPlayer("");
    setCpu("");
    setResult("");
  };

  return (
    <>
      <section className="flex flex-col items-center mb-30 lg:mb-10">
        <h1 className="text-2xl lg:text-6xl my-5">
          {allOptions[0]} {allOptions[1]} {allOptions[2]}
        </h1>
        <h3 className="lg:text-3xl">Click to choose</h3>
      </section>
      <section>
        <div className="flex gap-10 mb-20 lg:mb-10">
          <figure
            onClick={() => handleClick(allOptions[0])}
            className="cursor-pointer w-20 lg:w-50 flex flex-col items-center lg:gap-3"
          >
            <img src="/pngaaa.com-3313783.png" alt="Rock" />
            <figcaption className="lg:text-2xl">{allOptions[0]}</figcaption>
          </figure>
          <figure
            onClick={() => handleClick(allOptions[1])}
            className="cursor-pointer w-20 lg:w-50 flex flex-col items-center lg:gap-3"
          >
            <img src="/pngaaa.com-3313779.png" alt="Paper" />
            <figcaption className="lg:text-2xl">{allOptions[1]}</figcaption>
          </figure>
          <figure
            onClick={() => handleClick(allOptions[2])}
            className="cursor-pointer w-20 lg:w-50 flex flex-col items-center lg:gap-3"
          >
            <img src="/pngaaa.com-3313815.png" alt="Scissors" />
            <figcaption className="lg:text-2xl">{allOptions[2]}</figcaption>
          </figure>
        </div>
      </section>
      <section className="flex flex-col gap-3 mb-5 items-center">
        <div className="flex items-center gap-2">
        <p>Player:</p>
        {player === allOptions[0] && <img className="w-7 h-7" src="/pngaaa.com-3313783.png" alt="Rock" />}
        {player === allOptions[1] && <img className="w-7 h-7" src="/pngaaa.com-3313779.png" alt="Paper" />}
        {player === allOptions[2] && <img className="w-7 h-7" src="/pngaaa.com-3313815.png" alt="Paper" />}
        </div>
       <div className="flex items-center gap-5">
       <p>CPU:</p>
       {cpu === allOptions[0] && <img className="w-7 h-7" src="/pngaaa.com-3313783.png" alt="Rock" />}
       {cpu === allOptions[1] && <img className="w-7 h-7" src="/pngaaa.com-3313779.png" alt="Paper" />}
       {cpu === allOptions[2] && <img className="w-7 h-7" src="/pngaaa.com-3313815.png" alt="Paper" />}
       </div>
        <p className="font-bold text-2xl mt-3">{result}</p>
      </section>

      <button
        onClick={resetGame}
        className="bg-[#fbde56] py-1 lg:py-3 px-3 lg:px-10 rounded-full border-[#601154] border-2 lg:border-4 cursor-pointer"
      >
        Reset
      </button>
    </>
  );
};

export default Game;
