import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function InfoModal({
  modalTitle = 'Info Buraya!',
  modalIcon = 'success',
  modalClose,
  modalConfirmButtonText = 'Tamam',
  timer = 1500,
}) {
  const InfoSwal = withReactContent(Swal);

  const infoAlert = () => {
    InfoSwal.fire({
      title: <strong>{modalTitle}</strong>,
      icon: modalIcon,
      confirmButtonText: modalConfirmButtonText,
      timer,
      willClose: () => {
        modalClose();
      },
    });
  };

  useEffect(() => {
    infoAlert();
  }, []);

  return <div className="hidden">info modal</div>;
}
