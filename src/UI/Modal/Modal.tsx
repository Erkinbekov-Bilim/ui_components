import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';
import './Modal.css';
import { motion, AnimatePresence } from 'framer-motion';

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
    <AnimatePresence>
      <Backdrop show={show} onClose={onClose} />
      {show && (
        <motion.div
          key={'modal'}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="modal show "
          style={{
            display: 'block',
            width: '500px',
            height: 'auto',
            position: 'fixed',
            top: '40%',
            left: '40%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h1 className="modal-title fs-5 text-center">{title}</h1>

                <div className="position-absolute mt-2 top-0 end-0">
                  <Button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="btn-close-modal border-0"
                  />
                </div>
              </div>

              <div className="p-3">{children}</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
