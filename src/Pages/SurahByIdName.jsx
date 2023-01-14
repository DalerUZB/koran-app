import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchSuraAudio, fetchSuraname, fetchTranslate } from "../store/action";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsInfo } from "react-icons/bs";
import Modal from "react-modal";
import ComponentSuraForReed from "../Components/ComponentSuraForReed";
import { useState } from "react";
import { ClassicSpinner } from "react-spinners-kit";
import ReactAudioPlayer from "react-audio-player";

const SurahByIdName = () => {
  let obj = [];
  let list = [];
  let audio = [];
  const body = document.body;
  Modal.setAppElement(body);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [showTransationQuranUZB, setShowTransationQuranUZB] = useState(false);
  const [audioSong, setAudioSong] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { surahName, surahTranslation, surahAudio, loading } = useSelector(
    (store) => store.reducer
  );
  useEffect(() => {
    dispatch(fetchSuraname(id));
    dispatch(fetchSuraAudio(id));
    dispatch(fetchTranslate(id));
  }, [dispatch]);
  const { ayahs } = surahName;
  if (ayahs) {
    list = ayahs;
  }
  if (surahAudio.ayahs) {
    for (const iteratorAudio of surahAudio.ayahs) {
      audio.push({
        audioElem: iteratorAudio.audio,
        number: iteratorAudio.number,
      });
    }
  }
  if (surahTranslation.ayahs) {
    for (const iterator of showTransationQuranUZB
      ? surahTranslation.ayahs
      : list) {
      obj.push({
        text: iterator.text,
        number: iterator.number,
        numberInSurah: iterator.numberInSurah,
      });
    }
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function checkedTransation(showEven) {
    setShowTransationQuranUZB(showEven);
  }
  console.log(audio);
  return (
    <Wrapper>
      <Header>
        <div className="onFloor">
          <div>
            {loading ? (
              <ClassicSpinner size={30} color="#686769" loading={true} />
            ) : (
              <div>
                <p>{surahName.englishNameTranslation}</p>
              </div>
            )}
          </div>
          {loading ? (
            <ClassicSpinner size={30} color="#686769" loading={true} />
          ) : (
            <>
              {id} - {surahName.englishName}
              <p>{surahName.name} </p>
            </>
          )}
        </div>
      </Header>
      <div className="container">
        {loading ? (
          <div className="spinner">
            <ClassicSpinner size={50} color="#686769" loading={true} />
          </div>
        ) : (
          obj?.map((ayah) => (
            <ComponentSuraForReed
              showTransationQuranUZB={showTransationQuranUZB}
              translate={surahTranslation.ayahs}
              key={ayah.number}
              {...ayah}
            />
          ))
        )}
      </div>
      <Footer>
        <div>
          <div className="first_div">
            <span className="language">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                onClick={({ target }) => checkedTransation(target.checked)}
              />
              <label htmlFor="vehicle1">Translat</label>
            </span>
          </div>
          <div className="two_div">
            <ReactAudioPlayer className="audioElem" controls />
          </div>
          <div className="three_div">
            <span className="iconBack">
              <BsInfo className="big" onClick={openModal} />
              <Link to={"/surah"}>
                <BsFillArrowLeftCircleFill className="big" />
              </Link>
            </span>
          </div>
        </div>
      </Footer>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <ModalPopup>
          <h1>{surahName.englishName}: surasi </h1>
          <p>{surahName.name}</p>
          <b>Qayerda nozil bolgan:</b>
          <p>{surahName.revelationType}</p>
          <b>Oyatlar soni:</b>
          <p>{surahName.numberOfAyahs}</p>
          <b>Sura raqami:</b>
          <p>{surahName.number}</p>
          <BsFillArrowLeftCircleFill
            onClick={closeModal}
            className="iconsModal"
          />
        </ModalPopup>
      </Modal>
    </Wrapper>
  );
};

export default SurahByIdName;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  font-family: "Kitab";
  .container {
    width: 100%;
    height: calc(100% - 79px);
    margin-top: 10px;
    overflow-y: scroll;
    padding: 0 4px;
  }
  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const Header = styled.div`
  width: 90%;
  margin: 0 auto;
  min-height: auto;
  box-shadow: 0 0 5px 1px;
  margin-top: 4px;
  .onFloor {
    display: flex;
    justify-content: space-around;
    max-height: auto;
    padding-top: 2px;
  }
  .bismillah {
    text-align: right;
    margin-right: 30px;
    margin-top: 25px;
    font-size: 30px;
    font-weight: 500;
    font-family: "Kitab";
    color: #980000;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid;
  display: flex;
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .first_div,
    .two_div,
    .three_div {
      width: 33.3%;
    }
  }
  .language {
    min-height: 10px;
    max-height: auto;
  }
  .audio {
    width: 130px;
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
const ModalPopup = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  text-align: center;
  font-family: "Kitab";
  font-size: 20px;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgrounColor};
  h1,
  p,
  b {
    padding: 24px 0;
  }
  .iconsModal {
    width: 50px;
    height: 50px;
  }
`;
