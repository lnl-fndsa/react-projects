import { useLayoutEffect, useRef, useState } from "react";

const datatimeline = [
    {
        id: 1,
        title: "toto",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae ex aperiam quis, placeat maxime quos suscipit exercitationem officia odio quam minima, quod deserunt quia esse nostrum. Excepturi, dolor.",
        date: "01/01/2021"
    },
    {
        id: 2,
        title: "toto",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae ex aperiam quis, placeat maxime quos suscipit exercitationem officia odio quam minima, quod deserunt quia esse nostrum. Excepturi, dolor.",
        date: "18/01/2021"
    },
    {
        id: 3,
        title: "toto",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae ex aperiam quis, placeat maxime quos suscipit exercitationem officia odio quam minima, quod deserunt quia esse nostrum. Excepturi, dolor.",
        date: "03/02/2021"
    },
    {
        id: 4,
        title: "toto",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae ex aperiam quis, placeat maxime quos suscipit exercitationem officia odio quam minima, quod deserunt quia esse nostrum. Excepturi, dolor.",
        date: "12/02/2021"
    },
];

const Timeline = () => {
    const [visible, setVisible] = useState({
        item1: "",
        item2: "",
        item3: "",
        item4: "",
    })

    const ulRef = useRef(null);

    const triggerVisibility = () => {
        const top = ulRef.current.getBoundingClientRect().top;
        let wHeight = window.innerHeight;

        if ((top - (wHeight / 2)) <= 0) {
            let items = ulRef.current.childNodes;
            items.forEach((item, index) => {
                setTimeout(() => {
                    setVisible((prevProps) => {
                        return (
                            { ...prevProps, ["item" + (index + 1)]: "is-showing" }
                        );
                    })
                }, 150 * (index + 1));
            })
        }
    }

    useLayoutEffect(() => {
        window.addEventListener('scroll', triggerVisibility);
        return () => window.removeEventListener('scroll', triggerVisibility);
    }, [])

    return (
        <section className="timeline-section">
            <h2 className="my-5 text-center">Timeline</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <ul className="timeline" ref={ulRef}>
                            {
                                datatimeline.map((item) => {
                                    const { id, title, text, date } = item;
                                    return (
                                        <li key={id} className={`ps-4 ${visible.["item" + id] ? "is-showing" : ""}`}>
                                            <span className="h4 text-capitalize list-title">{title}</span>
                                            <span className="float-end text-muted">{date}</span>
                                            <p className="mt-2">{text}</p>
                                            <hr />
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;