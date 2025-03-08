import React from 'react';
import "./testimonials.css";
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="testimonials container section" id='testmonials'>
    <h2 className="section__title">My clients say</h2>
<span className="section__subtitle">Testimonial</span>

<Swiper className="testimonial-container"
loop={true}
grapCursor={true}
spaceBetween={24}
pagination={{
clickable: true,
}}
breakpoints={{
576: {
slidesPerView: 2,
},
768: {
slidesPerView: 2,
spaceBetween: 40,
},
}}
modules={[Pagination]}
>
{Data.map(({id, image, title, description}) => {
return (
   <SwiperSlide className='testimonial-card' key={id}>
       <img src={image} alt="" className='testimonial-img' />

       <h3 className="testimonial-name">{title}</h3>
       <p className="testimonial-description">{description}</p>
   </SwiperSlide>
)
})}
</Swiper>
</section>
  )
}

export default Testimonials
