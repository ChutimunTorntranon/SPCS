import React from 'react';
import cloud from '../icons/cloud2.png';
import cheap from '../icons/loss1.png';
function CloudSubpage() {
	return (
		<div className='w-full bg-white py-16 px-4 '>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
				<div className='flex flex-col'>
					<img className='w-[400px]' src={cloud} alt='/' />
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black p-3 EngFont'>
						Cloud Based
					</h1>
					<p className='text-black font-bold md:text-4xl sm:text-3xl text-2xl p-3 EngFont'>
						Technology{' '}
					</p>
					<p className='text-2xl font-light text-black p-3 ThaiFont'>
						การพัฒนาโรงงานเป็น <span className='EngFont'>Smart Factory</span>{' '}
						โดยการนำ&nbsp;
						<span className='EngFont'>Cloud based Technology</span>
						&nbsp;เข้ามาโดยใช้โดยการจัดเก็บใน{' '}
						<span className='EngFont'>Cloud based service</span>{' '}
						แทนการจัดเก็บแบบ <span className='EngFont'>Local</span>
						ซึ่งทำให้มีความมั่นใจในความปลอดภัยของข้อมูลแฃะความมั่นคงของ System
						ได้มากกว่า
					</p>
				</div>
				<div className='flex flex-col '>
					<img className='w-[400px]' src={cheap} alt='/' />
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black p-3 EngFont'>
						Subscription
					</h1>
					<p className='text-black font-bold md:text-4xl sm:text-3xl text-2xl p-3 EngFont'>
						based Model{' '}
					</p>
					<p className='text-2xl font-light text-black p-3 ThaiFont'>
						ระบบจ่ายรายเดือน ไม่ต้องลงทุนสูงสามารถจ่ายในราคาที่เหมาะสมของระบบ
						<span className='EngFont'>Pay-As-You-Model</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default CloudSubpage;
