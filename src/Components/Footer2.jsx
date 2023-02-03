import React from 'react';
import LogoCom from '../team/MicrosoftTeams-image (1).png';
function Footer2() {
	return (
		<div>
			<footer class='p-4 bg-white rounded-lg shadow-2xl md:px-6 md:py-8 dark:bg-gray-900'>
				<div class='sm:flex sm:items-center sm:justify-center '>
					<img
						src={LogoCom}
						className='h-8 mr-3 w-[150px] h-[140px] mx-[7rem]'
						alt='Flowbite Logo'
					/>
					<p className='text-body-color text-base p-3 EngFont'>
						<br></br>&nbsp;&nbsp;
						<strong>
							BUNNAG INDUSTRIAL TECHNOLOGIES AND SOFTWARE CO.,LTD.
						</strong>
						<br></br>
						&nbsp;&nbsp;Address : 10 Soi Ramintra 117 yeak 2 Ramintra Rd.
						<br></br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minburi
						, Minburi , Bangkok 10510
						<br></br>
					</p>
					<p className='text-body-color text-base ml-10 mt-6 p-3 EngFont'>
						  Mobile  : 083-101-8704 Mr.Nutdanai Pulkert (Few)
						<br></br>
						&nbsp;&nbsp;E-mail   : sales.software@baethai.com<br></br>  ID Line
						 : sale.bitsoft
					</p>
				</div>
				<hr class='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<span class='block text-sm text-gray-500 sm:text-center dark:text-gray-400 EngFont'>
					© 3{' '}
					<a href='https://flowbite.com/' class='hover:underline'>
						BITSOFT™
					</a>
					. All Rights Reserved.
				</span>
			</footer>
		</div>
	);
}

export default Footer2;
