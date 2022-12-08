import React from 'react';
import Typed from 'react-typed';
function Homepage() {
	return (
		<div className='text-black bg-main'>
			<div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
				<p className='text-[#8EACC1] font-bold p-2'>DATA TRANSFORMATION</p>
				<h1 className='md:text-7xl sm:text-6xl text-xl font-bold md:py-6'>
					SUISEI <br></br>CONTROL SYSTEM
				</h1>
				<div className='flex justify-center items-center'>
					<p className='md:text-2xl sm:text-xl text-xl font-bold'>
						for production control &nbsp;
					</p>
					<Typed
						className='md:text-2xl sm:text-xl text-xl font-bold'
						strings={['DIGITAL', 'SAAS', 'DEVOPS', 'CLOUD BASED']}
						typeSpeed={120}
						backSpeed={140}
						loop
					/>
				</div>
				<p className='md:text-2xl text-xl font-bold text-gray-500'>
					able to monitor and control the production line accurately and quickly
				</p>
			</div>
		</div>
	);
}

export default Homepage;
