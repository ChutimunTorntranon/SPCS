import React from 'react';
import LogoCom from '../team/Logo.png';
function Footer2() {
	return (
		<div>
			<footer class='p-4 bg-white rounded-lg shadow-2xl md:px-6 md:py-8 dark:bg-gray-900'>
				<div class='sm:flex sm:items-center sm:justify-center'>
					<img
						src={LogoCom}
						className='h-8 mr-3 w-[150px] h-[120px]'
						alt='Flowbite Logo'
					/>
					<p className='text-body-color text-base'>
						&nbsp;&nbsp;ที่อยู่ : Bunnag Industrial Technologies And Software
						<br></br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10
						รามอินทรา 117 แยก 2 ถนนรามอินทรา <br></br>แขวงมีนบุรี เขตมีนบุรี
						กรุงเทพมหานคร 10510
						<br></br>
					</p>
					<p className='text-body-color text-base ml-10'>
						Phone :&nbsp;083-101-8704&nbsp;&nbsp;คุณ&nbsp;ณัฐดนัย (ฟิวส์)
						<br></br>
						Email : sale.software@baethai.com<br></br>
						IDLine &nbsp;&nbsp;: sale.bitsoft
					</p>
				</div>
				<hr class='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<span class='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
					© 3{' '}
					<a href='https://flowbite.com/' class='hover:underline'>
						SPCS™
					</a>
					. All Rights Reserved.
				</span>
			</footer>
		</div>
	);
}

export default Footer2;
