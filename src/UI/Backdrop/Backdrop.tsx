import React from 'react';

interface IBackdropProps extends React.PropsWithChildren {
  show: boolean;
  onClose?: () => void;
}

const Backdrop: React.FC<IBackdropProps> = ({ show, onClose }) => {
  return (
    <div
      className="modal-backdrop show"
      style={{ display: show ? 'block' : 'none' }}
      onClick={onClose}
    ></div>
  );
};

export default Backdrop;
