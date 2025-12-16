import React, { useState } from 'react';
import Modal from './UI/Modal/Modal';
import Button from './UI/Button/Button';
import Alert from './UI/Alert/Alert';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const onCloseModal = (): void => {
    setShowModal(false);
  };

  const modalConfigs = [
    {
      type: 'primary',
      label: 'Continue',
      onClick: () => console.log('clicked continue'),
    },
    {
      type: 'danger',
      label: 'Close',
      onClick: () => onCloseModal(),
    },
  ];

  const modal: React.ReactNode = (
    <>
      <Modal
        show={showModal}
        title="Some kinda modal title"
        onClose={onCloseModal}
      >
        <p>This is modal content</p>

        <div className="d-flex flex-row gap-3 justify-content-end">
          {modalConfigs.map((config, index) => (
            <Button
              key={config.type + index}
              type="button"
              className={`btn btn-${config.type} px-4 py-2`}
              text={config.label}
              onClick={config.onClick}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </Modal>
    </>
  );

  const closeAlert = (): void => {
    setShowAlert(false);
  };

  const alert: React.ReactNode = (
    <>
      <Alert
        type="danger"
        onDismiss={closeAlert}
        show={showAlert}
        key={'alert'}
      >
        Hello
      </Alert>
    </>
  );

  return (
    <div className="d-flex gap-3 m-3">
      <Button
        text="Open modal"
        onClick={() => setShowModal(true)}
        className="rounded-4"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      />
      {modal}

      <Button
        text="Alert"
        onClick={() => setShowAlert(!showAlert)}
        className="rounded-4"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      />
      {alert}
    </div>
  );
};

export default App;
