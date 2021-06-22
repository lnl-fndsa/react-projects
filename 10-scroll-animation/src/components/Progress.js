import { useLayoutEffect, useRef, useState } from "react";

const ProgressBar = ({ props, progressRef }) => {
    const { title, percent } = props;
    const [style, setStyle] = useState({});

    const triggerProgress = () => {
        const top = progressRef.current.getBoundingClientRect().top;
        let wHeight = window.innerHeight;
        if ((top - (wHeight / 2)) <= 0) {
            setTimeout(() => {
                const newStyle = {
                    width: `${percent}%`
                }
                setStyle(newStyle);
            }, 200);
        }
    }

    useLayoutEffect(() => {
        window.addEventListener('scroll', triggerProgress);
        return () => window.removeEventListener('scroll', triggerProgress);
    }, [])

    return (
        <div className="my-5 skillbar">
            <div className="row">
                <h2 className="col-lg-6 fs-5 text-capitalize skillbar-title ">{title}</h2>
                <h2 className="col-lg-6 text-end skillbar-percent fs-5">{percent}%</h2>
            </div>
            <div className="bar-container">
                <div className="bar" style={style}></div>
            </div>
        </div>
    );
}

const Progress = () => {
    const data = [
        {
            id: 1,
            title: "reiciendis eligendi",
            percent: 75
        },
        {
            id: 2,
            title: "odio dicta",
            percent: 65
        },
        {
            id: 3,
            title: "sunt facere",
            percent: 85
        }
    ]

    const [width, setWidth] = useState(0);
    const progressRef = useRef(null);

    // const toto = () => {
    //     const top = progressRef.current.getBoundingClientRect().top;
    //     let wHeight = window.innerHeight;
    //     if ((top - (wHeight / 2)) <= 0) {
    //         let items = progressRef.current.childNodes;
    //         items.forEach((item, index) => {

    //         });
    //     }
    // }

    // useLayoutEffect(() => {
    //     window.addEventListener('scroll', toto);
    //     return () => window.removeEventListener('scroll', toto);
    // }, [])

    return (
        <section className="progress-section">
            <h2 className="my-5 pt-5 text-center title-section">Progress</h2>
            <div className="container progressBar-container" ref={progressRef}>
                {
                    data.map((item) => {
                        return (
                            <ProgressBar key={item.id} props={item} progressRef={progressRef} />
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Progress;