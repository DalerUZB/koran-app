import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Surah = ({
  number,
  englishName,
  englishNameTranslation,
  numberOfAyahs,
  name,
}) => {
  return (
    <Link to={`/surahname/${number}`}>
      <Component>
        <span className="wrapperLead">
          <p>
            {number}. {englishName} ({englishNameTranslation})
          </p>
          <p>{numberOfAyahs} Ayahs</p>
        </span>
        <span className="wrapperArabicLead">
          <p>{name}</p>
        </span>
      </Component>
    </Link>
  );
};

export default Surah;
const Component = styled.div`
  width: 100%;
  min-height: 100px;
  max-height: auto;
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.color};
  .wrapperLead {
    text-align: left;
  }
  .wrapperArabicLead {
    text-align: right;
    font-family: "Kitab";
    font-size: 16px;
    margin-right: 4px;
  }
`;
