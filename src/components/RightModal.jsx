import './ModalBasic.css';

function ModalBasic({ setRightModalOpen, id, title, content, writer }) {
  // 모달 끄기
  const closeModal = () => {
    setRightModalOpen(false);
  };

  return (
    <div className='wrap' onClick={closeModal}>
      <div
        className='container'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p>우측 모달창입니다.</p>
      </div>
    </div>
  );
}
export default ModalBasic;
