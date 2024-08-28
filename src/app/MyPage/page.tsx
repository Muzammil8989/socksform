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
                    <div className='col-span-1  rounded-xl bg-no-repeat bg-center bg-cover p-5 flex justify-center items-end text-white font-bold text-xl'
                        style={{ backgroundImage: "url('/product3.png')" }}
                    >
                        Device is attached on to temple
                    </div>
                    <div className='col-span-1  rounded-xl bg-no-repeat bg-center bg-cover p-5 flex justify-center items-end text-white font-bold text-xl'
                        style={{ backgroundImage: "url('/product2.png')" }}
                    >
                        Device Is Connected Via Bluetooth
                    </div>
                    <div className='col-span-1  rounded-xl bg-no-repeat bg-center bg-cover p-5 flex justify-center items-end text-white font-bold text-xl'
                        style={{ backgroundImage: "url('/product1.png')" }}
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
                        What's included in the Standard Package for your web
                        design services?" I can provide a list of features and
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
                        <p className='px-5'>Glasses are more than just a corrective aid; they're a
                            fashion statement. With the right choice of lens</p>
                        <div className='overflow-hidden'
                        // style={{ backgroundImage: "url('/glassmall.png')" }}
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

        </>
    )
}
export default PageComponent;