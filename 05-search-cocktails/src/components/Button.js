const Button = ({ handleClick }) => {
    return (
        <button onClick={handleClick} className="btn btn-primary px-5">
            Rechercher un cocktail
        </button>
    )
}

export default Button;