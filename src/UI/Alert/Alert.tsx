import React from 'react';
import Button from '../Button/Button';
import './Alert.css';
import Backdrop from '../Backdrop/Backdrop';

interface IAlertProps extends React.PropsWithChildren {
  type: 'primary' | 'success' | 'danger' | 'warning';
  show: boolean;
  onDismiss?: () => void;
}

const Alert: React.FC<IAlertProps> = ({ type, show, onDismiss, children }) => {
  let btnDismiss: React.ReactNode = null;

  if (onDismiss) {
    btnDismiss = (
      <>
        <div className="position-absolute mt-2 top-0 end-0">
          <Button onClick={onDismiss} className="btn-close-alert border-0" />
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className={`w-25 bg-${type} bg-opacity-25 border border-${type} px-3 py-3 rounded-4 position-fixed z-2`}
        style={{
          display: show ? 'block' : 'none',
          position: 'fixed',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <p className={`fs-5 my-0 text-${type}-emphasis`}>{children}</p>

        {btnDismiss}
      </div>
    </>
  );
};

export default Alert;