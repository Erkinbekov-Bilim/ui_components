import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';
import './Modal.css';

interface IModalProps extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: () => void;
}

const Modal: React.FC<IModalProps> = ({
  show = false,
  title,
  onClose,
  children,
}) => {
  return (
    <>
      <Backdrop show={show} onClose={onClose} />

      <div
        className="modal show"
        style={{
          display: show ? 'block' : 'none',
          width: '500px',
          height: 'auto',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-center">{title}</h1>

              <div className="position-absolute mt-2 top-0 end-0">
                <Button
                  onClick={onClose}
                  className="btn-close-modal border-0"
                />
              </div>
            </div>

            <div className="p-3">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
