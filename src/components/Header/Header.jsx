import React, {   useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import logo from "./../../assets/logo/logo.webp";


function Header() {
	let navLinkRef = useRef(null);
	let headerRef = useRef(null);
	let btn1Ref = useRef(null);
	let btn2Ref = useRef(null);
	

	function drop() {
		navLinkRef.current.classList.toggle(styles.rightDrop);
		headerRef.current.classList.toggle(styles.HeaderOpen);
		btn1Ref.current.classList.toggle(styles.btn1);
		// btn2Ref.current.classList.toggle(styles.btn2);
		btn2Ref.current.classList.toggle(styles.btn2);
	}

	return (
		<>
			<header
				ref={headerRef}
				className={`${styles.Header} ${styles.HeaderDrop}`}
			>
				<NavLink
					to="/"
					onClick={() => {
						if (headerRef.current.classList.contains(styles.HeaderOpen)) drop();
						window.isHome = false;
					}}
				>
					<img className={styles.left} src={logo} alt="Logo" />
				</NavLink>
				<div ref={navLinkRef} className={`${styles.right} ${styles.rightDrop}`}>
					<NavLink
						className={styles.header_links}
						to="/"
						exact
						activeClassName={styles.header_active_links}
						onClick={() => {
							if (headerRef.current.classList.contains(styles.HeaderOpen))
								drop();
							window.isHome = false;
						}}
					>
						Home
					</NavLink>
					<NavLink
						className={styles.header_links}
						to="/editor"
						exact
						activeClassName={styles.header_active_links}
						onClick={() => {
							if (headerRef.current.classList.contains(styles.HeaderOpen))
								drop();
							window.isHome = false;
						}}
					>
						Editor
					</NavLink>
					<NavLink
						className={`${styles.header_links} /*${styles.tagged}*/`}
						to="/mediamanip"
						exact
						activeClassName={styles.header_active_links}
						onClick={() => {
							if (headerRef.current.classList.contains(styles.HeaderOpen))
								drop();
							window.isHome = false;
						}}
					>
						
					Convertor
					</NavLink>
				</div>
				<div className={styles.hamburger} onClick={() => drop()}>
					<div className={styles.menu_btn}>
						<div ref={btn1Ref} className={styles.btn_line}></div>
						<div ref={btn2Ref} className={styles.btn_line}></div>
						{/* <div ref={btn3Ref} className={styles.btn_line}></div> */}
					</div>
				</div>
			</header>
			
		</>
	);
}

export default Header;
