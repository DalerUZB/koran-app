import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchJuz, fetchJuzUZB } from "../store/action";
import { ArabicNumbers } from "react-native-arabic-numbers";
import { ClassicSpinner } from "react-spinners-kit";

const JuzReed = () => {
  const [showTranslate, setShowTranslate] = useState(false);
  let objAll = [];
  const { juz, juzUZ, loading } = useSelector((store) => store.reducer);
  const dispatch = useDispatch();
  const { idJuz } = useParams();
  useState(() => {
    dispatch(fetchJuz(idJuz));
    dispatch(fetchJuzUZB(idJuz));
  }, []);

  if (juz.ayahs) {
    for (const iterator of showTranslate ? juzUZ.ayahs : juz.ayahs) {
      objAll.push({
        text: iterator.text,
        number: iterator.number,
        numberInSurah: iterator.numberInSurah,
      });
    }
  }
  
  return (
    <Wrapper>
      {loading ? (
        <div className="spinnerDiv">
          <ClassicSpinner size={50} color="#686769" loading={true} />
        </div>
      ) : (
        <div className="container">
          {objAll?.map((item) => (
            <JuzComponents key={item.number} variant={showTranslate}>
              <span>{item.text}</span>
              <span className="Span-number">
                {showTranslate
                  ? item.numberInSurah
                  : ArabicNumbers(item.numberInSurah)}
              </span>
            </JuzComponents>
          ))}
        </div>
      )}
      {!loading && (
        <Footer>
          <div>
            <span className="language">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                onClick={({ target }) => setShowTranslate(target.checked)}
              />
              <label htmlFor="vehicle1">Translat</label>
            </span>
          </div>
          <div>
            <audio controls className="audio">
              <source src="horse.ogg" type="audio/ogg" />
              <source src="horse.mp3" type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        </Footer>
      )}
    </Wrapper>
  );
};

export default JuzReed;

const Wrapper = styled.div`
  max-width: 100%;
  height: 89.1vh;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .spinnerDiv {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .container {
    width: 100%;
    overflow: scroll;
    height: auto;
    border: 1px solid;
  }
`;

const JuzComponents = styled.p`
  box-shadow: 0px 0px 10px 2px;
  padding: 30px;
  text-align: right;
  font-size: ${({ variant }) => (variant ? "20px" : "30px")};
  text-align: ${(props) => (props.variant ? "left" : "right")};
  font-family: ${({ variant }) =>
    variant ? "Segoe UI" : "Amiri Quran, Kitab "};
  .Span-number {
    max-width: 60px;
    height: auto;
    background-color: ${({ theme }) => theme.color};
    text-align: center;
    color: ${({ theme }) => theme.backgrounColor};
    border-radius: 4px;
    font-size: 24px;
    display: block;
  }
`;

const Footer = styled.div`
  border: 1px solid;
  width: 100%;
  height: 100%;
  min-height: 11.6%;
  border: 1px solid;
  display: flex;
  justify-content: space-around;
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 12px;
  }
  .language {
    min-height: 10px;
    max-height: auto;
  }
  .audio {
    width: 188px;
  }
  .iconBack {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .big {
      width: 20px;
      height: 30px;
      color: ${(props) => props.theme.color};
      margin-top: 2px;
    }
  }
`;
