import React from "react";
import "../assets/styles/components/modal.scss";

export const Modal = ({ handleConfirm, handleClose, show, title }) => {
    const showHideClassName = show
        ? "modal display-block"
        : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="modal-header">{title}</div>
                <div className="modal-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially...
                </div>
                <div className="modal-footer">
                    <button
                        className="modal-confirm"
                        onClick={handleConfirm}
                        type="button"
                    >
                        EVET
                    </button>
                    <button
                        className="modal-ignore"
                        onClick={handleClose}
                        type="button"
                    >
                        HAYIR
                    </button>
                </div>
            </section>
        </div>
    );
};
