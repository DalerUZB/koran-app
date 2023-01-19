import React from "react";
import styled from "styled-components";
import JuzComponent from "../Components/JuzComponent";

const Juz = () => {
  let counter = [];

  function settingsCounter() {
    for (let i = 1; i <= 30; i++) {
      counter.push({ counts: i });
    }
  }
  settingsCounter();

  return (
    <Wrapper>
      <div className="container">
        {counter.map((count) => (
          <JuzComponent key={count.counts} {...count} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Juz;

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 70.3px);
  max-height: auto;
  background-color: ${(props) => props.theme.backgrounColor};
  padding-top: 5%;
  text-align: center;
  .container {
    width: 90%;
    height: 50%;
    min-height: 200px;
    max-height: auto;
    background-color: ${(props) => props.theme.backgrounColor};
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    padding: 10px;
  }
`;
