import { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Loading from "./Loading";
import SingleCocktail from "./SingleCocktail";
import ErrorMessage from "./ErrorMessage";

const Modal = () => {
    const { isModalOpen, closeModal, cocktailId } = useGlobalContext();
    const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        setLoading(true);
        setCocktail(null);
        const getCocktail = async () => {
            try {
                const response = await fetch(`${url}${cocktailId}`);
                const data = await response.json();

                if (data.drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0];

                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ];

                    const newCocktails = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients
                    }
                    setCocktail(newCocktails);
                } else {
                    setCocktail(null);
                }
                setLoading(false);

            } catch (error) {
                setLoading(false);
            }
        }
        getCocktail();
    }, [cocktailId])

    let content = cocktail ? <SingleCocktail cocktail={cocktail} /> : <ErrorMessage />;

    return (
        <div className={`d-flex align-items-center justify-content-center modal-overlay ${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
            <div className="col-8 modal-container">
                <button className="close-modal-btn" onClick={closeModal}>
                    <FontAwesomeIcon className="fa-2x" icon={faTimes} />
                </button>
                <div className="cocktail">
                    {
                        loading ? <Loading /> : content
                    }
                </div>
            </div>
        </div>
    );
}

export default Modal;