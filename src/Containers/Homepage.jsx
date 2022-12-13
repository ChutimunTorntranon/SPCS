import React from 'react';
import Typed from 'react-typed';
function Homepage() {
	return (
		<div className='text-black bg-main'>
			<div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-left flex flex-col justify-center p-3'>
				{/* <p className='text-[#8EACC1] font-bold p-2'>DATA TRANSFORMATION</p> */}
				<h1 className='md:text-7xl sm:text-6xl text-[40px] font-bold md:py-6 md:mt-[850px] md:ml-[-650px] '>
					SUISEI CONTROL <br></br>SYSTEM
				</h1>
				<div className='flex justify-left'>
					<Typed
						className='md:text-7xl sm:text-6xl text-[30px] font-bold  md:ml-[-650px]'
						strings={[
							'DIGITAL',
							'SAAS',
							'DEVOPS',
							'CLOUD BASED',
							'DATA TRANSFORMATION',
						]}
						typeSpeed={120}
						backSpeed={140}
						loop
					/>
				</div>
			</div>
		</div>
	);
}

export default Homepage;
