"use client"
import React, { useState, useRef } from 'react';

const PageComponent = () => {
    return (
        <>

            <section className='w-full h-full font-[Montserrat]'>
                <div className='flex flex-col gap-0 relative'>
                    <div className='bg-black h-11 w-full text-center font-bold text-white flex items-center justify-center'>
                        FAST & FREE 2-OAY SHIPPING SHOP NOW
                    </div>
                    <header className="w-full h-16 flex justify-between items-center px-60 py-3 sticky top-0 left-0 bg-white z-50">
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
                        <img src="/vrHeroSection.png" alt="VR Box" className='absolute top-[90px] right-[375px]' />
                        <img src="/arrowHeroSection.png" alt="HeroArrowImage" className='absolute bottom-72 left-44 z-20' />
                        <img
                            src="/HeroSectionImg.png"
                            alt="HeroGlassImage"
                            className="absolute -bottom-[124px] right-0 h-full w-full object-contain overflow-visible"
                        />
                    </div>

                </div>
            </section>

            <section className='h-[90vh] w-full px-20 py-24 bg-no-repeat bg-center bg-cover grid grid-cols-3 font-[Montserrat]'
                style={{ backgroundImage: "url('/2ndSectionBGImage.png')" }}
            >
                <div className='col-span-2 flex flex-col justify-end items-center gap-y-5 -mb-10'>
                    <div className='px-40 w-full'>
                        <h3 className='text-white font-bold text-6xl mb-4'>The Problem</h3>
                        <p className='text-2xl text-white w-full lg:w-4/5 font-medium mt-[15px]'>Each year, around 2-3 million Muslims perform
                            Hajj, while over 10 million undertake Umrah.</p>
                    </div>
                </div>
                <div className='col-span-1 flex flex-col gap-y-4 w-full'>
                    <div className='text-white rounded-lg bg-[#333D62] h-1/2 w-full px-16 py-20 space-y-5'>
                        <h4 className='font-semibold text-3xl'>-Less than 30% of pilgrims
                            speak Arabic</h4>
                        <p className='text-xl tracking-wide'>
                            The rest Struggle With language and during
                            religious sermons and shopping.
                        </p>
                    </div>
                    <div className='rounded-lg bg-white h-1/2 w-full px-16 py-20 space-y-5'>
                        <h4 className='text-[#333D62] font-semibold text-3xl'>-Saudi Arabia aims to triple Umrah
                            pilgrims to 30 million annually</h4>
                        <p className='text-black text-xl tracking-wide'>
                            The Kingdom has recently introduced host
                            forperforming pilgrimage
                        </p>
                    </div>
                </div>
            </section>

            <section className='w-full h-full py-14 px-56 font-[Montserrat] space-y-12 bg-yellow-50'>
                <div className='w-full grid grid-cols-2 items-center justify-between'>
                    <p className='font-semibold text-5xl text-[#333D62]'>What It Does</p>
                    <p className='text-lg font-light'>
                        Once you share them, I can delve into how G1, as a cutting-edge
                        technology or product, might enhance or revolutionize those
                    </p>
                </div>
                <div className='grid grid-cols-6 gap-4'>
                    <div className='h-6 py-6 rounded-lg bg-white flex justify-center gap-x-2 items-center font-medium hover:bg-[#333D62] hover:text-white cursor-pointer'>
                        <img src="/NoteIcon.png" width={25} height={25} alt="" /> Quick Note
                    </div>
                    <div className='h-6 py-6 rounded-lg bg-white flex justify-center gap-x-2 items-center font-medium hover:bg-[#333D62] hover:text-white cursor-pointer'>
                        <img src="/NoteIcon.png" width={25} height={25} alt="" /> Teleprompt
                    </div>
                    <div className='h-6 py-6 rounded-lg bg-white flex justify-center gap-x-2 items-center font-medium hover:bg-[#333D62] hover:text-white cursor-pointer'>
                        <img src="/NoteIcon.png" width={25} height={25} alt="" /> Translate
                    </div>
                    <div className='h-6 py-6 rounded-lg bg-white flex justify-center gap-x-2 items-center font-medium hover:bg-[#333D62] hover:text-white cursor-pointer'>
                        <img src="/NoteIcon.png" width={25} height={25} alt="" /> Navigate
                    </div>
                    <div className='h-6 py-6 rounded-lg bg-white flex justify-center gap-x-2 items-center font-medium hover:bg-[#333D62] hover:text-white cursor-pointer'>
                        <img src="/NoteIcon.png" width={25} height={25} alt="" /> Even Al
                    </div>
                    <div className='h-6 py-6 rounded-lg bg-white flex justify-center gap-x-2 items-center font-medium hover:bg-[#333D62] hover:text-white cursor-pointer'>
                        <img src="/NoteIcon.png" width={25} height={25} alt="" /> Notification
                    </div>
                </div>
                <div>
                    <img src="/VideoBGImage.png" className='w-full h-full' alt="" />
                </div>
            </section>
            <section className='w-full h-full py-14 px-56 font-[Montserrat] space-y-12'>
                <div className='w-full grid grid-cols-2 items-center justify-between'>
                    <p className='font-bold text-5xl text-[#333D62]'>How It Works</p>
                    <div className='flex justify-end gap-x-6'>
                        <button className="bg-[#333D62] rounded-full px-10 py-4 text-white font-medium">
                            Search For Product
                        </button>
                        <span className="w-14 h-14 bg-[#333D62] rounded-full flex justify-center items-center -ml-6">
                            <img src="/arrowIcon.png" width={22} height={22} alt="Arrow Icon" />
                        </span>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-5 h-96 w-full'>
                    <div className='col-span-1  rounded-xl bg-no-repeat bg-center bg-cover p-5 flex justify-center items-end text-white font-bold text-xl h-full w-full'
                        style={{ backgroundImage: "url('/ProductImage2.png')" }}
                    >
                        Device is attached on to temple
                    </div>
                    <div className='col-span-1  rounded-xl bg-no-repeat bg-center bg-cover p-5 flex justify-center items-end text-white font-bold text-xl h-full w-full'
                        style={{ backgroundImage: "url('/ProductImage3.png')" }}
                    >
                        Device Is Connected Via Bluetooth
                    </div>
                    <div className='col-span-1  rounded-xl bg-no-repeat bg-center bg-cover p-5 flex justify-center items-end text-white font-bold text-xl h-full w-full'
                        style={{ backgroundImage: "url('/ProductImage.png')" }}
                    >
                        Translation Is Projected On Lens
                    </div>
                </div>
                <div className='bg-slate-200 h-2 w-1/3 rounded-full mx-auto'>
                    <div className='bg-black w-1/2 h-2 rounded-full'></div>
                </div>
            </section>

            <section className='w-full h-full font-[Montserrat] space-y-12 bg-slate-50'>
                <div className='w-full grid grid-cols-2 items-center justify-between py-14 px-56'>
                    <p className='font-semibold text-5xl text-[#333D62]'>Whats Included </p>
                    <p className='text-lg font-normal'>
                        Whats included in the Standard Package for your web
                        design services? I can provide a list of features and
                        deliverables that are typically part.
                    </p>
                </div>
                <div className='w-3/4 mx-auto grid grid-cols-3 gap-5'>
                    <div className='col-span-1 w-full'>
                        <div className='flex flex-col justify-between items-center gap-y-5'>
                            <div className='p-8 rounded-lg w-full h-full space-y-3 bg-white'>
                                <h1 className='text-2xl font-semibold text-[#333D62]'>
                                    Charging case
                                </h1>
                                <p>
                                    A charging case is a compact,
                                    portable device designed to
                                    recharge other electronic gadgets.
                                </p>
                                <img src="/AC.png" className=' mx-auto' alt="" />
                            </div>
                            <div className='p-8 rounded-lg w-full h-full space-y-3 bg-white'>
                                <h1 className='text-2xl font-semibold text-[#333D62]'>
                                    Companion app
                                </h1>
                                <p>
                                    A companion app is a
                                    mobile application designed
                                    to complement.
                                </p>
                                <img src="/VRGRID.png" className='mx-auto' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 w-full rounded-lg space-y-5 relative bg-white'
                    >
                        <p className='font-semibold text-2xl text-[#333D62] pt-5 px-5'>GI glasses, with your choice of lens</p>
                        <p className='px-5'>Glasses are more than just a corrective aid; theyre a
                            fashion statement. With the right choice of lens</p>
                        <div className='overflow-hidden'
                        >
                            <img src="/glassmall.png" alt="" className='absolute bottom-0 left-0' />
                        </div>
                    </div>
                    <div className='col-span-1 w-full'>
                        <div className='flex flex-col justify-between items-center gap-y-5'>
                            <div className='p-8 rounded-lg w-full h-full space-y-3 bg-white'>
                                <h1 className='text-2xl font-semibold text-[#333D62]'>
                                    Polishing Cloth
                                </h1>
                                <p>
                                    A polishing cloth is a versatile tool
                                    designed to gently clean and protect
                                    various surfaces. Made from soft
                                </p>
                                <img src="/gridLaptop.png" className=' mx-auto' alt="" />
                            </div>
                            <div className='p-8 rounded-lg w-full h-full space-y-3 bg-white'>
                                <h1 className='text-2xl font-semibold text-[#333D62]'>
                                    USB-C cable
                                </h1>
                                <p>
                                    USB-C has revolutionized the world
                                    of connectivity, becoming the go-to
                                    standard for charging and data.
                                </p>
                                <img src="/cableGrid.png" className=' mx-auto' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full h-[75vh] font-[Montserrat] bg-cover bg-center flex justify-normal items-end'
                style={{
                    backgroundImage: "url('/aftergridbgImage.png')",
                }}
            >
                <div className="h-1/2 w-1/2 flex justify-center items-center font-semibold text-6xl text-white bg-gradient-to-t from-black via-30% to-transparent">
                    Our Story
                </div>

                <div className="relative h-1/2 w-1/2 p-12 rounded-t-xl  bg-opacity-65 backdrop-blur-lg  bg-gray-500/60">
                    <p className="relative text-2xl tracking-wide w-10/12 z-10 text-white">
                        Undisturbed connections. We explore human experiences
                        where digital and physical realities merge. We are driven by
                        an ambition to make people thrive and advance beyond
                        their screens - while still being connected to everything
                        digital. All we really want is to make people see what
                        matters when it matters.
                    </p>
                    <div className='flex gap-x-6 py-5'>
                        <button className="bg-white rounded-full px-10 py-4 text-black font-medium">
                            Know More
                        </button>
                        <span className="w-14 h-14 bg-white rounded-full flex justify-center items-center -ml-6">
                            <img src="/arrowIconBlack.png" width={22} height={22} alt="Arrow Icon" />
                        </span>
                    </div>
                </div>
            </section>

            <section className='w-full h-[70vh] bg-[#181818] font-[Montserrat]'>
                <div className='grid grid-cols-2 h-full'>
                    <div className='col-span-1 flex justify-center items-center'>
                        <div className='flex flex-col gap-y-4 items-start justify-normal w-2/3'>
                            <span className='rounded-lg  bg-opacity-65 backdrop-blur-lg  bg-white/10 px-3 py-2 text-white '>
                                $599 / No subscription
                            </span>
                            <h1 className='text-6xl text-white'>Personalize your G1</h1>
                            <p className='text-lg text-white'>Iconic and timeless Panto design. Flatters most face shapes
                                and lives with any look from traditional to on-trend. A
                                versatile choice that will never look dated.</p>
                            <div className='flex gap-x-6 py-5'>
                                <button className="bg-white rounded-full px-10 py-4 text-black font-medium">
                                    Pre Order
                                </button>
                                <span className="w-14 h-14 bg-white rounded-full flex justify-center items-center -ml-6">
                                    <img src="/arrowIconBlack.png" width={22} height={22} alt="Arrow Icon" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 bg-no-repeat bg-contain bg-left relative'
                        style={{
                            backgroundImage: "url('/bgImageLastsection.png')"
                        }}
                    >
                        <img src="lastSectionMobileImage.png" alt="" className='absolute bottom-0 ' />
                    </div>
                </div>
            </section>

            <div className='h-16 w-full flex justify-around items-center px-28 bg-blue-700'>
                <p className='text-white text-2xl'>G1</p>
                <p className='text-white'>Frorn $599 / No subscription </p>
                <div className='flex gap-x-6'>
                    <button className="bg-white rounded-full px-10 py-1 text-black font-medium">
                        Buy Now
                    </button>
                    <span className="p-2 bg-white rounded-full flex justify-center items-center -ml-6">
                        <img src="/arrowIconBlack.png" width={22} height={22} alt="Arrow Icon" />
                    </span>
                </div>
            </div>
            <footer className='w-full h-[40vh] bg-[#070707] p-5 py-28 font-[Montserrat]'>
                <div className='flex justify-center items-center' >
                    <div className='w-4/5 flex justify-between items-center text-gray-300 font-light pb-5 border border-t-0 border-l-0 border-r-0 border-b-white text-sm'>
                        <div className='flex flex-col gap-y-3 uppercase'>
                            <p>Incorporation</p>
                            <p>Accounting</p>
                        </div>
                        <div className='flex flex-col gap-y-3 uppercase'>
                            <p>Features</p>
                            <p>Company Secretary</p>
                        </div>
                        <div className='flex flex-col gap-y-3 uppercase'>
                            <p>Other Services</p>
                            <p>Resources</p>
                        </div>
                        <div className='flex flex-col gap-y-3 uppercase'>
                            <p>Partners</p>
                            <p>Company</p>
                        </div>
                    </div>
                </div>
                <div className='mx-auto  w-4/5 flex justify-between items-center py-6'>
                    <div className='flex flex-col jus gap-y-4'>
                        <div className='flex space-x-12'>
                            <img src="/LogoWhite.png" alt="" />
                            <div className='w-56 flex justify-between items-center border border-white rounded-xl gap-x-1 text-white px-5'>
                                <div className='flex items-center gap-x-3'>
                                    <img src="/globeIcon.png" className='w-5' alt="" />
                                    <p>Singapore</p>
                                </div>
                                <img src="/footerDownIcon.png" className='w-4' alt="" />
                            </div>
                        </div>
                        <p className='text-xs text-gray-300 mt-5'>Copyright 2023. All right reserved by abc</p>
                    </div>
                    <div className='flex flex-col jus gap-y-4 mt-5'>
                        <div className='flex space-x-4'>
                            <button className="flex items-center justify-around gap-x-2 bg-white rounded-full px-8 py-3 text-[#212833] font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" color='#212833'>
                                    <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
                                </svg>
                                <span>
                                    App Store
                                </span>
                            </button>
                            <button className="flex items-center justify-around gap-x-2 bg-white rounded-full px-8 py-3 text-[#212833] font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" color='#212833'>
                                    <path d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z"></path>
                                </svg>
                                <span>
                                    Google Play
                                </span>
                            </button>

                        </div>
                        <div className='flex justify-end items-center gap-x-10 mt-5'>
                            <img src="/fbIcon.png" className='w-7' alt="" />
                            <img src="/instaIcon.png" className='w-7' alt="" />
                            <img src="/youtubeIcon.png" className='w-7' alt="" />
                            <img src="/tiktokIcon.png" className='w-7' alt="" />
                            <img src="/iconLinkedin.png" className='w-7' alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default PageComponent;