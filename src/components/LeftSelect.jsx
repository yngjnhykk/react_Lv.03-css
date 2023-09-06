import React from 'react';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { update_select1 } from '../redux/modules/reducer';

function LeftSelect({ showNHideLeftSelect }) {
  const dispatch = useDispatch();

  const OnClickSelect = (e) => {
    const selected = e.target.innerText;
    dispatch(update_select1(selected));
    showNHideLeftSelect();
  };
  return (
    <LeftSelectStyle>
      <Option onClick={OnClickSelect}>리액트</Option>
      <Option onClick={OnClickSelect}>자바</Option>
      <Option onClick={OnClickSelect}>스프링</Option>
      <Option onClick={OnClickSelect}>리액트 네이티브</Option>
      <Option onClick={OnClickSelect}>타입스크립트</Option>
      <Option onClick={OnClickSelect}>넥스트 제이에스</Option>
      <Option onClick={OnClickSelect}>노드 제이에스</Option>
    </LeftSelectStyle>
  );
}

export default LeftSelect;

const LeftSelectStyle = styled.div`
  width: 300px;
  height: 350px;
  position: absolute;
  left: 23px;
  top: 688px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  text-align: left;
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
