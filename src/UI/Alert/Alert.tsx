import React from 'react';
import Button from '../Button/Button';
import './Alert.css';
import { motion, AnimatePresence } from 'framer-motion';

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
        <div
          className="position-absolute mt-2 top-0 end-0"
        >
          <Button
            onClick={onDismiss}
            className="btn-close-alert border-0"
            whileHover={{ scale: 1.2 }}
          />
        </div>
      </>
    );
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={'alert'}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          whileHover={{ scale: 1.1 }}
          className={`w-25 bg-${type} bg-opacity-25 border border-${type} px-3 py-3 rounded-4 z-2`}
          style={{
            position: 'fixed',
            top: '5%',
            left: '38%',
            transform: 'translateX(-50%)',
          }}
        >
          <p className={`fs-5 my-0 text-${type}-emphasis`}>{children}</p>

          {btnDismiss}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
