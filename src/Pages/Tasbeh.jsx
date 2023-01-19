import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClassicSpinner } from "react-spinners-kit";
import styled from "styled-components";
import { fetchName } from "../store/action";

const Tasbeh = () => {
  let str = localStorage.getItem("count");
  const dispatch = useDispatch();
  const [count, setCount] = useState(Number(str));
  const { nameLord, loaderNameLord } = useSelector((store) => store.reducer);

  const obj = {
    name: [],
    nameTranslate: [],
  };
  function addCount() {
    setCount(count + 1);
    localStorage.setItem("count", count + 1);
  }
  function minusCount() {
    setCount(0);
    localStorage.setItem("count", 0);
  }
  useEffect(() => {
    dispatch(fetchName(mathRandom(99)));
  }, [dispatch]);

  function mathRandom(random) {
    return Math.floor(Math.random() * random) + 1;
  }
  if (nameLord) {
    nameLord.map(
      (item) => (
        (obj.name = item.name), (obj.nameTranslate = item.transliteration)
      )
    );
  }

  return (
    <Wrapper>
      <div className="names">
        <span>
          {loaderNameLord ? (
            <ClassicSpinner loading={true} size={40} color="#686769" />
          ) : (
            obj.name
          )}
        </span>
        <span>
          {loaderNameLord ? (
            <ClassicSpinner loading={true} size={40} color="#686769" />
          ) : (
            obj.nameTranslate
          )}
        </span>
      </div>
      <div className="top_div">
        <div className="radius">
          <h1>{str}</h1>
        </div>
      </div>
      <div className="bottom_div">
        <div className="buttons">
          <button onClick={() => addCount()}>Qo`shish</button>
          <button onClick={() => minusCount()}>O`chirish</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Tasbeh;
const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  border: 1px solid;
  text-align: center;
  .names {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      width: 100px;
      height: 50px;
      margin-top: 10px;
    }

    span:nth-child(1) {
      font-family: "Kitab";
      font-size: 22px;
    }
  }
  .top_div {
    width: 100%;
    height: 50%;
    text-align: center;
    .radius {
      margin: 0 auto;
      width: 300px;
      max-width: 100%;
      height: 100%;
      border: 5px solid #06ea34;
      border-radius: 50%;
      padding-top: 95px;
    }
    h1 {
      font-size: 60px;
      font-weight: 500;
    }
  }
  .bottom_div {
    width: 100%;
    .buttons {
      padding-top: 40px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      button {
        width: 100px;
        height: 40px;
        border: none;
        border-radius: 4px;
        :active {
          border: 1px solid black;
        }
      }
    }
  }
`;
