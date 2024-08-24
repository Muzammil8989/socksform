import dynamic from 'next/dynamic';

const SwiperComponent = dynamic(() => import('@/components/Sliders/swipercomponent'), {
  ssr: false,
});

export default function FreeDesignSlider() {
  return <SwiperComponent />;
}
