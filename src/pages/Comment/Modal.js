import styles from './Modal.module.scss';

function Modal(props) {
  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.6)',
        }}
      />
      <div className={styles.modal}>
        <div className={styles.modalWrap}>
          <div className={styles.modalDeleteComment}>
            <p>댓글을 삭제 하시겠어요?</p>
            <div className={styles.modalButton}>
              <button
                className={styles.cancelButton}
                onClick={() => {
                  props.setModal(!props.modal);
                }}
              >
                아니요
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => {
                  props.deleteComment(props.id);
                }}
              >
                네, 삭제할래요
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
