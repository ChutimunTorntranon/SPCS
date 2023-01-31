import React from 'react';
import paperless from '../icons/paperless2.png';
import img1 from '../gallery/Paperless/Paper1.png';
import img2 from '../gallery/Paperless/Paper2.png';
import img3 from '../gallery/Paperless/Paper3.png';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
function Paperless() {
	const slides = [{ url: img1 }, { url: img2 }, { url: img3 }];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};
	return (
		<div>
			<div className='mx-auto container'>
				<div className='grid lg:grid-cols-2 sm:grid-cols-1 mx-auto'>
					<div className='h-[400px] w-[400px] sm:h-[500px] sm:w-[450px] col-span-1 my-auto lg:h-[600px] lg:w-[800px] m-auto py-16 px-4 relative group'>
						<div
							style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
							className='w-full h-full bg-center bg-cover duration-500'
						></div>

						<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl round-full p-2 bg-black/20 text-white cursor-pointer'>
							<BsChevronCompactLeft onClick={prevSlide} size={30} />
						</div>

						<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl round-full p-2 bg-black/20 text-white cursor-pointer'>
							<BsChevronCompactRight onClick={nextSlide} size={30} />
						</div>

						<div className='flex top-4 justify-center py-2'>
							{slides.map((slide, slideIndex) => (
								<div
									key={slideIndex}
									onClick={() => goToSlide(slideIndex)}
									className='text-2xl cursor-pointer'
								></div>
							))}
						</div>
					</div>
					<div className='col-span-1 flex flex-col w-[450px] mx-auto text-center'>
						<img className='w-[400px] mx-auto' src={paperless} alt='/' />
						<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black p-2 EngFont'>
							Paperless
						</h1>
						<p className='text-black font-bold md:text-4xl sm:text-3xl text-2xl p-2 EngFont'>
							Manufacturing{' '}
						</p>
						<p className='text-xl font-light text-black md:text-2xl sm:text-xl p-2 ThaiFont'>
							ยกเลิกการใช้กระดาษในการลงบันทึกข้อมูลสายการผลิต
							รวมถึงลดความผิดพลาดของการลงบันทึก
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Paperless;
