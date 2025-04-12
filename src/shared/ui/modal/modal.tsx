import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';

type Props = {
  isOpen: boolean;
  closeHandler: () => void;
  children?: ReactNode;
};

export const Modal = ({ children, closeHandler, isOpen }: Props) => {
  return (
    isOpen &&
    createPortal(
      <div
        className="overlay"
        onClick={(e) => {
          if (e.currentTarget === e.target) closeHandler();
        }}
      >
        <div className="modal">
          <button className="btnClose" onClick={closeHandler}>
            &#215;
          </button>
          {children}
        </div>
      </div>,
      document.body
    )
  );
};
