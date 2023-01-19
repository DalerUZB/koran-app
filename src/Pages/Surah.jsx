import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchSurah } from "../store/action";
import SurahApp from "../Components/SurahComponent";
import { clearSurahAudio } from "../store/reducer";

const Surah = () => {
  const dispatch = useDispatch();
  const { quranNameList } = useSelector((store) => store.reducer);
  useEffect(() => {
    dispatch(fetchSurah());
    dispatch(clearSurahAudio());
  }, [dispatch]);
  return (
    <Wrapper className="backgroundSurah">
      <div className="containerQuranList">
        <h1 className="bismillah"> بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
        <hr />
        <div className="containerQuranScrollSurah">
          {quranNameList?.map((item) => (
            <SurahApp {...item} key={item.number} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Surah;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70.3px);
  .containerQuranList {
    width: 80%;
    height: calc(100vh - 80px);
    border-radius: 4px;
    margin: 0 auto;
    background-color: ${(props) => props.theme.backgrounColor};
    color: ${(props) => props.theme.color};
    transition: ${(props) => props.theme.transition};
    padding: 0px 10px;
    @media (max-width: 400px) {
      width: 100%;
    }
    .bismillah {
      text-align: right;
      font-family: "Kitab";
      padding-bottom: 45px;
      font-size: 33px;
      font-weight: 500;
      color: #666666;
    }
    .byJuz {
      font-family: inherit;
      font-weight: 400;
      line-height: 1.1;
      color: #444444;
      margin-top: 11.5px;
      margin-bottom: 11.5px;
      font-size: 24px;
    }
  }
  .containerQuranScrollSurah {
    overflow-y: scroll;
    height: 80%;
  }
`;
