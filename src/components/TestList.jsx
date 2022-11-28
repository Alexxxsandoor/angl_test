import React from "react";
import TestItem from "./TestItem";

const TestList = (props) => {
  const {
    testItem,
    score,
    setScore = Function.prototype,
    setAnswer = Function.prototype,
  } = props;

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="center">
      <div className="window">
        <h4>
          <b>{testItem.name}</b>
        </h4>
        <p>{testItem.question}</p>
        <div className="answer">
          {testItem.answers.map((el) => (
            <TestItem
              setScore={setScore}
              score={score}
              answer={el}
              key={getRandomInt(1000) + `${getRandomInt(1000)}` + new Date()}
              setAnswer={setAnswer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestList;
