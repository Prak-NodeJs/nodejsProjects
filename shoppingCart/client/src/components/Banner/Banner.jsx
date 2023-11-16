
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import './Banner.css'


const images = [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698759647/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Rotating%20Deals/November/01%20Nov/Desktop/Desktop/HP_FOD_MJB_1nov2023_xhysyo.png?tr=w-2048",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698759648/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Rotating%20Deals/November/01%20Nov/Desktop/Desktop/HP_FOD_Noise_1nov2023_nvdy0a.png?tr=w-2048",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698759646/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Rotating%20Deals/November/01%20Nov/Desktop/Desktop/HP_FOD_Nothing_1nov2023_qiov02.png?tr=w-2048",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698759646/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Rotating%20Deals/November/01%20Nov/Desktop/Desktop/HP_FOD_TV_1nov2023_qj5yhd.png?tr=w-2048",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698759647/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Rotating%20Deals/November/01%20Nov/Desktop/Desktop/HP_FOD_Voltas_1nov2023_wqospu.png?tr=w-2048"
]

export default function Banner() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={true}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}

        >
            <SwiperSlide><img className='last-image' src={images[0]} alt="" /></SwiperSlide>
            <SwiperSlide><img className='last-image' src={images[1]} alt="" /></SwiperSlide>
            <SwiperSlide><img className='last-image' src={images[2]} alt="" /></SwiperSlide>
            <SwiperSlide><img className='last-image' src={images[3]} alt="" /></SwiperSlide>
            <SwiperSlide><img className='last-image' src={images[4]} alt="" /></SwiperSlide>




        </Swiper>
    )
}
