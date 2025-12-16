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

  let modal: React.ReactNode = null;

  if (showModal) {
    modal = (
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
              />
            ))}
          </div>
        </Modal>
      </>
    );
  }

  const closeAlert = (): void => {
    setShowAlert(false);
  };

  let alert: React.ReactNode = null;

  if (showAlert) {
    alert = (
      <>
        <Alert type="danger" onDismiss={closeAlert} show={showAlert}>
          Hello
        </Alert>
      </>
    );
  }

  return (
    <>
      <Button
        text="Open modal"
        onClick={() => setShowModal(true)}
        className="rounded-4"
      />
      {modal}

      <Button
        text="Alert"
        onClick={() => setShowAlert(true)}
        className="rounded-4"
      />
      {alert}
    </>
  );
};

export default App;
