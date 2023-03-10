import React from "react";
import { ArabicNumbers } from "react-native-arabic-numbers";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchSuraAudio } from "../store/action";

const ComponentSuraForReed = ({
  text,
  showTransationQuranUZB,
  numberInSurah,
  number,
  setNumberForSec,
  index,
}) => {
  const dispatch = useDispatch();

  const tapFunc = (param, e) => {
    dispatch(fetchSuraAudio(param));
    setNumberForSec(param);
  };
  return (
    <CoponentSuraForReed
      onClick={(e) => tapFunc(number, e)}
      className="parentText"
      variant={showTransationQuranUZB}
    >
      <span variant={showTransationQuranUZB.toString()} className="text">
        {text}
      </span>
      <i className="Span-number">
        {showTransationQuranUZB ? numberInSurah : ArabicNumbers(numberInSurah)}
      </i>
    </CoponentSuraForReed>
  );
};

export default ComponentSuraForReed;

const CoponentSuraForReed = styled.div`
  max-width: 100%;
  min-height: 60px;
  max-height: auto;
  border-radius: 8px;
  margin: 8px auto 8px;
  border: 2px solid;
  background-color: ${(props) => props.theme.backgrounColor};
  color: ${(props) => props.theme.color};
  text-align: ${(props) => (props.variant ? "left" : "right")};
  padding: 30px;
  &:active {
    opacity: 0.5;
    background-color: #444;
    color: #ffff;
  }
  .Span-number {
    margin-top: 10px;
    max-width: 60px;
    height: auto;
    background-color: ${({ theme }) => theme.color};
    text-align: center;
    color: ${({ theme }) => theme.backgrounColor};
    border-radius: 4px;
    display: block;
    font-size: 24px;
  }
  .text {
    font-size: ${(props) => (props.variant ? "20px" : "38px")};
    word-wrap: break-word;
    font-family: ${({ variant }) =>
      variant ? "Segoe UI" : "Amiri Quran , Kitab"};
  }
`;
