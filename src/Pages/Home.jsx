import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchTaqvim } from "../store/action";
const Home = () => {
  const nameRef = useRef();
  const dispatch = useDispatch();
  const { taqvimTimeListName, taqvimTimeNamaz } = useSelector(
    (store) => store.reducer
  );

  function callFunc() {
    dispatch(fetchTaqvim(nameRef.current.value));
    nameRef.current.value = "";
  }

  return (
    <Wrapper>
      <div className="headerTimes">
        <span className="spanInput">
          <input type="text" placeholder="qaysi viloyat" ref={nameRef} />
          <button onClick={() => callFunc()}>Yubormoq</button>
        </span>

        <h1>{taqvimTimeListName.region}</h1>
        <p>taqvim</p>
        <b>{taqvimTimeListName.weekday}</b>
      </div>

      <div className="sectionTimes">
        <div className="namazName">
          <b>Tong</b>
          <span>{taqvimTimeNamaz.tong_saharlik}</span>
          <b>Quyosh</b>
          <span>{taqvimTimeNamaz.quyosh}</span>
          <b>Peshin</b>
          <span>{taqvimTimeNamaz.peshin}</span>
          <b>Asr</b>
          <span>{taqvimTimeNamaz.asr}</span>
          <b>Shom</b>
          <span>{taqvimTimeNamaz.shom_iftor}</span>
          <b>Hufton</b>
          <span>{taqvimTimeNamaz.hufton}</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  height: calc(100vh - 70.3px);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 70px;
  .headerTimes {
    .spanInput {
      display: flex;
      input {
        outline: none;
        border: none;
        padding: 10px;
        border-radius: 4px 0 0 4px;
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
        font-family: 700;
        background-color: #555;
        color: #fff;
      }
      button {
        border: none;
        padding: 10px;
        background-color: #555;
        border-radius: 0 4px 4px 0px;
        color: #b79e9e;
      }
    }
    padding-bottom: 80px;
  }
  .sectionTimes {
    color: #010000;
    width: 95%;
    margin: 0 auto;
    border-radius: 8px;
    font-family: 700;
    font-family: sans-serif;
    .namazName {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 0 auto;
      color: ${(props) => props.theme.color};
      font-size: 20px;
      span {
        width: 100px;
      }
    }
    .namazTime {
      color: ${(props) => props.theme.color};

      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      span {
        width: 100px;
        color: ${(props) => props.theme.color};
      }
    }
  }
`;
