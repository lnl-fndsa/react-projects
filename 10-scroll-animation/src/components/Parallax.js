import orion from "../img/orion.jpg";
import eagle from "../img/eagle.jpg";
import { useEffect, useState } from "react";

const Parallax = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <section className="parallax-section">
            <h2 className="my-5 pt-5 text-center title-section text-white display-6">Parallax</h2>
            <div className="row py-5 px-4 d-flex align-items-center justify-content-center bloc-container">
                <div className="p-0 col-12 col-lg-6 d-flex align-items-center justify-content-center bloc-left">
                    <img src={orion} alt="" className="img-fluid" />
                </div>
                <div
                    className="col-12 col-lg-4 d-flex align-items-center justify-content-center bloc-right"
                    style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
                >
                    <h2 className="display-5">Nébuleuse d'Orion</h2>
                </div>
            </div>
            <div className="row py-5 px-4 d-flex align-items-center justify-content-center bloc-container">
                <div className="p-0 col-12 col-lg-6 d-flex align-items-center justify-content-center bloc-left">
                    <img src={eagle} alt="" className="img-fluid" />
                </div>
                <div
                    className="col-12 col-lg-4 d-flex align-items-center justify-content-center bloc-right"
                    style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
                >
                    <h2 className="display-5">Nébuleuse de l'Aigle</h2>
                </div>
            </div>

        </section>
    );
}

export default Parallax;