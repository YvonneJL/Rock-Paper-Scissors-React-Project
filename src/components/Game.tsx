import { useEffect, useState } from "react";

const Game = () => {
  //Array, aus dem Cpu wählen kann mit Math.random()
  const allOptions = ["Rock", "Paper", "Scissors"];

  const [player, setPlayer] = useState("");
  const [cpu, setCpu] = useState("");
  const [result, setResult] = useState("");

  //headline visibility
  const [visibilityHeadline, setVisibilityHeadline] = useState<boolean>(false)

  //States für Spielstand und Runden
  const [roundsWonByPlayer, setRoundWonByPlayer] = useState(0);
  const [roundsWonByCPU, setRoundWonByCPU] = useState(0);
  const [round, setRound] = useState(0);

  //States für das Spielende
  const [gameOver, setGameOver] = useState(false); 
  const [finalResult, setFinalResult] = useState("");

  //asynchrone Funktion
  //Wahl cpu in Zwischenergebnis speichern
  //Die Auswahl vom Player durch Parameter gesetzt (eine Auswahl aus dem Array)
  const handleClick = (selection: string) => {
    //erste Zeile, (return), um die Klickfunktion zu beenden, wenn Runde 5 erreicht ist
    if (round >= 5 || gameOver) return;

    //headline
    setVisibilityHeadline(true)

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
      //setRoundWonByPlayer(roundsWonByPlayer + 1)
      setRoundWonByPlayer((prev) => {
        return prev + 1;
      });
      //setRound(round +1)
      setRound((prev) => {
        return prev + 1;
      });
    } else if (
      (selection === "Scissors" && cpuChoice === "Rock") ||
      (selection === "Paper" && cpuChoice === "Scissors") ||
      (selection === "Rock" && cpuChoice === "Paper")
    ) {
      setResult("You Lose");
      //setRoundWonByCPU(roundsWonByCPU + 1)
      setRoundWonByCPU((prev) => {
        return prev + 1;
      });
      setRound((prev) => {
        return prev + 1;
      });
    } else if (selection === cpuChoice) {
      setResult("Draw");
      setRound((prev) => {
        return prev + 1;
      });
    }

    //Spielende, damit Gesamtauswertung-->wird verzögert angezeigt
    if (round + 1 === 5) {
      setTimeout(() => {
        setGameOver(true);
      }, 1000);
    }
  };

  //useEffect, um abhängig der Dependencied im Array die Gesamtwertung anzuzeigen
  //wird aber nur ausgeführt/angezeigt ({finalResult}), wenn boolean gameOver auf true ist--> daher nur nach der 5ten Runde
  //useEffect selbst wird aber jedes Mal beim ändern der Runde und direkt am Anfang ausgeführt
  useEffect(() => {
      setFinalResult(
        roundsWonByPlayer > roundsWonByCPU
          ? "You crushed it! The machine is no match for you!"
          : roundsWonByPlayer < roundsWonByCPU
          ? "Oops! The machine outsmarted you. Better luck next time!"
          : "A stalemate! Both you and the machine are equally matched!"
      );
  }, [round]);

  //Funktion für den Reset Button
  const resetGame = () => {
    setPlayer("");
    setCpu("");
    setResult("");
    setRoundWonByCPU(0);
    setRoundWonByPlayer(0);
    setRound(0);
    setGameOver(false);
    setFinalResult("");
  };

  return (
    <>
      <section
        className={`${
          round === 0 ? "mb-40 lg-mb-20" : "mb-20 lg:mb-10"
        } flex flex-col items-center`}
      >
       {visibilityHeadline &&

        <h3 className="text-2xl lg:text-4xl my-3 tracking-wider font-semibold">First to win 3 rounds</h3>

       }
      </section>

      {!gameOver ? (
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
      ) : (
        <section className="flex flex-col items-center lg:mt-5">
          <h2 className="text-center text-2xl lg:text-2xl font-bold mb-15 lg:mb-20">
            {finalResult}
          </h2>
          <button
            onClick={resetGame}
            className="bg-[#dbaad4] py-1 lg:py-3 px-3 lg:px-10 rounded-full border-[#601154] border-2 lg:border-4 cursor-pointer mb-15"
          >
            Play Again
          </button>
        </section>
      )}

      <section className="flex flex-col gap-3 mb-5 items-center">
        <h2
          className={`${
            round === 0 ? "invisible" : ""
          } text-center text-2xl lg:text-4xl font-bold mb-7 lg:mb-2`}
        >
          Round {round}
        </h2>
        <div className="flex items-center w-30 justify-between">
          {player === allOptions[0] && (
            <img className="w-7 h-7" src="/pngaaa.com-3313783.png" alt="Rock" />
          )}
          {player === allOptions[1] && (
            <img
              className="w-7 h-7"
              src="/pngaaa.com-3313779.png"
              alt="Paper"
            />
          )}
          {player === allOptions[2] && (
            <img
              className="w-7 h-7"
              src="/pngaaa.com-3313815.png"
              alt="Paper"
            />
          )}
          <p className={`${round === 0 ? "invisible" : ""}`}>YOU:</p>
          <p className={`${round === 0 ? "invisible" : ""} font-bold`}>
            {roundsWonByPlayer}
          </p>
        </div>
        <div className="flex items-center justify-between w-30">
          {cpu === allOptions[0] && (
            <img className="w-7 h-7" src="/pngaaa.com-3313783.png" alt="Rock" />
          )}
          {cpu === allOptions[1] && (
            <img
              className="w-7 h-7"
              src="/pngaaa.com-3313779.png"
              alt="Paper"
            />
          )}
          {cpu === allOptions[2] && (
            <img
              className="w-7 h-7"
              src="/pngaaa.com-3313815.png"
              alt="Paper"
            />
          )}
          <p className={`${round === 0 ? "invisible" : ""}`}>CPU:</p>
          <p className={`${round === 0 ? "invisible" : ""} font-bold`}>
            {roundsWonByCPU}
          </p>
        </div>
        <p className="font-bold text-2xl mt-3">{result}</p>
      </section>

      {!gameOver ? (
        <button
          onClick={resetGame}
          className={`${
            round === 0 ? "invisible" : ""
          } bg-[#dbaad4] p-1 mt-10 lg:py-3 px-3 lg:px-10 rounded-full border-[#601154] border-2 lg:border-4 cursor-pointer`}
        >
          Reset
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default Game;
