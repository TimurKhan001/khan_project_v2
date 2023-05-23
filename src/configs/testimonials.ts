import { i18n } from 'next-i18next';

interface ITestimonial {
    id: number,
    text: string,
    author: string
}

type Testimonials = ITestimonial[]


const getTestimonials = (): Testimonials  => [
    {
        id: 1,
        text: i18n.t('testimonial1Text'),
        author: i18n.t('testimonial1Author')
    },
    {   
        id: 2,
        text: i18n.t('testimonial2Text'),
        author: i18n.t('testimonial2Author')
    },
    {
        id: 3,
        text: i18n.t('testimonial3Text'),
        author: i18n.t('testimonial3Author')
    },
    {   
        id: 4,
        text: i18n.t('testimonial4Text'),
        author: i18n.t('testimonial4Author')
    },
    {   
        id: 5,
        text: i18n.t('testimonial5Text'),
        author: i18n.t('testimonial5Author')
    }
]


export default getTestimonials;