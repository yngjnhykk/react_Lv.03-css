import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { update_select2 } from '../redux/modules/reducer';

function RightSelect({ showNHideRightSelect }) {
  const dispatch = useDispatch();

  const OnClickSelect = (e) => {
    const selected = e.target.innerText;
    dispatch(update_select2(selected));
    showNHideRightSelect();
  };

  return (
    <RightSelectStyle>
      {/* {mockdata.map((item) => {
        <button key={item.id}>{item.value}</button>;
      })} */}
      <Option onClick={OnClickSelect}>리액트</Option>
      <Option onClick={OnClickSelect}>자바</Option>
      <Option onClick={OnClickSelect}>스프링</Option>
      <Option onClick={OnClickSelect}>타입스크립트</Option>
    </RightSelectStyle>
  );
}

export default RightSelect;

const RightSelectStyle = styled.div`
  width: 300px;
  height: 500px;
  position: absolute;
  left: 340px;
  top: 151px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  z-index: 99;
`;

const Option = styled.button`
  width: 100%;
  height: 50px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  border: none;
  text-align: left;
  &:hover {
    background-color: lightgray;
  }
`;
