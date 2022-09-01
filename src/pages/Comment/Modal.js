function Modal(props) {
  return (
    <div className={styles.modal}>
      <p>댓글을 삭제 하시겠어요?</p>
      <button>아니요</button>
      <button>네, 삭제할래요</button>
    </div>
  );
}

export default Modal;
