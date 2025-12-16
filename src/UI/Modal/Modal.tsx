import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

interface IModalProps extends React.PropsWithChildren {
  show: boolean;
  title: string;
}

const Modal: React.FC<IModalProps> = ({ show = false, title, children }) => {
  return (
    <>
      <Backdrop show={show} />

      <div
        className="modal show rounded-5"
        style={{
          display: show ? 'block' : 'none',
          width: '500px',
          height: '300px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
        }}
      >
        <div className="modal dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5 text-center">{title}</h2>
            </div>

            <div className="mx-2">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
