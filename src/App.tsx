import { useState } from "react";
import {
	Conocenos,
	ContactSection,
	DownloadSection,
	Footer,
	HeroSection,
	Navbar,
	PlanesSection,
	SupportSection,
} from "./components";
import "./App.css";
import ServicesSection from "./components/ServicesSection";

function App() {
	//*ESTADO
	//para el menú lateral
	const [isOpen, setIsOpen] = useState(false);

	//*HANDLER
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Navbar isOpen={isOpen} toggle={toggle} />
			<HeroSection />
			<Conocenos />
			<ServicesSection />
			<PlanesSection />
			<DownloadSection />
			<SupportSection />
			<ContactSection />
			<Footer />
		</>
	);
}

export default App;
