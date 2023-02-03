import React from 'react';
import material from '../icons/new-materails.jpg';
import planning from '../assets/planning2.jpg';
import production from '../assets/production.jpg';
import quality from '../assets/QC.jpg';
import warehouse from '../assets/warehouse.jpg';
import Logis from '../assets/Logis.jpg';
function Systempage() {
	return (
		<div className='w-full py-16 px-4'>
			<div className='max-w-[1240px] mx-auto grid gap-4'>
				<div className='flex flex-col justify-center'>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold p-3 EngFont'>
						System Overview
					</h1>
					<p className='text-[#8EACC1] font-bold md:text-4xl sm:text-3xl text-2xl p-3 EngFont'>
						FLOW SPCS{' '}
					</p>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold p-3 ThaiFont'>
						<span className='EngFont'>SPCS</span> ของเรามีอะไรบ้าง?
					</h1>
				</div>
				<div className='grid md:grid-cols-3 gap-3'>
					<div className='max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink'>
						<img className='rounded-t-lg bg-gray-300' src={material} alt='' />

						<div className='p-5'>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-1 EngFont'>
								Material
							</h5>

							<p className='mb-3 font-normal text-gray-700 dark:text-gray-400 p-1 ThaiFont'>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เรามีระบบการจัดการและควบคุมวัตถุดิบ
								เพื่อนำเข้าไปสู่กระบวนการผลิตโดยมีระบบ{' '}
								<span className='EngFont'>FIFO</span> พร้อมทั้งรายงานยอด{' '}
								<span className='EngFont'>
									Inventory (Minimum-Maximum Stock)
								</span>
							</p>
						</div>
					</div>
					<div className='max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink'>
						<img className='rounded-t-lg' src={planning} alt='' />

						<div className='p-5'>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-1 EngFont'>
								Planning
							</h5>

							<p className='mb-3 font-normal text-gray-700 dark:text-gray-400 text-left p-1 ThaiFont'>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เรามีระบบการวางแผนและจัดสรรแผนการผลิต
								เพื่อให้บรรลุเป้าหมายและมีประสิทธิภาพสูงสุด
								รวมทั้งส่งมอบให้ทันเวลาและสามารถออกแบบแผนการผลิตได้ทั้ง 2 รูปแบบ
								คือ{' '}
								<span className='EngFont'>Make to Order , Make to stock</span>
							</p>
						</div>
					</div>
					<div className='max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink'>
						<img className='rounded-t-lg' src={production} alt='' />
						<div className='p-5'>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-1 EngFont'>
								Production
							</h5>

							<p className='mb-3 font-normal text-gray-700 dark:text-gray-400 p-1 ThaiFont'>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เรามีระบบควบคุมการผลิตและมุ่งเน้นการเชื่อมต่อข้อมูลแบบ&nbsp;
								<span className='EngFont'>Real-time</span> และสามารถ{' '}
								<span className='EngFont'>Monitor and Control</span>&nbsp;
								สายการผลิตได้ถูกต้องและรวดเร็ว รวมถึงการวัดประสิทธิผล
								โดยรวมของเครื่องจักร
								<span className='EngFont'>
									(OEE - Overall Equipment Effectiveness) SPCS
								</span>
								&nbsp;สามารถสืบค้นหาข้อมูลด้วยระบบ{' '}
								<span className='EngFont'>Search and Filter</span>&nbsp;
								และยกเลิกการใช้กระดาษในการบันทึกข้อมูลสายการผลิต
								รวมถึงลดความผิดพลาด
							</p>
						</div>
					</div>
				</div>
				<div className='grid md:grid-cols-3 gap-3'>
					<div className='max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink'>
						<img className='rounded-t-lg' src={quality} alt='' />

						<div className='p-5'>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-1 EngFont'>
								Quality Control
							</h5>

							<p className='mb-3 font-normal text-gray-700 dark:text-gray-400 p-1 ThaiFont'>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เรามีการควบคุมคุณภาพสินค้าให้เป็นไปตามมาตรฐานสากลและลูกค้าที่ได้กำหนดไว้
								รวมทั้งมีการรวบรวมข้อมูลของเสียในรูปแบบ{' '}
								<span className='EngFont'>Defect Pareto Chart</span>
							</p>
						</div>
					</div>
					<div className='max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink'>
						<img className='rounded-t-lg' src={warehouse} alt='' />

						<div className='p-5'>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-1 EngFont'>
								Warehouse
							</h5>

							<p className='mb-3 font-normal text-gray-700 dark:text-gray-400 p-1 ThaiFont'>
								&nbsp;&nbsp;&nbsp;&nbsp;เรามีกระบวนการจัดเก็บสินค้าและตาม
								<span className='EngFont'>Location Code</span>
								และตรวจสอบเพื่อจัดสรรก่อนส่งมอบให้กับลูกค้า
								พร้อมทั้งรายงานยอด&nbsp;
								<span className='EngFont'>
									Inventory (Minimum-Maximum Stock)
								</span>
							</p>
						</div>
					</div>
					<div className='max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink'>
						<img className='rounded-t-lg' src={Logis} alt='' />

						<div className='p-5'>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-1 EngFont'>
								Logistics
							</h5>

							<p className='mb-3 font-normal text-gray-700 dark:text-gray-400 p-1 ThaiFont'>
								&nbsp;&nbsp;&nbsp;&nbsp;เรามีการบริหารจัดการและควบคุมกระบวนการขนส่งสินค้า
								โดยจะต้องจัดส่งให้ครบถ้วนในสภาพที่สมบูรณ์ ตรงต่อเวลา
								คุ้มค่าและประหยัดต้นทุนค่าขนส่ง
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Systempage;
