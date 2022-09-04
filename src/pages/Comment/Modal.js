import React from 'react';
import styles from './ModalDeleteComment.module.scss';

function Modal({ visible, text, cancelText, onClose, confirmText, onConfirm }) {
  if (!visible) return null;
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
      <div className={styles.commentModal}>
        <div className={styles.modalWrap}>
          <div className={styles.modalWrap}>
            <div className={styles.modalDeleteComment}>
              <p>{text}</p>
              <div className={styles.modalButton}>
                <button className={styles.cancelButton} onClick={onClose}>
                  {cancelText}
                </button>
                <button className={styles.deleteButton} onClick={onConfirm}>
                  {confirmText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
