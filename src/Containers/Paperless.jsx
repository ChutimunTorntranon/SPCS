import React from 'react';
import paperless from '../icons/paperless2.png';
import paperlessgif from '../Carusel Dashborad/paperlessgif.gif';
function Paperless() {
	return (
		<div className='w-full bg-white py-16 px-4 '>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
				<div className='flex flex-col justify-center w-[450px]'>
					<img className='w-[450px]' src={paperless} alt='/' />
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>
						Paperless
					</h1>
					<p className='text-black font-bold md:text-4xl sm:text-3xl text-2xl'>
						Manufacturing{' '}
					</p>
					<p className='text-2xl font-light text-black'>
						ยกเลิกการใช้กระดาษในการลงบันทึกข้อมูลสายการผลิต<br></br>
						รวมถึงลดความผิดพลาดของการลงบันทึก
					</p>
				</div>
				<div className='max-w-[800px]'>
					<img
						src={paperlessgif}
						alt=''
						className='w-[800px] h-[550px] mt-[5%]'
					></img>
				</div>
			</div>
		</div>
	);
}

export default Paperless;
