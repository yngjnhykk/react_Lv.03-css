import { useState } from 'react';
import LeftModal from './components/LeftModal';
import RightModal from './components/RightModal';
import LeftSelect from './components/LeftSelect';
import RightSelect from './components/RightSelect';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { VscBellDot } from 'react-icons/vsc';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [leftModalOpen, setLeftModalOpen] = useState(false);
  const [rightModalOpen, setRightModalOpen] = useState(false);
  const [leftSelectOpen, setLeftSelectOpen] = useState(false);
  const [rightSelectOpen, setRightSelectOpen] = useState(false);

  const select1 = useSelector((state) => state.reducer.select1);
  const select2 = useSelector((state) => state.reducer.select2);

  const onchangeName = (e) => {
    setName(e.target.value);
  };

  const onchangePrice = (e) => {
    let value = e.target.value;
    value = +value.replaceAll(',', '');
    const formatValue = value.toLocaleString('ko-KR');
    isNaN(value) ? setPrice(0) : setPrice(formatValue);
  };

  const OnPrimaryButton = () => {
    alert('버튼을 만들어 보세요.');
  };
  const OnNegativeButton = () => {
    prompt('너무 쉬운데요?');
  };
  const OnSaveButton = () => {
    if (name === '' || price === 0) {
      alert('값을 입력해주세요.');
    } else {
      alert(`{name: ${name}, price: ${+price.replaceAll(',', '')}}`);
    }
    setName('');
    setPrice(0);
  };

  const showLeftModal = () => {
    setLeftModalOpen(true);
  };
  const showRightModal = () => {
    setRightModalOpen(true);
  };

  const showNHideLeftSelect = () => {
    setLeftSelectOpen(!leftSelectOpen);
  };
  const showNHideRightSelect = () => {
    setRightSelectOpen(!rightSelectOpen);
  };

  return (
    <div>
      <Button>
        <h1>Button</h1>
        <ButtonArray>
          <LP_Button onClick={OnPrimaryButton} className='LP_Button'>
            Large Primary Button
          </LP_Button>
          <MediumButton bgColor='skyblue'> Medium</MediumButton>
          <SmallButton bgColor='skyblue'>small</SmallButton>
        </ButtonArray>
        <ButtonArray>
          <LN_Button onClick={OnNegativeButton} className='LN_Button'>
            Large Negative Button
            <span> </span>
            <VscBellDot className='bellIcon' />
          </LN_Button>
          <MediumButton bgColor='yellowgreen'>Medium</MediumButton>
          <SmallButton bgColor='yellowgreen'>small</SmallButton>
        </ButtonArray>
      </Button>
      <h1>Input</h1>
      <Input>
        <div>
          <label>이름</label>
          <input value={name} onChange={onchangeName}></input>
        </div>
        <div>
          <label>가격</label>
          <input value={price} onChange={onchangePrice}></input>
        </div>
        <SaveButton onClick={OnSaveButton}>저장</SaveButton>
      </Input>
      <Modal>
        <h1>Modal</h1>
        <Left onClick={showLeftModal}>open modal</Left>
        {leftModalOpen && (
          <LeftModal setLeftModalOpen={setLeftModalOpen}></LeftModal>
        )}
        <Right className='rightModal' onClick={showRightModal}>
          open modal
        </Right>
        {rightModalOpen && (
          <RightModal setRightModalOpen={setRightModalOpen}></RightModal>
        )}
      </Modal>
      <Select>
        <h1>Select</h1>
        <SelectButton1 onClick={showNHideLeftSelect}>{select1}</SelectButton1>
        <SelectButton2 onClick={showNHideRightSelect}>{select2}</SelectButton2>
        {rightSelectOpen && (
          <RightSelect showNHideRightSelect={showNHideRightSelect} />
        )}
      </Select>
      {leftSelectOpen && (
        <LeftSelect showNHideLeftSelect={showNHideLeftSelect} />
      )}
    </div>
  );
}

export default App;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonArray = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const LP_Button = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: rgb(0, 0, 0);
  height: 50px;
  width: 200px;
  border: 3px solid skyblue;
  background-color: rgb(255, 255, 255);
  font-weight: 600;
`;

const MediumButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => props.bgColor};
  color: rgb(0, 0, 0);
  height: 45px;
  width: 130px;
`;

const LN_Button = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: green;
  height: 50px;
  width: 200px;
  border: 3px solid yellowgreen;
  background-color: rgb(255, 255, 255);
  font-weight: 600;
  .bellIcon {
    color: black;
  }
`;

const SmallButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => props.bgColor};
  color: rgb(0, 0, 0);
  height: 40px;
  width: 100px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  > div > input {
    border: 1px solid rgb(51, 51, 51);
    height: 40px;
    width: 200px;
    outline: none;
    border-radius: 8px;
    padding-left: 12px;
    padding-right: 12px;
  }
`;

const SaveButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: yellowgreen;
  color: rgb(0, 0, 0);
  height: 40px;
  width: 100px;
`;

const Modal = styled.div`
  width: 100%;
  height: 150px;
`;

const Left = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: skyblue;
  color: rgb(0, 0, 0);
  height: 40px;
  width: 100px;
  margin-right: 10px;
`;

const Right = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: green;
  height: 50px;
  width: 200px;
  border: 3px solid yellowgreen;
  background-color: rgb(255, 255, 255);
  font-weight: 600;
`;

const Select = styled.div`
  width: 90%;
  height: 250px;
  margin: 30px auto 0 10px;
  padding: 10px;
  border: 2px solid gray;
  overflow: hidden;
  position: relative;
  z-index: 10;
`;

const SelectButton1 = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  text-align: left;
  z-index: 10;
`;

const SelectButton2 = styled.button`
  margin-left: 30px;
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  text-align: left;
  z-index: 10;
`;
