import React from 'react';
import styles from './Modal.module.scss';

function Modal(props) {
  const { visible, text, cancelText, onClose, confirmText, onConfirm } = props;
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
      <div className={styles.Modal}>
        <div className={styles.modalWrapper}>
          <div className={styles.modalWrap}>{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
