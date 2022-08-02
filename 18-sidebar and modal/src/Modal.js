import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context'

function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext()
  return (
    <div className={`modal-overlay ${isModalOpen && 'show-modal' }`} > {/* show-modal */}
        <div className="modal-container"> 
            <h3>modal content</h3>
            <button className="close-modal-btn" onClick={()=>closeModal()}>
                <FaTimes></FaTimes>
            </button>
        </div>
    </div>
  )
}

export default Modal