import { useState, useLayoutEffect, useRef } from "react";

const dataBlog = [
    {
        id: 1,
        title: "consectetur",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde, consequatur consequuntur doloremque repellat ut quidem. Impedit amet architecto ratione voluptatem nisi sit modi libero autem dicta culpa. Dolores, perferendis."
    },
    {
        id: 2,
        title: "beatae",
        text: "Eius ab ipsum ducimus quis quo culpa beatae quisquam deleniti dicta, dolorum ratione animi voluptate excepturi rerum porro sit consectetur ipsam reprehenderit quos nihil. Libero ratione nihil quam cumque saepe."
    },
    {
        id: 3,
        title: "praesentium",
        text: "Aut quas modi voluptatum, debitis ut, neque maxime natus praesentium fugit enim sapiente alias dignissimos similique ratione facilis magni corporis accusamus architecto et aperiam at nam quis! Ad, mollitia perferendis."
    },
    {
        id: 4,
        title: "deleniti",
        text: "Eius ab ipsum ducimus quis quo culpa beatae quisquam deleniti dicta, dolorum ratione animi voluptate excepturi rerum porro sit consectetur ipsam reprehenderit quos nihil. Libero ratione nihil quam cumque saepe."
    },
    {
        id: 5,
        title: "doloremque",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde, consequatur consequuntur doloremque repellat ut quidem. Impedit amet architecto ratione voluptatem nisi sit modi libero autem dicta culpa. Dolores, perferendis."
    },
    {
        id: 6,
        title: "enim",
        text: "Aut quas modi voluptatum, debitis ut, neque maxime natus praesentium fugit enim sapiente alias dignissimos similique ratione facilis magni corporis accusamus architecto et aperiam at nam quis! Ad, mollitia perferendis."
    }
];
const Blog = () => {
    const [visible, setVisible] = useState({
        item1: "",
        item2: "",
        item3: "",
        item4: "",
    })

    const blogRef = useRef(null);

    const triggerEffect = () => {
        const top = blogRef.current.getBoundingClientRect().top;
        let wHeight = window.innerHeight;

        if ((top - (wHeight / 2)) <= 0) {
            let items = blogRef.current.childNodes;
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
        window.addEventListener("scroll", triggerEffect);
        return () => window.removeEventListener("scroll", triggerEffect);
    }, [])

    return (
        <section className="blog-section">
            <div className="container">
                <h2 className="my-5 text-center">Blog</h2>
                <div className="row justify-content-center" ref={blogRef}>
                    {
                        dataBlog.map((item) => {
                            const { id, title, text } = item;
                            return (
                                <div className={`px-3 py-2 m-1 col-lg-3 border blog ${visible.["item" + id] ? "is-showing" : ""}`} key={id}>
                                    <h3 className="text-capitalize text-center title">{title}</h3>
                                    <p className="text">{text}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Blog;