import { useState, useRef } from "react";
import { useGlobalContext } from "../context";
import Button from "./Button";
import Form from "./Form";

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = useRef('');
    const [isToggle, setIsToggle] = useState(true);

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    const handleClick = () => {
        setIsToggle(false);
    }

    const handleClose = () => {
        setIsToggle(true);
        setSearchTerm('');
    }

    const toggle = isToggle ? <Button handleClick={handleClick} /> : <Form handleClose={handleClose} searchCocktail={searchCocktail} searchValue={searchValue} handleSubmit={handleSubmit} />

    return (
        <section>
            <div className="col-md-6 mx-auto text-center">
                {toggle}
            </div>
        </section>
    );
}

export default SearchForm;