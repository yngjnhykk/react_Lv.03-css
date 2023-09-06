import './ModalBasic.css';

function ModalBasic({ setLeftModalOpen, id, title, content, writer }) {
  // 모달 끄기
  const closeModal = () => {
    setLeftModalOpen(false);
  };

  return (
    <div className='wrap'>
      <div className='container'>
        <p>좌측 모달창입니다.</p>
        <div className='buttons'>
          <button onClick={closeModal}>닫기</button>
          <button>확인</button>
        </div>
      </div>
    </div>
  );
}
export default ModalBasic;
