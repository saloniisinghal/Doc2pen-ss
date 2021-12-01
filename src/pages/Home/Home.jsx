import React, { useEffect } from "react";
import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";
import Banner from "./sections/Banner/Banner";
import About from "./sections/About/About";
import Contact from "./sections/Contact/ContactUs";
import ScrollToTop from "../../components/ScrollToTopButton/ScrollToTopButton";
import style from "./home.module.scss";

function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="HomePage">
			<MetaComponent
				title={metaData.home.title}
				description={metaData.home.description}
				keywords={metaData.home.keywords}
			/>
			<Banner />
			<About />
			<Contact />
			<div className={style.btnWrapper}>
				<ScrollToTop />
			</div>
		</div>
	);
}

export default Home;
