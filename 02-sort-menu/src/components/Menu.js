const Menu = ({ items }) => {
    return (
        <div className="row container mx-auto p-5 ">
            {
                items.map((item) => {
                    const { id, title, price, img, desc } = item;
                    return (
                        <article key={id} className="mb-4 col-md-6">
                            <div className="row m-1">
                                <div className="col-lg-5 p-0 image-container">
                                    <img src={img} alt={title} className="image" />
                                </div>
                                <div className="pt-2 col-lg-7 info">
                                    <div className="row">
                                        <div className="col-md-10">
                                            <h2 className="h4">{title}</h2>
                                        </div>
                                        <div className="col-md-2">
                                            <p>{price}€</p>
                                        </div>
                                    </div>
                                    <p className="text-muted">{desc}</p>
                                </div>
                            </div>
                        </article>
                    );
                })
            }
        </div>
    )
}

export default Menu;