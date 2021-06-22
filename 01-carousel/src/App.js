import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import data from "./dataSlider";

function App() {

	const [slider, setSlider] = useState(data);
	const [index, setIndex] = useState(0);
	const [imageBgc, setImageBgc] = useState(null);
	const [timer, setTimer] = useState(false);

	const newSlider = (newIndex) => {
		setIndex(newIndex);
		setImageBgc(null);
	}

	useEffect(() => {
		const lastIndex = slider.length - 1;

		if (index < 0) {
			setIndex(lastIndex);
		}

		if (index > lastIndex) {
			setIndex(0);
		}

	}, [index, slider])

	useEffect(() => {
		let sliderTimer = setInterval(() => {
			setIndex(index + 1)
		}, 5000);

		setImageBgc(null);

		if (timer) {
			clearInterval(sliderTimer);
		}
		return () => clearInterval(sliderTimer);

	}, [index, timer])

	return (
		<main>
			<h1 className="py-5 mb-5 text-center">Diaporama</h1>
			<section className="row g-0 py-3 slider-container">
				<div className="col-12 col-lg-10 slider" onMouseEnter={() => setTimer(true)} onMouseLeave={() => setTimer(false)}>
					{
						slider.map((item, indexItem) => {
							const { id, category, images } = item;
							let position = "nextSlide";

							if (indexItem === index) {
								position = "activeSlide";
							}

							if (indexItem === index - 1 || (index === 0 && indexItem === slider.length - 1)) {
								position = "lastSlide";
							}

							let img = imageBgc ? imageBgc : images[0];

							return (
								<article key={id} className={position}>
									<div className="row g-0">
										<div className="col-12 col-lg-8 d-flex align-items-center justify-content-center image-container">
											<img src={img} alt={category} className="image" />
										</div>
										<div className="col-12 col-lg-4 d-flex align-items-center thumbnails-container">
											<div className="row g-2 px-2">
												{
													images.map((image, indexImage) => {
														return (
															<div className="col-3 col-lg-6" key={indexImage}>
																<img src={image} alt={category} className="thumbnail" onClick={() => setImageBgc(image)} onMouseOver={() => setImageBgc(image)} />
															</div>
														);
													})
												}
											</div>
										</div>
									</div>
								</article>
							)
						})
					}
				</div>
				<div className="g-0 col-lg-1 order-first d-flex align-items-center justify-content-end prev-container">
					<button className="prev" onClick={() => newSlider(index - 1)}>
						<FontAwesomeIcon className="fa-2x" icon={faChevronLeft} />
					</button>
				</div>
				<div className="g-0 col-lg-1 order-last d-flex align-items-center justify-content-start next-container">
					<button className="next" onClick={() => newSlider(index + 1)}>
						<FontAwesomeIcon className="fa-2x" icon={faChevronRight} />
					</button>
				</div>
			</section>
		</main>
	);
}

export default App;
