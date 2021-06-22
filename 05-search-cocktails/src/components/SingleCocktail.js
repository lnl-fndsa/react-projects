import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';

const SingleCocktail = ({ cocktail }) => {
    const {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients
    } = cocktail;

    return (
        <div className="p-3 modal-info">
            <h2 className="mb-3 display-6">
                <FontAwesomeIcon className="me-3 text-danger" icon={faCocktail} />
                Recipes
            </h2>
            <div className="row cocktail-detail">
                <div className="mb-2 col-md-4">
                    <img src={image} alt={name} className="img-fluid cocktail-image" />
                </div>
                <div className="col-md-8 pe-5 cocktail-info">
                    <h2 className="pb-2">{name}</h2>
                    <h5 className="m-0 text-muted">{category}</h5>
                    <h5 className="mb-4 text-muted">{info}</h5>
                    <div className="row">
                        <div className="col-md-8">
                            <dl>
                                <dt className="col-sm-3">Ingredients</dt>
                                <dd>
                                    <ul>
                                        {
                                            ingredients.map((ingredient, index) => {
                                                return ingredient ? <li key={index} className="">{ingredient}</li> : null
                                            })
                                        }
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div className="col-md-4 ps-2">
                            <dl>
                                <dt className="col-sm-3">Glass</dt>
                                <dd className="col-sm-9">{glass}</dd>
                            </dl>
                        </div>
                    </div>
                    <div>
                        <dl>
                            <dt>Instructions</dt>
                            <dd>{instructions}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleCocktail;