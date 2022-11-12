import "./Modal.css";

function Modal({ question, close, confirm }) {
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{question}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={close}>
            Cancel
          </button>
          <button className="btn" onClick={confirm}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal;
