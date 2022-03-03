import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#F0F0F5',
    color: '#000000',
    borderRadius: '8px',
    width: '736px',
    border: 'none',
  },
  overlay: {
    backgroundColor: '#121214e6',
  },
};

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: React.ReactNode;
}

function Modal(props: ModalProps) {
  const [modalStatus, setModalStatus] = useState(props.isOpen);

  useEffect(() => {
    setModalStatus(props.isOpen);
  }, [props.isOpen]);

  return (
    <ReactModal
      onRequestClose={props.setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={modalStyle}
    >
      {props.children}
    </ReactModal>
  );
}

export default Modal;
