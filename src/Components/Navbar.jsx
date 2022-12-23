import React from 'react';
import { useRef } from 'react';

import '../index.css';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};

	return (
		<header className=''>
			<img src='edit-logo.png' alt='' className=''></img>
			<nav ref={navRef}>
				{/* <a href='/#' className='hover-underline-animation'>
					Home
				</a>

				<a
					href='/Customers'
					className='hover-underline-animation cursor-pointer'
				>
					Main Customers
				</a> */}

				<button className='nav-btn nav-close-btn' onClick={showNavbar}>
					Back
				</button>
			</nav>
			<button className='nav-btn hover:text-black' onClick={showNavbar}>
				Menu
			</button>
		</header>
	);
}

export default Navbar;
