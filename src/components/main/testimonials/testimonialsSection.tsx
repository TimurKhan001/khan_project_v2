import styles from './testimonialsSection.module.scss';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowLeft from '../../../../public/icons/swiperLeft.svg';
import ArrowRight from '../../../../public/icons/swiperRight.svg';
import Quotes from '../../../../public/icons/quotes.svg';
import getTestimonials from '../../../configs/testimonials';

const TestimonialsSection = () => {
	const testimonials = getTestimonials().map(({ id, text, author }) => (
		<SwiperSlide key={id}>
			<div className={styles.section}>
				<Quotes className={styles.quotes} />
				<p>{text}</p>
				<p>- {author}</p>
			</div>
		</SwiperSlide>
	));

	return (
		<section className={styles.wrapper}>
			<Swiper
				modules={[Navigation]}
				spaceBetween={0}
				slidesPerView={1}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				{testimonials}
				<div className="swiper-button-next">
					<ArrowRight />
				</div>
				<div className="swiper-button-prev">
					<ArrowLeft />
				</div>
			</Swiper>
		</section>
	);
};

export default TestimonialsSection;
