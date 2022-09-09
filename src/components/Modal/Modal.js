import React from 'react';
import styles from './Modal.module.scss';

function Modal(props) {
  const { visible, text, cancelText, onClose, confirmText, onConfirm } = props;
  if (!visible) return null;
  return (
    <div>
      <div className={styles.modalBackground} />
      <div className={styles.modal}>
        <div className={styles.modalWrapper}>
          <div className={styles.modalWrap}>
            <div className={styles.modalDelete}>
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
