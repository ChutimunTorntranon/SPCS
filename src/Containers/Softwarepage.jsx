import React from 'react';
import dashboard from '../icons/dashboard.png';
import paperless from '../icons/paperless.png';
import realTime from '../icons/real-time.png';
import filter from '../icons/filter.png';
import cloud from '../icons/cloud.png';
import cheap from '../icons/loss1.png';
function Softwarepage() {
	return (
		<div className='w-full py-16 px-4 bg-white'>
			<div className='max-w-[1240px] mx-auto grid gap-4'>
				<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
					ซอฟต์แวร์ของเราบริการด้านไหนบ้าง?
				</h1>
				<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
					Software as a service
				</h1>
				<div className='grid md:grid-cols-6 gap-5'>
					<div className='text-center shrink'>
						<img src={dashboard} alt='' />
						<h1>Dashboard System</h1>
						<h2>ระบบแดชบอร์ด</h2>
					</div>
					<div className='text-center shrink'>
						<img src={paperless} alt='' />
						<h1>Paperless</h1>
						<h2>
							ลดการใช้กระดาษ<br></br>อย่างไม่จำเป็นในองค์กร
						</h2>
					</div>
					<div className='text-center shrink'>
						<img src={realTime} alt='' />
						<h1>Real-time</h1>
						<h2>
							สามารถ Monitor และ Control สายการผลิต<br></br>ได้ถูกต้องรวดเร็ว
						</h2>
					</div>
					<div className='text-center shrink'>
						<img src={filter} alt='' />
						<h1>Search and Filter</h1>
						<h2>สืบค้นข้อมูลที่มากมายด้วยระบบ Search and Filter</h2>
					</div>
					<div className='text-center shrink'>
						<img src={cloud} alt='' />
						<h1>Cloud Based Technology</h1>
						<h2>
							นำข้อมูลจากการเก็บแบบ Local มาจัดเก็บใน Cloud based Service แทน
						</h2>
					</div>
					<div className='text-center shrink'>
						<img src={cheap} alt='' />
						<h1>Subscription-based Model</h1>
						<h2>
							ระบบจ่ายรายเดือน <br></br>ในราคาที่เหมาะสม
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Softwarepage;
