import React, { useState } from 'react';
import Modal from './UI/Modal/Modal';
import Button from './UI/Button/Button';

const App = () => {
  const [showModal, setShowModal] = useState(false);

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

  return (
    <>
      <Button
        text="Open modal"
        onClick={() => setShowModal(true)}
        className="rounded-4"
      />
      {modal}
    </>
  );
};

export default App;
