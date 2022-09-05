import React from 'react';
import css from './ModalHeader.module.scss';

function ModalHeader(props) {
  return <div className={css.headerWrapper}>{props.value}</div>;
}
export default ModalHeader;
