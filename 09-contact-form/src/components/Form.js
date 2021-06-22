import useForm from "../utils/useForm";
import validate from "../utils/validate";

const Form = ({ submitForm }) => {

    const { values, message, handleChange, handleBlur, handleChangeArea, max, textLimitRef, textLimit, handleSubmit, errors } = useForm(submitForm, validate);

    return (
        <div className="py-4 px-5 col-lg-8 mx-auto form">
            <p className="fw-bold m-0">Vous souhaitez nous contacter ! Rien de plus simple en remplissant ce formulaire.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="lastName" className="my-2">Nom</label>
                    <input type="text" className="form-control" name="lastName" id="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
                    {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="firstName" className="my-2">Prénom</label>
                    <input type="text" className="form-control" name="firstName" id="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
                    {errors.firstName && <p className="error-message">{errors.firstName}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="my-2">Email</label>
                    <input type="text" className="form-control" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
                <div className="mb-2 form-group">
                    <label htmlFor="message" className="my-2">Votre message</label>
                    <textarea name="message" id="message" cols="30" rows="10" className="form-control" maxLength={max} value={message} onChange={handleChangeArea} onBlur={handleBlur}></textarea>
                    {errors.message && <p className="error-message">{errors.message}</p>}
                    <small ref={textLimitRef}>{textLimit}</small>
                </div>
                <div className="mt-3 d-grid">
                    <button type="submit" className="py-2 btn btn-primary">Envoyer</button>
                </div>
            </form>
        </div>
    );
}

export default Form;