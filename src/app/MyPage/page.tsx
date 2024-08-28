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
                <div className="h-6 w-full flex justify-center items-center">
                    <div className="grid grid-cols-4 gap-x-8 text-center text-gray-500 font-medium tracking-tighter">
                        <p>GI</p>
                        <p>Store</p>
                        <p>Technology</p>
                        <p>Company</p>
                    </div>
                </div>
            </section>

            <section
                className="h-[500px] w-full bg-cover bg-center relative flex justify-center items-center font-[Montserrat]"
                style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 justify-center mx-auto">
                    {/* Left Column - Heading */}
                    <div className="flex flex-col justify-center p-8 gap-y-8">
                        <h1 className="text-6xl tracking-tight font-semibold text-blue-950 font-[Montserrat] leading-tight">
                            We re Removing <br /> Language Barriers
                        </h1>
                        <p className='text-base font-normal text-black w-2/3'>
                            Imagine a world where you can understand what people
                            are saying in any language
                        </p>

                        <div className='flex justify-normal items-center'>
                            <div className='grid grid-cols-4 gap-x-1 items-center'>
                                <button className='bg-blue-950 rounded-full px-10 py-4 text-white'>
                                    Pre Order
                                </button>
                                <span className='w-14 h-14 bg-blue-950 rounded-full flex justify-center items-center'>
                                    <img src="/arrowIcon.png" width={22} height={22} alt="" />
                                </span>
                                <div className='flex gap-x-3 items-center -ml-20 text-xs'>
                                <span className=' w-14 h-14 bg-slate-200 rounded-full flex justify-center items-center'>
                                    <img src="/playIcon.png" width={22} height={22} alt="" />
                                </span>
                                Watch Video
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="flex justify-center items-center">
                      
                    </div>
                </div>
            </section>


        </>
    )
}
