import React, { useRef, useState } from "react";
import styled from "styled-components";
import { ArabicNumbers } from "react-native-arabic-numbers";
import { useDispatch, useSelector } from "react-redux";
import { fetchAyah, fetchAyahAudio, fetchAyahUZ } from "../store/action";
import ReactAudioPlayer from "react-audio-player";
import { toast } from "react-toastify";
import { ClassicSpinner, PushSpinner } from "react-spinners-kit";

const Ayah = () => {
  const [showTranslate, setShowTranslate] = useState(false);
  const [playMusik, setPlayMusik] = useState(false);
  const listArrayData = [];
  let arrayList = {
    nameSurah: [],
    name: [],
    surahNumber: [],
    surahNumberEnded: [],
    surahText: [],
  };
  const dispatch = useDispatch();
  const inputRef = useRef();

  const sendInputValue = () => {
    if (inputRef.current.value.length > 0) {
      dispatch(fetchAyah(inputRef.current.value));
      dispatch(fetchAyahUZ(inputRef.current.value));
      dispatch(fetchAyahAudio(inputRef.current.value));
    } else {
      toast.info("Kataklar bo`sh !");
    }
  };
  const showAyahUZ = (e) => {
    setShowTranslate(e.target.checked);
  };
  const { ayahs, loading, ayahsUZ, ayahAudio, loader } = useSelector(
    (store) => store.reducer
  );

  if (ayahs !== undefined && ayahsUZ !== undefined) {
    listArrayData.push(ayahs);
  } else {
    setInterval(() => {
      window.location.href = "/ayah";
    }, 100);
  }

  if (listArrayData.length !== 0) {
    listArrayData?.forEach(
      (item) => (
        (arrayList.surahText = showTranslate ? ayahsUZ.text : item.text),
        item.surah !== undefined
          ? (arrayList.nameSurah = item.surah.englishName)
          : (arrayList.nameSurah = ""),
        item.surah !== undefined
          ? (arrayList.name = item.surah.name)
          : (arrayList.name = ""),
        item.surah !== undefined
          ? (arrayList.surahNumber = item.surah.number)
          : (arrayList.surahNumber = 0),
        item.surah !== undefined
          ? (arrayList.surahNumberEnded = item.numberInSurah)
          : (arrayList.surahNumberEnded = "0")
      )
    );
  }
  let audioClips = [];
  if (ayahAudio.audio !== undefined) {
    audioClips = ayahAudio.audioSecondary[0];
  } else {
    audioClips = "https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3";
  }

  return (
    <Wrapper className="wrapperImage" variant={showTranslate}>
      {loading ? (
        <div className="container">
          {loader ? (
            <ClassicSpinner size={40} color="#686769" loading={loading} />
          ) : (
            <h4>
              Surah {arrayList.nameSurah} Ayah {arrayList.surahNumberEnded} (
              {arrayList.surahNumber}:{arrayList.surahNumberEnded})
            </h4>
          )}
          {loader ? (
            <ClassicSpinner size={40} color="#686769" loading={loading} />
          ) : (
            <div className="textQuran">
              <div className="Span-number">
                {ArabicNumbers(arrayList.surahNumberEnded)}
              </div>
              <span className="textSurah">{arrayList.surahText}</span>
            </div>
          )}
          {loader ? (
            <ClassicSpinner size={40} color="#686769" loading={loading} />
          ) : (
            <div className="infoDiv">
              <span>
                {arrayList.surahNumber}:{arrayList.surahNumberEnded}
                {arrayList.nameSurah}
              </span>
              <span>{arrayList.name}</span>
            </div>
          )}
        </div>
      ) : (
        <div className="wrapperSearch">
          <h2 className="search">Serach ...</h2>
        </div>
      )}
      <Footer>
        <div className="containerFooter">
          <span className="spanTranslate">
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
              onClick={(e) => showAyahUZ(e)}
            />
            <label htmlFor="vehicle1">translate </label>
          </span>
          <span className="spanInputSearch">
            <input
              type="text"
              className="inputSend"
              placeholder="max/6236"
              ref={inputRef}
            />
            <button className="submit" onClick={() => sendInputValue()}>
              go
            </button>
          </span>
          <span className="spanAudio">
            {loading ? (
              <ReactAudioPlayer
                className="audioElem"
                src={audioClips}
                controls
              />
            ) : null}
          </span>
        </div>
      </Footer>
    </Wrapper>
  );
};

export default Ayah;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .wrapperSearch {
    width: 70%;
    height: 50%;
    background-color: ${(props) => props.theme.backgrounColor};
    margin: 0 auto;
    text-align: center;
    border-radius: 20px;
  }
  .search {
  }
  .container {
    padding: 20px;
    width: 97%;
    min-height: 50%;
    max-height: 80%;
    background: ${(props) => props.theme.backgrounColor};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-family: "Kitab";
    gap: 20px;
    border-radius: 3px;

    h4 {
      font-size: 20px;
    }
    .textQuran {
      gap: 20px;
      display: flex;
      flex-direction: column-reverse;
      overflow-y: scroll;
      box-shadow: 2px 4px 10px 3px;
      border-radius: 3px;
      .textSurah {
        font-family: ${({ variant }) =>
          variant ? "Segoe UI" : "Amiri Quran, Kitab"};
      }
      font-size: ${({ variant }) => (variant ? "23px" : "30px")};
      text-align: ${({ variant }) => (variant ? "left" : "right")};
      padding: 4px 10px;
    }

    .Span-number {
      width: 60px;
      max-height: auto;
      background-color: ${({ theme }) => theme.color};
      text-align: center;
      color: ${({ theme }) => theme.backgrounColor};
      border-radius: 4px;
      font-size: 24px;
    }
  }
  .infoDiv {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Footer = styled.div`
  width: 97%;
  margin: 0 auto;
  height: 100px;
  background-color: ${(props) => props.theme.backgrounColor};
  margin-bottom: 1px;
  position: relative;
  border-radius: 20px;
  border: 1px solid black;

  .containerFooter {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    span {
      width: 33.3%;
    }
    span:nth-child(1) {
      width: 20%;
    }
    .spanTranslate {
      input:checked {
        /* width: 100%; */
        border: none;
        box-shadow: 0 0 10px 5px #9a9a9a;
        border-radius: 10px;
      }
    }
  }
  .spanInputSearch {
    display: flex;
    align-items: center;
    gap: 2px;
    width: 100%;

    .inputSend {
      text-align: center;
      width: 90px;
      background-color: ${(props) => props.theme.backgrounColor};
      color: ${(props) => props.theme.color};
      border-radius: 4px;
      padding: 4px;
      cursor: pointer;
      border: none;
      border: 1px dashed;
    }
    .submit {
      padding: 5px;
      width: 30%;
      background-color: ${(props) => props.theme.color};
      color: ${(props) => props.theme.backgrounColor};
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .submit:active {
      box-shadow: 0px 0px 10px 1px red;
    }
  }
  .spanAudio {
    width: 100%;
    cursor: pointer;
    .audioElem {
      width: 100%;
    }
  }
`;
