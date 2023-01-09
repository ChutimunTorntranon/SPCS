import React from 'react';
import logo from '../icons/logologo.png';
import photo from '../icons/photo1.jpg';
function MainCustomer() {
	return (
		<div className='w-full bg-white py-16 px-4'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
				<div className='flex flex-col justify-center w-[500px]'>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>
						Our used customers
					</h1>
					<img className='w-[400px]' src={logo} alt='/'></img>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>
						Brother Auto Parts & Engineering Co.Ltd.
					</h1>

					<p className='text-2xl font-light text-black mt-3'>
						บริษัท บราเดอร์ ออโต้พาร์ทส์ แอนด์ เอ็นจิเนียริ่ง จำกัด
						1.ดำเนินธุรกิจผลิตชิ้นส่วนยานยนต์(โลหะ)
						ได้รับความไว้วางใจจากลูกค้าเช่น Mitsubishi, Honda, Nissan<br></br>
						2.ดำเนินการธุรกิจด้านอิเล็กทรอนิกส์(โลหะ) เช่น Hitachi,Emerson,Asia
						Pacific CIS
					</p>
				</div>
				<div className='max-w-[1000px]'>
					<img
						src={photo}
						alt=''
						className='w-[1000px] h-[500px] mt-[5%]'
					></img>
				</div>
			</div>
		</div>
	);
}

export default MainCustomer;
