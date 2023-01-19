import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { WiDaySunny } from "react-icons/wi";
import { WiMoonWaxingCrescent3 } from "react-icons/wi";
import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme, setLightTheme } from "../store/reducer";

const Navbar = (props) => {
  const { dark, light } = useSelector((store) => store.reducer);
  const [toggleTheme, setToggleTheme] = useState(false);
  const dispatch = useDispatch();

  const setDarkThemeFunc = () => {
    dispatch(setDarkTheme());
    setToggleTheme(true);
    props.setTheme(dark);
    document.body.classList.add("dark");
  };
  const setLightThemeFunc = () => {
    dispatch(setLightTheme());
    props.setTheme(light);
    setToggleTheme(false);
    document.body.classList.remove("dark");
  };
  return (
    <Wrapper>
      <div className="burgerMenu">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <NavLink to={"/"}>
                <li>Home</li>
              </NavLink>
              <NavLink to={"/juz"}>
                <li>Juz</li>
              </NavLink>
              <NavLink to={"/surah"}>
                <li>Surah</li>
              </NavLink>
              <NavLink to={"/ayah"}>
                <li>Ayah</li>
              </NavLink>
              <NavLink to={"/tasbeh"}>
                <li>Tasbeh</li>
              </NavLink>
              <NavLink to={"/names"}>
                <li>Names</li>
              </NavLink>
              <div className="toggleDarkNightDrawer">
                {toggleTheme ? (
                  <WiDaySunny
                    className="icon"
                    onClick={() => setLightThemeFunc()}
                  />
                ) : (
                  <WiMoonWaxingCrescent3
                    onClick={() => setDarkThemeFunc()}
                    className="icon"
                  />
                )}
              </div>
            </ul>
          </div>
        </nav>
      </div>
      <div className="wrapper_info">
        <div className="leftDivNav">
          <NavLink to={"/"}>
            <span>Taqvim</span>
          </NavLink>
          <NavLink to={"/juz"}>
            <span>Juz</span>
          </NavLink>
          <NavLink to={"/surah"}>
            <span>Surah</span>
          </NavLink>
          <NavLink to={"/ayah"}>
            <span>Ayah</span>
          </NavLink>
          <NavLink to={"/tasbeh"}>{<span>Tasbeh</span>}</NavLink>
          <NavLink to={"/names"}>
            <span>Names</span>
          </NavLink>
          {toggleTheme ? (
            <WiDaySunny className="icon" onClick={() => setLightThemeFunc()} />
          ) : (
            <WiMoonWaxingCrescent3
              onClick={() => setDarkThemeFunc()}
              className="icon"
            />
          )}
        </div>
        <div className="rightDivNav">
          <span>الْقُرْآن الْكَرِيْم</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  max-width: 100%;
  height: 70px;
  background-color: #0c84e4;
  position: relative;
  transition: cubic-bezier(0.39, 0.575, 0.565, 1);

  #menuToggle {
    display: block;
    position: relative;
    top: 50px;
    left: 50px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
    .toggleDarkNightDrawer {
      position: absolute;
      top: 90%;
      left: 10;
    }
  }

  #menuToggle a {
    text-decoration: none;
    color: #232323;

    transition: color 0.3s ease;
  }

  #menuToggle a:hover {
    color: tomato;
  }

  #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0;
    z-index: 2;

    -webkit-touch-callout: none;
  }

  #menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: #cdcdcd;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }
  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
  #menu {
    position: absolute;
    max-width: 300px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #menu li {
    padding: 10px 0;
    font-size: 22px;
  }

  #menuToggle input:checked ~ ul {
    transform: none;
  }
  .burgerMenu {
    display: none;
  }
  @media (max-width: 681px) {
    .burgerMenu {
      display: block;
      position: absolute;
      top: -10%;
      left: -10px;
      transform: translateY(-50%);
    }
  }
  .wrapper_info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 681px) {
      display: none;
      .burgerMenu {
        display: block;
      }
    }
  }

  .leftDivNav {
    span {
      margin: 0 20px;
      cursor: pointer;
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      color: #000;
    }
    position: relative;
  }
  .rightDivNav {
    margin: 20px;
    font-size: 20px;
    font-family: "Courier New", Courier, monospace;
    cursor: pointer;
  }
  .active {
    background-color: #fff;
    opacity: 0.6;
    padding: 4px 0px;
    border-radius: 4px;
    transition: 1s all cubic-bezier(0.19, 1, 0.22, 1);
  }
  .icon {
    text-align: center;
    width: 20px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
