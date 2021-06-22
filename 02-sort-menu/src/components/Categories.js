import { useState } from "react";

const Categories = ({ filterItems, categories }) => {

    const [active, setActive] = useState(0);

    const handleOnClick = (category, index) => {
        filterItems(category);
        setActive(index)
    }

    return (
        <div className="mb-5 col-md-6 mx-auto text-center sort">
            <div className="list-group list-group-horizontal">
                {categories.map((category, index) => {
                    return (
                        <button
                            type="button"
                            className={`text-capitalize list-group-item list-group-item-action ${index === active && 'active'}`}
                            key={index}
                            onClick={() => handleOnClick(category, index)}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
        </div>
    )
}

export default Categories;