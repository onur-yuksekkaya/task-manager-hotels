import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function ConfirmModal({
  modalActionOnConfirm,
  modalTitle,
  modalText,
  modalSuccessText,
  modalClose,
  modalOpen,
  modalConfirmButtonText,
  timer = 1500,
}) {
  const ConfirmationSwal = withReactContent(Swal);

  const confirmAlert = () => {
    ConfirmationSwal.fire({
      title: <strong className="text-indigo-800">{modalTitle}</strong>,
      html: <i className="text-indigo-600">{modalText}</i>,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: modalConfirmButtonText,
      cancelButtonText: 'Vazgeç',
      confirmButtonColor: '#4f46e5',
      cancelButtonColor: '#be123c',
    }).then(async (result) => {
      if (result.isConfirmed) {
        modalActionOnConfirm();
        confirmationSuccessAlert();
      } else {
        modalClose();
      }
    });
  };

  const confirmationSuccessAlert = () => {
    ConfirmationSwal.fire({
      title: <strong>{modalSuccessText}</strong>,
      icon: 'success',
      showConfirmButton: false,
      timer,
      willClose: () => {
        modalClose();
      },
    });
  };

  useEffect(() => {
    confirmAlert();
  }, []);

  return <div className="hidden">confirmation modal test</div>;
}
