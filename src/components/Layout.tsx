"use client"
import { motion } from 'framer-motion';
import FreeDesignSlider from './Sliders/FreeDesignsSlider';



export default function LayoutMain() {
    return (
        <>
            <section className='h-screen w-full lg:w-11/12 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 items-center  font-[Montserrat]'>
                <div className='col-span-1 flex flex-col justify-center items-center h-full space-y-1 lg:space-y-3 p-5 lg:p-1'>
                    <h1 className='w-full lg:w-1/2 uppercase font-[1000] text-4xl lg:text-7xl 2xl:text-9xl font-[Roboto] tracking-tighter text-center lg:text-left'>Pick Your design Approach</h1>
                    <p className="w-full lg:w-1/2 text-center lg:text-left text-base lg:text-lg font-medium text-[#BE261F]">Decide How You Like It. 😏</p>
                </div>
                <div className='col-span-1 w-full h-auto lg:h-[50vh] grid grid-cols-1 lg:grid-cols-2 gap-3 p-5 overflow-visible'>
                  <motion.div
                        className="col-span-1 rounded-lg shadow-2xl p-5 flex flex-col justify-center gap-y-3 bg-slate-200 font-[Montserrat]"
                        initial={{ y: -250, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 50, damping: 10 }}
                    >
                     <p className='text-lg 2xl:text-2xl font-semibold text-[#BE261F]'>Request Free Designs:</p>
                     <p className='bg-gray-200 text-black w-1/2 py-1 text-center rounded-full font-bold text-sm'>Get Design in 24 Hours</p>
                     <p>
                     Let one of our in-house designers take it from here!  All designs and revisions are always free.
                     </p>
                     <a href="/free_design" className='text-red-500 hover:translate-x-1 hover:transition'>
                        Continue
                     </a>
                     <FreeDesignSlider />
                    </motion.div>
                    <motion.div
                       className="col-span-1 rounded-lg shadow-2xl p-5 flex flex-col justify-center gap-y-3 bg-slate-200 font-[Montserrat]"
                        initial={{ x: 250, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 50, damping: 10 }}
                    >
                     <p className='text-2xl font-semibold text-[#BE261F]'>Request Free Designs:</p>
                     <p className='bg-gray-200 text-black w-1/2 py-1 text-center rounded-full font-bold text-sm'>Design your Own</p>
                     <p>
                     Upload your logo and choose from hundreds of templates and colors.
                     </p>
                     <a href="https://socks.phpnode.net/sockcustomizer/" target='_blank' className='text-red-500 hover:translate-x-1 hover:transition'>
                        Continue
                     </a>
                     <img src="https://custom.sockclub.com/images/diy_tool_thumbnail.png" className='h-full w-full rounded-xl grayscale' alt="" />
                    </motion.div>
                </div>
            </section>
        </>
    )
}
