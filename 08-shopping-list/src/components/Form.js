const Form = ({ handleSubmit, isEmpty, isEditing, name, setName }) => {
    return (
        <form className="" onSubmit={handleSubmit}>
            {
                isEmpty &&
                <p className="text-danger">Veuillez entrer une valeur</p>
            }
            <div className="row justify-content-center g-0">
                <div className="col-md-10">
                    <input type="text" className="form-control" placeholder="Exemple: Pommes, Laitue, Oignons ..." value={name} onChange={(ev) => setName(ev.target.value)} />
                </div>
                <div className="col-md-2">
                    <button type="submit" className="btn btn-primary ">
                        {isEditing ? 'Modifier' : 'Ajouter'}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Form;