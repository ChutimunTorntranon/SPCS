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
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
						System Overview
					</h1>
					<p className='text-[#8EACC1] font-bold md:text-4xl sm:text-3xl text-2xl'>
						FLOW SPCS{' '}
					</p>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
						ระบบของเราครอบคลุมอะไรบ้าง?
					</h1>
				</div>
				<div className='grid md:grid-cols-3 gap-3'>
					<div className='max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink'>
						<img className='rounded-t-lg bg-gray-300' src={material} alt='' />

						<div className='p-5'>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
								Material
							</h5>

							<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
								สิ่งของที่ใช้สำหรับสร้างผลิตภัณฑ์ต่างๆ
								เพื่อให้กิจการสามารถเอาผลิตภัณฑ์ไปค้าขายหรือทำการบริการ
								ให้กิจการได้พิจารณาว่าวัสดุที่กิจการได้ซื้อมา
								สามารถทำประโยชน์การค้าขายได้มากน้อยขนาดไหน
								และให้กิจการได้วางแผนการดำเนินงานทางธุรกิจต่อไป
							</p>
						</div>
					</div>
					<div className='max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink'>
						<img className='rounded-t-lg' src={planning} alt='' />

						<div className='p-5'>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
								Planning
							</h5>

							<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
								การหาทางเลือกที่ดีที่สุดในการปฏิบัติงาน โดยใช้ปัจจัยต่างๆและมี
								เหตุผลเพื่อให้การดำเนินงานในอนาคตเป็นไปโดยเรียบร้อยและมีประสิทธิภาพที่สุด
							</p>
						</div>
					</div>
					<div className='max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink'>
						<img className='rounded-t-lg' src={production} alt='' />

						<div className='p-5'>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
								Production
							</h5>

							<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
								การผลิต เป็นกระบวนการเพิ่มคุณค่าหรือประโยชน์ ทางเศรษฐกิจ
								(economic utility) ให้กับปัจจัยการผลิตต่างๆ เ
								พื่อตอบสนองความต้องการของลูกค้าให้เกิดประโยชน์มากที่สุด
							</p>
						</div>
					</div>
				</div>
				<div className='grid md:grid-cols-3 gap-3'>
					<div className='max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink'>
						<img className='rounded-t-lg' src={quality} alt='' />

						<div className='p-5'>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
								Quality Control
							</h5>

							<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
								การควบคุมคุณภาพสินค้าให้เป็นไปตามคุณสมบัติที่กำหนดไว้
								และสามารถสร้างความพึงพอใจให้กับลูกค้าสูงสุด ด้วยกระบวนการ
								Inspection คือกระบวนการการตรวจสอบตำหนิและจุดบกพร่องของผลิตภัณฑ์
								เพื่อที่จะทำการส่งกลับไปแก้ไขหรือคัดทิ้ง
								จากนั้นจึงทำการบันทึกและเก็บสถิติของลักษณะรวมทั้งจำนวนผลิตภัณฑ์ต่างๆ
							</p>
						</div>
					</div>
					<div className='max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink'>
						<img className='rounded-t-lg' src={warehouse} alt='' />

						<div className='p-5'>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
								Warehouse
							</h5>

							<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
								สถานที่ที่ใช้สำหรับการวาง เก็บ
								หรือพักสินค้าเพื่อรอการกระจายหรือการขนส่ง
								ในบางครั้งอาจมีการใช้คำเรียกอื่น ๆ เช่น โกดัง โรงเก็บสินค้า
								ศูนย์กระจายสินค้า เป็นต้น โดยทั่วไปแล้วมักถูกใช้โดยผู้ผลิต
								ผู้นำเข้า ผู้ส่งออก ผู้ค้าส่ง
								รวมไปถึงผู้ที่เกี่ยวข้องกับธุรกิจขนส่งหรือโลจิสติกส์
							</p>
						</div>
					</div>
					<div className='max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink'>
						<img className='rounded-t-lg' src={Logis} alt='' />

						<div className='p-5'>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
								Logistics
							</h5>

							<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
								ระบบการจัดส่งสินค้า สิ่งของ
								หรือทรัพยากรใดก็ตามจากแต่ละสถานที่ไปยังจุดหมาย
								รวมไปถึงการบริหารสินค้าคงคลัง การจัดการบรรจุหีบห่อ
								โดยมีจุดประสงค์หลักคือการนำส่งของไปถึงมือผู้รับอย่างปลอดภัย
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Systempage;
