const List = ({ items, deleteItem, editItem }) => {
    return (
        <div>
            {
                items.map((item) => {
                    const { id, title } = item;
                    return (
                        <article key={id} className="py-2 mb-1 row align-items-center">
                            <div className="col-md-8 text-title">
                                {title}
                            </div>
                            <div className="col-md-2">
                                <button type="button" className="btn btn-secondary" onClick={() => editItem(id)}>Modifier</button>
                            </div>
                            <div className="col-md-2">
                                <button type="button" className="btn btn-warning" onClick={() => deleteItem(id)}>Supprimer</button>
                            </div>
                        </article>
                    );
                })
            }
        </div>
    );
}

export default List;