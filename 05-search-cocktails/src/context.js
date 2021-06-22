import { useState, useContext, useEffect, createContext, useCallback } from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setCocktails] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cocktailId, setCocktailId] = useState();

    const fetchDrinks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}${searchTerm}`);
            const data = await response.json();
            const { drinks } = data;

            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass
                    } = item;

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass
                    };
                })
                setCocktails(newCocktails);
            } else {
                setCocktails([])
            }

            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm])

    const openModal = (id) => {
        setIsModalOpen(true);
        setCocktailId(id);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    useEffect(() => {
        fetchDrinks();
    }, [searchTerm, fetchDrinks])

    return (
        <AppContext.Provider value={{ loading, cocktails, setSearchTerm, isModalOpen, openModal, closeModal, cocktailId }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };