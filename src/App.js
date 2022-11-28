import { useEffect, useState, react } from "react";

import { EASY_DB } from "./BD/DB_EASY";
import { MEDIUM_DB } from "./BD/DB_MEDIUM";
import { HARD_DB } from "./BD/DB_HARD";

import TestList from "./components/TestList";
import Result from "./components/Result";

function App() {
  const maxLvl = (EASY_DB.length + MEDIUM_DB.length + HARD_DB.length) / 3;

  const [easyID, setEasyID] = useState(0);
  const [mediumID, setMediumID] = useState(0);
  const [hardID, setHardID] = useState(0);

  const [lvl, setLvl] = useState("easy"); //easy, medium, hard

  const [allAnswers, setAllAnswers] = useState([]);

  const [test, setTest] = useState(EASY_DB[easyID]);

  const [answer, setAnswer] = useState({ ans: "", type: null });

  const [score, setScore] = useState(0);
  const [numberQ, setNumberQ] = useState(0);

  //увеличение уровня
  const choiceDifficultiesPlus = () => {
    if (lvl === "easy") setLvl("medium");
    else if (lvl === "medium") setLvl("hard");
    else setLvl("hard");
  };

  //уменьшение уровня
  const choiceDifficultiesMinus = () => {
    if (lvl === "hard") setLvl("medium");
    else if (lvl === "medium") setLvl("easy");
    else setLvl("easy");
  };

  //проверка при 2 ответах количество увеличивать или уменьшать
  const checkLvlAmount = () => {
    if (allAnswers[0] === true && allAnswers[1] === true) {
      choiceDifficultiesPlus();
    } else if (allAnswers[0] === true || allAnswers[1] === true) {
    } else {
      choiceDifficultiesMinus();
    }
    setAllAnswers([]);
  };

  //запись ответов + смена уровня
  useEffect(() => {
    if (lvl === "easy") {
      setEasyID(easyID + 1);
      setTest(EASY_DB[easyID]);
    } else if (lvl === "medium") {
      setMediumID(mediumID + 1);
      setTest(MEDIUM_DB[mediumID]);
    } else {
      setHardID(hardID + 1);
      setTest(HARD_DB[hardID]);
    }
    setAllAnswers([...allAnswers, answer.type]);

    setNumberQ(numberQ + 1);
  }, [answer]);
  useEffect(() => {
    if (allAnswers[0] === null) setAllAnswers([]);
    if (allAnswers.length === 2) checkLvlAmount();
  }, [allAnswers]);

  return (
    <div className="App">
      <div className="center">
        <b>
          №{numberQ}/{maxLvl}
        </b>
      </div>

      {numberQ >= maxLvl ? (
        <div className="center">
          <Result score={score} />
          <br />
          <p>
            <b>easy: </b>
            {easyID + 1} tests
          </p>

          <p>
            <b>medium: </b>
            {mediumID + 1} tests
          </p>
          <p>
            <b>hard: </b>
            {hardID + 1} tests
          </p>
        </div>
      ) : (
        <TestList
          testItem={test}
          setAnswer={setAnswer}
          setScore={setScore}
          score={score}
        />
      )}
    </div>
  );
}

export default App;
