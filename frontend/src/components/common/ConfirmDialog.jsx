function ConfirmDialog({

    open,

    title,

    message,

    onConfirm,

    onCancel

}){

    if(!open) return null;

    return(

        <div className="modal-overlay">

            <div className="modal">

                <h2>{title}</h2>

                <p>{message}</p>

                <div className="modal-buttons">

                    <button
                        className="btn-cancel"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>

                    <button
                        className="btn-delete"
                        onClick={onConfirm}
                    >
                        Eliminar
                    </button>

                </div>

            </div>

        </div>

    );

}

export default ConfirmDialog;