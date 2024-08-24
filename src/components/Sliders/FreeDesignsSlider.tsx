import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, Autoplay } from 'swiper/modules';

export default function FreeDesignSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering Swiper until mounted

  return (
    <Swiper
      loop={true}
      autoplay={{ delay: 3000 }}
      scrollbar={{ draggable: true }}
      modules={[Scrollbar, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohv7V-SCZwQILxWgwDS5Ji3iZTHz6Jinr4A&s"
          className="h-full w-full rounded-xl grayscale"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://w0.peakpx.com/wallpaper/115/408/HD-wallpaper-iceberg-minimalist.jpg"
          className="h-full w-full rounded-xl grayscale"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://s46675.pcdn.co/wp-content/uploads/2019/01/minimalist14.jpg"
          className="h-full w-full rounded-xl grayscale"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i0.wp.com/www.hannahtrickett.com/wp-content/uploads/2016/07/featuresmsl.jpg?fit=1080%2C706"
          className="h-full w-full rounded-xl grayscale"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
}
