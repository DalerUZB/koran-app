import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchNameLord } from "../store/action";

const NamesLord = () => {
  const dispatch = useDispatch();
  const { namesLord } = useSelector((store) => store.reducer);

  useEffect(() => {
    dispatch(fetchNameLord());
  }, [dispatch]);

  return (
    <Wrapper>
      <div className="scroll_div">
        <table>
          <tbody>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Name eng</th>
              <th>Translation </th>
            </tr>
            {namesLord?.map((names, index) => (
              <tr key={index + 1}>
                <th>{index + 1}</th>
                <th className="nameLord">{names.name}</th>
                <th>{names.transliteration}</th>
                <th>{names.en.meaning}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default NamesLord;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  border: 1px solid;
  .scroll_div {
    min-height: auto;
    max-height: 100%;
    overflow-y: scroll;
  }
  table {
    width: 100%;
    text-align: center;
    tbody {
      font-family: "Kitab";
      th {
        padding: 4px 0;
        border: 1px solid;
        font-size: medium;
      }
    }
  }
`;
