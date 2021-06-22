import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Nav from "./components/Nav";
import Parallax from "./components/Parallax";
import Timeline from "./components/Timeline";
import Bounce from "./components/Bounce";
import Blog from "./components/Blog";
import Progress from "./components/Progress";

function App() {
	return (
		<main>
			<h1 className="py-5 mb-5 text-center">Animation onScroll</h1>
			<section className="page">
				<div className="container pt-2 page-container">
					<Nav />
					<div className="py-5 my-5 text-center arrow-container">
						<div className="arrow-text">
							Scroll down
							<p className="arrow"><FontAwesomeIcon className="fa-2x" icon={faChevronDown} /></p>
						</div>
					</div>
					<Parallax />
					<Bounce />
					<Timeline />
					<Blog />
					<Progress />
					<footer className="py-5 my-5 footer-section">
						<p className="text-center">Footer</p>
					</footer>
				</div>
			</section>
		</main>
	);
}

export default App;
