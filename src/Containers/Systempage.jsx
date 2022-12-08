import React from 'react';

function Systempage() {
	return (
		<div className='w-full bg-[#D4E3CD] py-16 px-4'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
				<div className='flex flex-col justify-center'>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
						System Overview
					</h1>
					<p className='text-[#8EACC1] font-bold md:text-4xl sm:text-3xl text-2xl'>
						FLOW SPCS{' '}
					</p>
					<p className='text-2xl font-light'>
						Production Data <br></br>
						Defect Data<br></br>
						Operators Data<br></br>
						Maintenance Data <br></br>
						Inventory Data<br></br>
						Delivery and Transport Data
					</p>
				</div>
				<img className='w-[800px] mx-auto my-4' src='' alt='/' />
			</div>
		</div>
	);
}

export default Systempage;
