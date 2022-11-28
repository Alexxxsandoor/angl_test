import React from "react";

const TestItem = (props) => {
  const {
    answer,
    score,
    setScore = Function.prototype,
    setAnswer = Function.prototype,
  } = props;

  const handleChange = (a, t) => {
    setAnswer({ ans: a, type: t });
    answer.id ? setScore(score + answer.grade) : setScore(score);
  };

  return (
    <div className="answerCheck">
      <button
        type="radio"
        name="testing"
        id={answer.answer}
        value={answer.id}
        onClick={() => handleChange(answer.answer, answer.id)}
      >
        {answer.id ? 1 : 0}
      </button>
      <div from={answer.answer}>{answer.answer}</div>
    </div>
  );
};

export default TestItem;
