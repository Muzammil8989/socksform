import React from 'react'

export default function page() {
    return (
        <>
            <section className='w-full h-full font-[Montserrat]'>
                <div className='flex flex-col gap-0'>
                    <div className='bg-black h-11 w-full text-center font-bold text-white flex items-center justify-center'>
                        FAST & FREE 2-OAY SHIPPING SHOP NOW
                    </div>
                    <header className="w-full h-16 flex justify-between items-center px-60 py-3 relative">
                        <img src="/search.png" alt="" />
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <img src="/Logo.png" alt="Logo" />
                        </div>
                        <div className="flex justify-around gap-x-8 text-blue-950 font-medium">
                            <a href="#">Cart 0</a>
                            <a href="#">Support</a>
                            <a href="#">Log In</a>
                        </div>
                    </header>

                </div>
                <div className="h-14 w-full flex justify-center items-center gap-y-5">
                    <div className="grid grid-cols-4 gap-x-8 text-center text-gray-500 font-medium tracking-tighter">
                        <p>GI</p>
                        <p>Store</p>
                        <p>Technology</p>
                        <p>Company</p>
                    </div>
                </div>
            </section>

            <section className="h-[90vh] w-full bg-cover bg-right relative flex justify-center items-center font-[Montserrat] bg-yellow-50">
                <div className="flex justify-around items-center w-full h-full relative">
                    {/* Left Section */}
                    <div className="flex flex-col justify-center items-end  gap-y-8 w-1/2 h-full">
                        <div className='flex flex-col gap-y-5'>
                            <h1 className="text-6xl tracking-tight font-bold text-[#333D62] leading-tight">
                                Were Removing <br /> Language Barriers
                            </h1>
                            <p className="text-lg font-normal text-black w-3/4">
                                Imagine a world where you can understand what people are saying in any language.
                            </p>
                            <div className="flex items-center gap-x-6">
                                <button className="bg-[#333D62] rounded-full px-10 py-4 text-white">
                                    Pre Order
                                </button>
                                <span className="w-14 h-14 bg-[#333D62] rounded-full flex justify-center items-center -ml-6">
                                    <img src="/arrowIcon.png" width={22} height={22} alt="Arrow Icon" />
                                </span>
                                <div className="flex gap-x-3 items-center text-sm">
                                    <span className="w-14 h-14 bg-white border border-gray-200 rounded-full flex justify-center items-center">
                                        <img src="/playIcon.png" width={22} height={22} alt="Play Icon" />
                                    </span>
                                    Watch Video
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="h-full w-1/2 relative overflow-visible">
                        <img src="/vrHeroSection.png" alt="VR Box"  className='absolute top-[90px] right-[375px]'/>
                        <img src="/arrowHeroSection.png" alt="HeroArrowImage" className='absolute bottom-72 left-44 z-20' />
                        <img
                            src="/HeroSectionImg.png"
                            alt="HeroGlassImage"
                            className="absolute -bottom-[124px] right-0 h-full w-full object-contain overflow-visible"
                        />
                    </div>

                </div>
            </section>



        </>
    )
}
