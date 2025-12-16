import React from 'react';

interface IBackdropProps extends React.PropsWithChildren {
  show: boolean;
}

const Backdrop: React.FC<IBackdropProps> = ({ show }) => {
  return (
    <div
      className="modal-backdrop show"
      style={{ display: show ? 'block' : 'none' }}
    ></div>
  );
};

export default Backdrop;
