import { useState } from "react";

const Game = () => {
  //Array, aus dem Cpu wählen kann mit Math.random()
  const allOptions = ["Rock", "Paper", "Scissors"];

  const [player, setPlayer] = useState("");
  const [cpu, setCpu] = useState("");
  const [result, setResult] = useState("");

  // cpu und player wählen
  // cpu wird in Zwischenergebnis gespeichert, damit die Bedingungen zur richtigen Zeit "berechnet" werden
  const handleClick = (selection: string) => {
    setPlayer(selection);
    const cpuChoice = allOptions[Math.floor(Math.random() * 3)];
    setCpu(cpuChoice);

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
    setPlayer("")
    setCpu("")
    setResult("")
  }

  return (
    <>
      <section className="flex flex-col items-center mb-30 lg:mb-10">
        <h1 className="text-2xl lg:text-6xl my-5">{allOptions[0]} {allOptions[1]} {allOptions[2]}</h1>
        <h3 className="lg:text-3xl">Choose your weapon</h3>
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
      <section className="flex flex-col gap-3 mb-10 lg:mb-10 items-center">
        <p>Player: {player}</p>
        <p>CPU: {cpu}</p>
        <p className="font-bold text-2xl">{result}</p>
      </section>
   
     <button onClick={resetGame} className="bg-[#fbde56] py-3 px-10 rounded-full border-[#601154] border-4 cursor-pointer">
        Reset
      </button>

    </>
  );
};

export default Game;
