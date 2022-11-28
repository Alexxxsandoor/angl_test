import React from "react";

const Result = (props) => {
  const { score } = props;
  return (
    <div>
      <b>score:</b>
      {score}
    </div>
  );
};

export default Result;
