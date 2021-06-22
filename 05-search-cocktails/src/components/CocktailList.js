import { useGlobalContext } from "../context";
import Loading from "./Loading";

const CocktailsList = () => {
    const { cocktails, loading, openModal } = useGlobalContext();

    if (loading) {
        return <Loading />;
    }

    if (cocktails.length < 1) {
        return (
            <div className="mt-5 col-md-12 mx-auto text-center">
                <h2 className="section-title">Aucun cocktail ne correspond à vos critères</h2>
            </div>
        );
    }

    return (
        <section className="mt-5 react-search">
            <div className="row justify-content-center">
                {
                    cocktails.map((cocktail) => {
                        const { id, name, image, info, glass } = cocktail;
                        return (
                            <article key={id} className="m-3 p-2 col-md-2 text-center" onClick={() => openModal(id)}>
                                <div className="img-container">
                                    <img src={image} alt={name} className="img-fluid" width="50%" />
                                </div>
                                <div className="mt-2 cocktail-footer">
                                    <h3 className="h4 text-danger">{name}</h3>
                                    <h4 className="m-0 h5">{glass}</h4>
                                    <p className="m-0">{info}</p>
                                </div>
                            </article>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default CocktailsList;