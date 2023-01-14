import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const JuzComponent = ({ counts }) => {
  return (
    <Wrapper>
      <Link to={`/surahByJuz/${counts}`}>
        <div>
          juz <span>{counts}</span>
        </div>
      </Link>
    </Wrapper>
  );
};

export default JuzComponent;

const Wrapper = styled.div`
  list-style: none;
  border: 1px solid;
  border-radius: 4px;
  height: 60px;
  box-shadow: 4px 0px 5px 0px;
  max-width: auto;
  div {
    display: flex;
    gap: 10px;
    font-size: 14px;
    padding: 20px 4px 2px;
    justify-content: center;
    color: ${(props) => props.theme.color};
    cursor: pointer;
  }
  :hover {
    box-shadow: 0px 4px 5px 0px;
  }
`;
