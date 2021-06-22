import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Form = ({ handleClose, searchValue, searchCocktail, handleSubmit }) => {
    return (
        <div className="row g-0 align-items-center">
            <form action="" className="col-md-10" onSubmit={handleSubmit}>
                <div>
                    <input className="form-control" type="text" name="name" id="name" ref={searchValue} onChange={searchCocktail} />
                </div>
            </form>
            <div className="col-md-2">
                <button onClick={handleClose} className="btn px-4 py-0">
                    <FontAwesomeIcon className="fa-2x" icon={faTimes} />
                </button>
            </div>
        </div>
    );
}

export default Form;