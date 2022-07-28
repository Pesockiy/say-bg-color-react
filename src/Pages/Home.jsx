import React from "react";

import "./Home.css";

const Home = (props) => {

  const {
    counterSubtractHandler,
    counterAddHandler,
    clildren
  } = props;

  return (
    <>
      <div className="block">
        <span className="button" onClick={counterSubtractHandler}>
          -
        </span>
        {clildren}
        <span className="button" onClick={counterAddHandler}>
          +
        </span>
      </div>
    </>
  );
};

export default Home;
