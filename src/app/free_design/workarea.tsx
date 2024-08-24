"use client";
import { useState } from 'react';
import { FaTimes } from "react-icons/fa";

export default function WorkArea() {
    const [selectedLengths, setSelectedLengths] = useState<string[]>([]);
    const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
    const [showTextSection, setShowTextSection] = useState(false);

    const handleLengthSelect = (length: string) => {
        setSelectedLengths(prevSelectedLengths =>
            prevSelectedLengths.includes(length)
                ? prevSelectedLengths.filter(item => item !== length)
                : [...prevSelectedLengths, length]
        );
    };

    const handleStyleSelect = (style: string) => {
        setSelectedStyle(style);
    };

    const isButtonDisabled = selectedLengths.length === 0 || !selectedStyle;

    const handleNextStep = () => {
        setShowTextSection(true);
        console.log('Selected Lengths:', selectedLengths);
        console.log('Selected Style:', selectedStyle);
    };

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setSelectedFiles([...selectedFiles, ...files]);
    };

    const removeFile = (index: number) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1);
        setSelectedFiles(updatedFiles);
    };

    return (
        <>
            {/* Step 1: Sock Length & Style Selection */}
            {!showTextSection && (
                <section className="w-full h-screen flex flex-col items-center justify-center font-[Montserrat] space-y-12 p-4">
                    {/* Sock Length */}
                    <div className="p-3 space-y-3 w-full lg:w-3/4 xl:w-1/2">
                        <label className="text-2xl font-semibold">Sock Length</label>
                        <div className="w-full max-w-screen-lg mx-auto p-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {['Ankle', 'Quarter Crew', 'Cotton Crew', 'Knee High'].map(length => (
                                    <div
                                        key={length}
                                        className={`h-48 w-full border-4 ${selectedLengths.includes(length) ? 'border-blue-500' : 'border-gray-300'} rounded-lg cursor-pointer flex flex-col items-center justify-center p-2`}
                                        onClick={() => handleLengthSelect(length)}
                                    >
                                        <p className='text-center font-medium mt-2 text-sm md:text-base'>{length}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sock Style */}
                    <div className="p-3 space-y-3 w-full lg:w-3/4 xl:w-1/2">
                        <label className="text-2xl font-semibold">Sock Style</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div
                                className={`border-4 ${selectedStyle === 'Classic' ? 'border-blue-500' : 'border-gray-300'} flex justify-between items-center h-16 rounded-lg p-5 cursor-pointer`}
                                onClick={() => handleStyleSelect('Classic')}
                            >
                                <p className='font-semibold text-xl text-black'>Classic</p>
                                <p className='text-sm text-gray-500'>Dress/Everyday</p>
                            </div>
                            <div
                                className={`border-4 ${selectedStyle === 'Athletic' ? 'border-blue-500' : 'border-gray-300'} flex justify-between items-center h-16 rounded-lg p-5 cursor-pointer`}
                                onClick={() => handleStyleSelect('Athletic')}
                            >
                                <p className='font-semibold text-xl text-black'>Athletic</p>
                                <p className='text-sm text-gray-500'>Active Wear</p>
                            </div>
                        </div>
                    </div>

                    <button
                        className={`w-1/2 h-16 rounded-md font-bold text-white text-xl transition-colors duration-300 ${isButtonDisabled ? 'bg-red-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
                        disabled={isButtonDisabled}
                        onClick={handleNextStep}
                    >
                        Next Step
                    </button>
                </section>
            )}

            {/* Step 2: Design Details Form */}
            {showTextSection && (
                <section className="w-full h-screen flex flex-col items-center justify-center font-[Montserrat] space-y-8 p-4">
                    <div className="p-3 space-y-16 w-full sm:w-2/3 lg:w-1/2 mx-auto">
                        <div className="text-center">
                            <h3 className="text-3xl font-extrabold">Design Details</h3>
                            <p className="text-sm font-semibold w-1/2 mx-auto">
                                Please tell us about the custom designs you'd like to see! Include any logos or assets that our team can use.
                            </p>
                        </div>
                        <form className="font-[Montserrat] flex flex-col gap-y-5">
                            <input 
                                type="text" 
                                className="w-full border border-gray-400 focus:outline-none rounded-md p-2 text-sm text-gray-900" 
                                placeholder="Name Of Your Project" 
                            />
                            <label className="text-black font-bold text-sm">Tell us about your design request</label>
                            <textarea 
                                name="text" 
                                className="text-input rounded-lg flex appearance-none resize-none border border-solid border-gray-400 w-full h-24 p-4 text-gray-900 focus:outline-none" 
                                placeholder="Ex: colors, styles, themes, logo placement, etc."
                            ></textarea>

                            <div className="w-full h-40 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-blue-500 transition-colors duration-300 relative">
                                <input
                                    type="file"
                                    id="file-upload"
                                    multiple
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={handleFileChange}
                                />
                                {selectedFiles.length === 0 ? (
                                    <>
                                        <img
                                            alt="Upload Icon"
                                            loading="lazy"
                                            width="40"
                                            height="40"
                                            className="mb-2"
                                            src="https://custom.sockclub.com/_next/static/media/upload.a966f900.png"
                                        />
                                        <p className="text-gray-500 font-medium">Click to upload</p>
                                    </>
                                ) : (
                                    <div className="flex flex-wrap justify-start gap-3 p-2 overflow-y-auto">
                                        {selectedFiles.map((file, index) => (
                                            <div key={index} className="relative w-20 h-20 overflow-hidden rounded-md shadow-md">
                                                <img
                                                    src={URL.createObjectURL(file)}
                                                    alt="UploadedPreview"
                                                    className="w-full h-full object-cover"
                                                />
                                                <button
                                                    className="absolute top-1 right-1 bg-white rounded-full p-1 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
                                                    onClick={() => removeFile(index)}
                                                >
                                                    <FaTimes />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button 
                                id="submitDesignRequestButton" 
                                className="modal-main-button py-4 text-white rounded-md bg-red-600 hover:bg-red-700 transition-colors duration-300"
                            >
                                <p className="font-semibold text-white text-xl">Submit Design Request</p>
                            </button>
                        </form>
                    </div>
                </section>
            )}
        </>
    );
}
