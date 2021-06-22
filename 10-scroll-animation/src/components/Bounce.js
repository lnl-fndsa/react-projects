import { useLayoutEffect, useRef, useState } from "react";
import earth from "../img/earth.jpg";
import mars from "../img/mars.jpg";
import venus from "../img/venus.jpg";
const features = [
    {
        id: 1,
        title: "Accusamus aliquid maiores vitae neque.",
        text: "Id quod possimus fugit reiciendis tempora ducimus quae voluptas ex esse! Quibusdam quod exercitationem optio voluptates omnis quidem a illo doloremque.",
        image: earth,
        alt: "Terre"
    },
    {
        id: 2,
        title: "Alias veritatis reprehenderit.",
        text: "Quod deleniti adipisci possimus vel aliquam cumque nostrum animi ducimus delectus veritatis.",
        image: mars,
        alt: "Mars"
    },
    {
        id: 3,
        title: "Illo blanditiis sunt aut culpa.",
        text: "Inventore deleniti excepturi harum ipsum sunt itaque id magnam at amet nulla consequuntur.",
        image: venus,
        alt: "Venus"
    }
]
const Bounce = () => {

    const [bounce, setBounce] = useState({
        item1: "",
        item2: "",
        item3: "",
    });
    const bounceRef = useRef();

    const triggerBounce = () => {
        const top = bounceRef.current.getBoundingClientRect().top;
        let wHeight = window.innerHeight;

        if ((top - (wHeight / 2)) <= 0) {
            let items = bounceRef.current.childNodes;
            items.forEach((item, index) => {
                setTimeout(() => {
                    setBounce((prevProps) => {
                        return (
                            { ...prevProps, ["item" + (index + 1)]: "bounceIn" }
                        );
                    })
                }, 150 * (index + 1));
            })
        }
    }

    useLayoutEffect(() => {
        window.addEventListener("scroll", triggerBounce);
        return () => window.removeEventListener("scroll", triggerBounce);
    })

    return (
        <section className="bounce-section text-white">
            <h2 className="my-5 pt-5 text-center title-section">Bounce</h2>
            <div className="container" ref={bounceRef}>
                {
                    features.map((feature) => {
                        const { id, title, text, image, alt } = feature;
                        return (
                            <div key={id} className={`bounce ${bounce.['item' + id]}`}>
                                <div className={`${bounce.['item' + id]} row`}>
                                    <div className={`col-md-7 ${id === 2 && 'order-md-2'} d-flex align-items-center`}>
                                        <div>
                                            <h2 className="heading">{title}</h2>
                                            <p className="lead">{text}</p>
                                        </div>
                                    </div>
                                    <div className={`col-md-5 text-center ${id === 2 && 'order-md-1'}`}>
                                        <img src={image} alt={alt} className="img-fluid image" />
                                    </div>
                                </div>
                                <hr className="divider" />
                            </div>
                        );
                    })
                }
            </div>
        </section >
    );
}

export default Bounce;