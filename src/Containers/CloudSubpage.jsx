import React from 'react';
import cloud from '../icons/cloud2.png';
import cheap from '../icons/loss1.png';
function CloudSubpage() {
	return (
		<div className='w-full bg-white py-16 px-4 '>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
				<div className='flex flex-col justify-center'>
					<img className='w-[400px]' src={cloud} alt='/' />
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>
						Cloud Based
					</h1>
					<p className='text-black font-bold md:text-4xl sm:text-3xl text-2xl'>
						Technology{' '}
					</p>
					<p className='text-2xl font-light text-black'>
						การพัฒนาโรงงานเป็น Smart Factory โดยการนำ Cloud based Technology
						เข้ามาโดยใช้โดยการจัดเก็บใน Cloud based service แทนการจัดเก็บแบบ
						Local ซึ่งทำให้มีความมั่นใจในความปลอดภัยของข้อมูลแฃะความมั่นคงของ
						System ได้มากกว่า
					</p>
				</div>
				<div className='flex flex-col justify-center'>
					<img className='w-[400px]' src={cheap} alt='/' />
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>
						Subscription
					</h1>
					<p className='text-black font-bold md:text-4xl sm:text-3xl text-2xl'>
						based Model{' '}
					</p>
					<p className='text-2xl font-light text-black'>
						ระบบจ่ายรายเดือน ไม่ต้องลงทุนสูงสามารถจ่ายในราคาที่เหมาะสมของระบบ
						Pay-As-You-Model
					</p>
				</div>
			</div>
		</div>
	);
}

export default CloudSubpage;
