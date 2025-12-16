import React, { useState } from 'react';
import Modal from './UI/Modal/Modal';
import Button from './UI/Button/Button';

const App = () => {

  const [showModal, setShowModal] = useState(false);

  const onCloseModal = (): void => {
    setShowModal(false);
  };

  let modal: React.ReactNode = null;

  if (showModal) {
    modal = (
      <>
        <Modal show={showModal} title="Modal title" onClose={onCloseModal}>
          <p>Modal content</p>
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
