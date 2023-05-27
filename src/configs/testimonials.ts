// import { i18n } from 'next-i18next';

interface ITestimonial {
	id: number;
	text: string;
	author: string;
}

type Testimonials = ITestimonial[];

const getTestimonials = (intl): Testimonials => [
	{
		id: 1,
		text: intl.formatMessage({ id: 'testimonial1Text' }),
		author: intl.formatMessage({ id: 'testimonial1Author' }),
	},
	{
		id: 2,
		text: intl.formatMessage({ id: 'testimonial2Text' }),
		author: intl.formatMessage({ id: 'testimonial2Author' }),
	},
	{
		id: 3,
		text: intl.formatMessage({ id: 'testimonial3Text' }),
		author: intl.formatMessage({ id: 'testimonial3Author' }),
	},
	{
		id: 4,
		text: intl.formatMessage({ id: 'testimonial4Text' }),
		author: intl.formatMessage({ id: 'testimonial4Author' }),
	},
	{
		id: 5,
		text: intl.formatMessage({ id: 'testimonial5Text' }),
		author: intl.formatMessage({ id: 'testimonial5Author' }),
	},
];

export default getTestimonials;
