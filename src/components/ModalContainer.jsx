import React from 'react'
import { createPortal } from 'react-dom'
import useModalStore from '../utils/helpers/useModalStore'

const ModalContainer = () => {
    const isModalOpen = useModalStore((state) => state.isModalOpen);
    const modalContent = useModalStore((state) => state.modalContent);

    const modalRoot = document.getElementById('portal-root');

    return createPortal(<>{isModalOpen && modalContent}</>, modalRoot);
};

export default ModalContainer;