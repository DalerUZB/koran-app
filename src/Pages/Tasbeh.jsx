import React, { useState } from "react";
import styled from "styled-components";

const Tasbeh = () => {
  let str = localStorage.getItem("count");
  const [count, setCount] = useState(Number(str));
  function addCount() {
    setCount(count + 1);
    localStorage.setItem("count", count + 1);
  }
  function minusCount() {
    setCount(0);
    console.log(str);
    localStorage.setItem("count", 0);
  }

  return (
    <Wrapper>
      <h1 className="h">Tasbeh</h1>
      <div className="main">
        <div className="twarp">
          <div className="display">
            <span id="tnum">{str}</span>
          </div>
          <div className="btnwrap">
            <button className="tbtn" onClick={() => addCount()}>
              Qo`shish
            </button> 
            <button className="rbtn" onClick={() => minusCount()}>
              To`zalash
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Tasbeh;
const Wrapper = styled.div`
  .h {
    text-align: center;
    font-size: 45px;
  }

  .main {
    text-align: center;
  }

  #tnum {
    display: inline-block;
    border: 5px solid #7cf246;
    padding: 100px;
    border-radius: 63%;
    font-size: 30px;
  }

  .btnwrap {
    margin-top: 20px;
  }

  .tbtn {
    padding: 15px 50px 15px 50px;
    border-radius: 30px;
    border: none;
    background-color: #0058ff;
    color: ${(props) => props.theme.color};
    font-size: 22px;
    margin: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.19);
    box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.19);
    :hover {
      background-color: blue;
    }
  }

  .rbtn {
    padding: 15px 50px 15px 50px;
    border-radius: 30px;
    border: none;
    background-color: #ee1a1a;
    color: ${(props) => props.theme.color};
    font-size: 22px;
    margin: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.19);
    box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.19);
    :hover {
      background-color: red;
    }
  }
`;
