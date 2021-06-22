const Card = ({ info, getInfo, name, country, email, username, phone, image }) => {
    return (
        <article className="col-md-8 col-lg-6 mx-auto text-center">
            <div className="py-5 px-2 article-header">
                <div className="img-container">
                    <img src={image} alt={name} />
                </div>
                <h2 className="my-3 h1">{name}</h2>
                <h3 className="m-0 h2 text-white">
                    {info ? info : email}
                </h3>
            </div>
            <div className="py-3 article-footer">
                <button onClick={() => getInfo(email)}>
                    <span>Email</span>
                </button>
                <button onClick={() => getInfo(username)}>
                    <span>Username</span>
                </button>
                <button onClick={() => getInfo(country)}>
                    <span>Country</span>
                </button>
                <button onClick={() => getInfo(phone)}>
                    <span>Phone</span>
                </button>
            </div>
        </article>
    );
}

export default Card;