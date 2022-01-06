import React from 'react';
import { Dialog } from '@headlessui/react';

export default function Modal({
  children,
  isOpen,
  setIsOpen,
  title = 'Modal Here',
  onCloseAction = () => {},
  ...rest
}) {
  function closeModal() {
    setIsOpen();
    onCloseAction();
  }

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="fixed top-0 left-0 flex items-center justify-center h-screen w-screen"
      {...rest}
    >
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
      <div className="relative bg-white border border-gray-300 shadow-lg rounded mx-auto p-8 max-w-[90%] scale-[.7] lg:scale-95">
        <Dialog.Title className="text-lg font-bold text-indigo-600 text-center my-3">
          {title}
        </Dialog.Title>
        {children}
      </div>
    </Dialog>
  );
}
