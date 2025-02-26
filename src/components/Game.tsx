import { useState } from "react";

const Game = () => {
  //Array, aus dem Cpu wählen kann mit Math.random()
  const allOptions = ["Rock", "Paper", "Scissors"];

  const [player, setPlayer] = useState("");
  const [cpu, setCpu] = useState("");
  const [result, setResult] = useState("");

  //States für Spielstand und Runden
  const [roundsWonByPlayer, setRoundWonByPlayer] = useState(0)
  const [roundsWonByCPU, setRoundWonByCPU] = useState(0)
  const [round, setRound] = useState(0)

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
      setRoundWonByPlayer(roundsWonByPlayer + 1)
      setRound(round +1)
    } else if (
      (selection === "Scissors" && cpuChoice === "Rock") ||
      (selection === "Paper" && cpuChoice === "Scissors") ||
      (selection === "Rock" && cpuChoice === "Paper")
    ) {
      setResult("You Lose");
      setRoundWonByCPU(roundsWonByCPU + 1)
      setRound(round +1)
    } else if (selection === cpuChoice) {
      setResult("Draw");
      setRound(round +1)
    }
  };

  //Funktion für den Reset Button
  const resetGame = () => {
    setPlayer("");
    setCpu("");
    setResult("");
    setRoundWonByCPU(0);
    setRoundWonByPlayer(0);
    setRound(0);
  };

  return (
    <>
      <section className="flex flex-col items-center mb-30 lg:mb-10">
        <h1 className="text-2xl lg:text-6xl my-2">
          {allOptions[0]} {allOptions[1]} {allOptions[2]}
        </h1>
        <h3 className="lg:text-2xl">Click to choose</h3>
      </section>
      <section>
        <div className="flex gap-10 mb-15 lg:mb-10">
          <figure
            onClick={() => handleClick(allOptions[0])}
            className="cursor-pointer w-20 lg:w-35 flex flex-col items-center lg:gap-3 transition-transform duration-500 ease-in-out transform hover:scale-125"
          >
            <img src="/pngaaa.com-3313783.png" alt="Rock" />
            <figcaption className="lg:text-2xl">{allOptions[0]}</figcaption>
          </figure>
          <figure
            onClick={() => handleClick(allOptions[1])}
            className="cursor-pointer w-20 lg:w-35 flex flex-col items-center lg:gap-3 transition-transform duration-500 ease-in-out transform hover:scale-125"
          >
            <img src="/pngaaa.com-3313779.png" alt="Paper" />
            <figcaption className="lg:text-2xl">{allOptions[1]}</figcaption>
          </figure>
          <figure
            onClick={() => handleClick(allOptions[2])}
            className="cursor-pointer w-20 lg:w-35 flex flex-col items-center lg:gap-3 transition-transform duration-500 ease-in-out transform hover:scale-125"
          >
            <img src="/pngaaa.com-3313815.png" alt="Scissors" />
            <figcaption className="lg:text-2xl">{allOptions[2]}</figcaption>
          </figure>
        </div>
      </section>
      <section className="flex flex-col gap-3 mb-5 items-center">
      <h2 className={`${round === 0 ? "invisible": ""} text-center text-2xl lg:text-4xl font-bold mb-7 lg:mb-2`}>Round {round}</h2>
        <div className="flex items-center w-30 justify-between">
        {player === allOptions[0] && <img className="w-7 h-7" src="/pngaaa.com-3313783.png" alt="Rock" />}
        {player === allOptions[1] && <img className="w-7 h-7" src="/pngaaa.com-3313779.png" alt="Paper" />}
        {player === allOptions[2] && <img className="w-7 h-7" src="/pngaaa.com-3313815.png" alt="Paper" />}
        <p>YOU:</p>
        <p className={`${round === 0 ? "invisible": ""} font-bold`}>{roundsWonByPlayer}</p>
        </div>
       <div className="flex items-center justify-between w-30">
       {cpu === allOptions[0] && <img className="w-7 h-7" src="/pngaaa.com-3313783.png" alt="Rock" />}
       {cpu === allOptions[1] && <img className="w-7 h-7" src="/pngaaa.com-3313779.png" alt="Paper" />}
       {cpu === allOptions[2] && <img className="w-7 h-7" src="/pngaaa.com-3313815.png" alt="Paper" />}
       <p>CPU:</p>
       <p className={`${round === 0 ? "invisible": ""} font-bold`}>{roundsWonByCPU}</p>
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
