"use client";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import Step1 from "../../assests/Images/Step 1 Crew.jpg";
import Step2 from "../../assests/Images/Step 1 Knee Hihg.jpg";
import Step3 from "../../assests/Images/t-Step1NoShow.jpg";
import Step4 from "../../assests/Images/t-Step1Quarter.jpg";
import KnightSocks from "../../assests/Images/Custom_Fuzzy_Socks-removebg-preview.png";
import Sublimation from "../../assests/Images/sublimation printing socks.png";
import Technology from "../../assests/Images/Technology_360_degree_printing_socks-removebg-preview.png";
import Knee_high from "../../assests/Images/Step 3 Athletic.jpg";
import Cycling from "../../assests/Images/Step 3 cycling.jpg";
import Dress from "../../assests/Images/Step 3 dress.jpg";
import Other from "../../assests/Images/Step 3 other.jpg";

export default function WorkArea() {
  const [selectedLengths, setSelectedLengths] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);
  const [showTextSection, setShowTextSection] = useState(false);

  const sockLength = [
    { id: 1, name: "Ankle", icons: Step3 },
    { id: 2, name: "Quarter Crew", icons: Step4 },
    { id: 3, name: "Cotton Crew", icons: Step1 },
    { id: 4, name: "Knee High", icons: Step2 },
  ];

  const sockTechnology = [
    { id: 1, name: "Knight Socks", icons: KnightSocks },
    { id: 2, name: "Sublimation Socks", icons: Sublimation },
    { id: 3, name: "360 Degree Socks", icons: Technology },
  ];

  const styles = [
    { id: 1, name: "Custom Cotton Dress Socks", icons: Dress },
    { id: 2, name: "Custom Cotton Athletic Socks", icons: Knee_high },
    { id: 3, name: "Custom Nylon Cycling Socks", icons: Cycling },
    { id: 4, name: "Custom Other Style Socks", icons: Other },
  ];

  const handleLengthSelect = (length: string) => {
    setSelectedLengths((prevSelectedLengths) =>
      prevSelectedLengths.includes(length)
        ? prevSelectedLengths.filter((item) => item !== length)
        : [...prevSelectedLengths, length]
    );
  };

  const handleStyleSelect = (style: string) => {
    setSelectedStyle(style);
  };

  const handleTechnologySelect = (technology: string) => {
    setSelectedTechnology(technology);
  };

  const isButtonDisabled = selectedLengths.length === 0 || !selectedStyle || !selectedTechnology;

  const handleNextStep = () => {
    setShowTextSection(true);
    console.log("Selected Lengths:", selectedLengths);
    console.log("Selected Style:", selectedStyle);
    console.log("Selected Technology:", selectedTechnology);
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
      {!showTextSection && (
        <section className="w-full h-screen flex flex-col items-center justify-between font-[Montserrat] p-4">
          <div className="p-3 w-full lg:w-3/4 xl:w-1/2">
            <label className="text-2xl font-semibold">Sock Length</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sockLength.map(({ id, name, icons }) => (
                <div
                  key={id}
                  className={`h-52 w-full border-4 ${
                    selectedLengths.includes(name) ? "border-blue-500" : "border-gray-300"
                  } rounded-lg cursor-pointer flex flex-col items-center justify-center p-2`}
                  onClick={() => handleLengthSelect(name)}
                >
                  <Image
                    src={icons}
                    alt={name}
                    className="object-cover size-40 mb-2"
                    width={96}
                    height={96}
                  />
                  <p className="text-center font-medium mt-2 text-sm md:text-base">{name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 w-full lg:w-3/4 xl:w-1/2">
            <label className="text-2xl p-2 font-semibold">Sock Technology</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {sockTechnology.map(({ id, name, icons }) => (
                <div
                  key={id}
                  className={`border-4 ${
                    selectedTechnology === name ? "border-blue-500" : "border-gray-300"
                  } flex flex-col justify-between w-full h-56 rounded-lg p-0 cursor-pointer`}
                  onClick={() => handleTechnologySelect(name)}
                >
                  <Image
                    src={icons}
                    alt={name}
                    className="h-3/4 w-full object-contain"
                    style={{ aspectRatio: "1 / 1" }}
                  />
                  <p className="font-semibold text-xl text-black text-center bg-transparent">{name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 w-full lg:w-3/4 xl:w-1/2">
            <label className="text-2xl font-semibold">Sock Styles</label>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 p-2">
              {styles.map(({ id, name, icons }) => (
                <div
                  key={id}
                  className={`border-4 ${
                    selectedStyle === name ? "border-blue-500" : "border-gray-300"
                  } flex flex-col justify-between w-full h-56 rounded-lg p-0 cursor-pointer`}
                  onClick={() => handleStyleSelect(name)}
                >
                  <Image
                    src={icons}
                    alt={name}
                    className="h-3/4 w-full object-contain"
                    style={{ aspectRatio: "1 / 1" }}
                  />
                  <p className="font-semibold text-xl text-black text-center bg-transparent">{name}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            className={`w-1/2 h-16 rounded-md font-bold text-white text-xl transition-colors duration-300 ${
              isButtonDisabled ? "bg-red-300 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
            }`}
            disabled={isButtonDisabled}
            onClick={handleNextStep}
          >
            Next Step
          </button>
        </section>
      )}

      {showTextSection && (
        <section className="w-full h-screen flex flex-col items-center justify-center font-[Montserrat] space-y-8 p-4">
          <div className="p-3 space-y-16 w-full sm:w-2/3 lg:w-1/2 mx-auto">
            <div className="text-center">
              <h3 className="text-3xl font-extrabold">Design Details</h3>
              <p className="text-sm font-semibold w-1/2 mx-auto">
                Please tell us about the custom designs you like to see! Include any logos or assets that our team can use.
              </p>
            </div>
            <form className="flex flex-col gap-y-5">
              <input
                type="text"
                className="w-full border border-gray-400 focus:outline-none rounded-md p-2 text-sm text-gray-900"
                placeholder="Name Of Your Project"
              />
              <label className="text-black font-bold text-sm">
                Tell us about your design request
              </label>
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
                <span className="text-gray-500 font-semibold">Drag and drop files here</span>
                <span className="text-gray-400 text-sm">or click to upload</span>
              </div>

              {selectedFiles.length > 0 && (
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold">Uploaded Files:</h3>
                  <ul>
                    {selectedFiles.map((file, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <span className="text-gray-700">{file.name}</span>
                        <button
                          className="text-red-500"
                          onClick={() => removeFile(index)}
                        >
                          <FaTimes />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </form>
          </div>
        </section>
      )}
    </>
  );
}
