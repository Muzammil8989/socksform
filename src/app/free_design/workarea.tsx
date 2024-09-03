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
import Full from "../../assests/Images/Step 4 Full.jpg";
import Half from "../../assests/Images/Step 4 Half.jpg";
import Regular from "../../assests/Images/Step 4 regular.jpg";
import TStep1 from "../../assests/Images/t-Step1NoShow.jpg";
import TStep2 from "../../assests/Images/t-Step1Quarter.jpg";
import TStep3 from "../../assests/Images/t-Step5Bottom.jpg";
import TStep4 from "../../assests/Images/t-Step5CUFF.jpg";
import TStep5 from "../../assests/Images/t-Step5TOE.jpg";
import TStep6 from "../../assests/Images/t-Step5back.jpg";
import TStep7 from "../../assests/Images/t-Step5front.jpg";
import { Modal, Button } from "antd";
import axios from 'axios';

export default function WorkArea() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSockSize, setSelectedSockSize] = useState<string | null>(null);
  const [selectedLengths, setSelectedLengths] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(
    null
  );
  const [showTextSection, setShowTextSection] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [projectName, setProjectName] = useState("");
  const [designRequest, setDesignRequest] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedThickness, setSelectedThickness] = useState<string | null>(
    null
  );
  const [selectedPattern, setSelectedPattern] = useState("");
  const [selectedPacking, setSelectedPacking] = useState("");
  const [selectedSockUpgrade, setSelectedSockUpgrade] = useState("");
  const [showModal, setShowModal] = useState(false);
  const sockMaterials = [
    "Cotton/Nylon/Spandex",
    "Combed",
    "Standard Quality",
    "Cotton/Nylon/Spandex",
    "Bamboo/Nylon/Spandex",
    "Nylon/Polyester/Spandex",
    "Polyester/Spandex",
    "Organic Cotton/Nylon/Spandex",
    "Wool, Coolmax etc.",
    "Others (please contact us)",
  ];
  const sockThicknes = [
    {
      id: 1,
      name: "Standard",
      icons: Full, // Make sure Full is imported and used correctly
    },
    {
      id: 2,
      name: "Cushion Pad Socks",
      icons: Half, // Make sure Half is imported and used correctly
    },
    {
      id: 3,
      name: "Full Terry Thick",
      icons: Regular, // Make sure Regular is imported and used correctly
    },
  ];

  const sockSize = [
    { id: 1, name: "Infant & Baby Socks" },
    { id: 2, name: "Kid Socks" },
    { id: 3, name: "Woman's Standard Socks" },
    { id: 4, name: "Man's Standard Socks" },
    { id: 5, name: "Unisex's Socks" },
  ];

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

  const sockPatterns = [
    { id: 1, name: "On Both Sides", icons: TStep1 },
    { id: 2, name: "Logo Full Over", icons: TStep2 },
    { id: 3, name: "On Front", icons: TStep3 },
    { id: 4, name: "On Back", icons: TStep4 },
    { id: 5, name: "On Bottom", icons: TStep5 },
    { id: 6, name: "On Cuff", icons: TStep6 },
    { id: 7, name: "On Toe Line", icons: TStep7 },
  ];
  const customPacking = [
    { id: 1, name: "On Both Sides", icons: TStep1 },
    { id: 2, name: "Logo Full Over", icons: TStep2 },
    { id: 3, name: "On Front", icons: TStep3 },
    { id: 4, name: "On Back", icons: TStep4 },
    { id: 5, name: "On Bottom", icons: TStep5 },
  ];
  const sockUpgrade = [
    { id: 1, name: "On Both Sides", icons: TStep1 },
    { id: 2, name: "Logo Full Over", icons: TStep2 },
    { id: 3, name: "On Front", icons: TStep3 },
    { id: 4, name: "On Back", icons: TStep4 },
    { id: 5, name: "On Bottom", icons: TStep5 },
  ];

  const handleSockSizeSelect = (name: string) => {
    setSelectedSockSize(name);
  };

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

  const handleMaterialSelect = (material: string) => {
    setSelectedMaterial(material);
  };
  const handleThicknessSelect = (thickness: string) => {
    setSelectedThickness(thickness);
  };

  const handlePatternSelect = (pattern: string) => {
    setSelectedPattern(pattern);
  };
  const handleSelectPacking = (packing: string) => {
    setSelectedPacking(packing);
  };
  const handleUpgradeSelect = (upgrade: string) => {
    setSelectedSockUpgrade(upgrade);
  };
  const saveDesignRequest = async () => {
    const formData = new FormData();

    formData.append('projectName', projectName);
    formData.append('designRequest', designRequest);
    formData.append('selectedSockSize', selectedSockSize);
    formData.append('selectedLengths', JSON.stringify(selectedLengths));
    formData.append('selectedStyle', selectedStyle);
    formData.append('selectedTechnology', selectedTechnology);
    formData.append('selectedMaterial', selectedMaterial);
    formData.append('selectedThickness', selectedThickness);
    formData.append('selectedPattern', selectedPattern);
    formData.append('selectedPacking', selectedPacking);
    formData.append('selectedSockUpgrade', selectedSockUpgrade);

    // Append files to formData
    selectedFiles.forEach((file) => {
      formData.append('selectedFiles', file);
    });

    try {
      const response = await axios.post('https://your-api-url.com/save', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
      // Optionally handle success (e.g., show success message)
    } catch (error) {
      console.error('Error saving design request:', error);
      // Optionally handle error (e.g., show error message)
    }
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      saveDesignRequest(); 
      setShowModal(true);
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const isButtonDisabled =
    (currentStep === 0 &&
      (selectedLengths.length === 0 ||
        !selectedStyle ||
        !selectedTechnology)) ||
    (currentStep === 1 &&
      (selectedLengths.length === 0 ||
        !selectedMaterial ||
        !selectedSockSize ||
        !selectedThickness)) ||
    (currentStep === 2 && !selectedPattern && !selectedPacking) ||
    (currentStep === 3 && selectedFiles.length === 0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles((prevFiles) => {
      const newFiles = files.filter(
        (file) => !prevFiles.some((prevFile) => prevFile.name === file.name)
      );
      return [...prevFiles, ...newFiles];
    });
  };

  const removeFile = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
  };

  return (
    <>
      {!showTextSection && (
        <section className="w-full flex flex-col items-center justify-between font-[Montserrat] p-8 ">
          {currentStep === 0 && (
            <>
              <div className="flex flex-col items-center md:w-2/3 w-full px-2 lg:px-6">
                {/* Sock Length Section */}
                <div className="p-4 w-full ">
                  <label className="text-lg md:text-2xl font-semibold">
                    Sock Length
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {sockLength.map(({ id, name, icons }) => (
                      <div
                        key={id}
                        className={`h-28 sm:h-32 md:h-36 lg:h-44 xl:h-48 w-full border-4 ${
                          selectedLengths.includes(name)
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded-lg cursor-pointer flex flex-col items-center justify-center relative`}
                        onClick={() => handleLengthSelect(name)}
                      >
                        <Image
                          src={icons}
                          alt={name}
                          className="h-4/5 w-full absolute top-0"
                        />
                        <p className="text-center font-medium text-xs lg:text-base absolute bottom-1">
                          {name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sock Technology Section */}
                <div className="p-4 w-full  mt-4">
                  <label className="text-lg md:text-2xl font-semibold">
                    Sock Technology
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {sockTechnology.map(({ id, name, icons }) => (
                      <div
                        key={id}
                        className={`h-28 sm:h-32 md:h-36 lg:h-44 xl:h-48 w-full border-4 ${
                          selectedTechnology === name
                            ? "border-red-500"
                            : "border-gray-300"
                        } flex flex-col justify-center items-center rounded-lg p-2 cursor-pointer relative`}
                        onClick={() => handleTechnologySelect(name)}
                      >
                        <Image
                          src={icons}
                          alt={name}
                          className="h-4/5 w-full absolute top-0"
                        />
                        <p className="text-center font-semibold text-[10px] lg:text-base absolute bottom-1">
                          {name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sock Styles Section */}
                <div className="p-4 w-full  mt-4">
                  <label className="text-lg md:text-2xl font-semibold">
                    Sock Styles
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {styles.map(({ id, name, icons }) => (
                      <div
                        key={id}
                        className={`h-28 sm:h-32 md:h-36 lg:h-44 xl:h-48 w-full border-4 ${
                          selectedStyle === name
                            ? "border-red-500"
                            : "border-gray-300"
                        } flex flex-col justify-center items-center rounded-lg p-2 cursor-pointer relative`}
                        onClick={() => handleStyleSelect(name)}
                      >
                        <Image
                          src={icons}
                          alt={name}
                          className="h-2/3 mb-5 w-full absolute top-0"
                        />
                        <p className="text-center font-semibold text-[10px] lg:text-base absolute bottom-0">
                          {name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {currentStep === 1 && (
            <div className="flex flex-col items-center w-full px-2 lg:px-6">
              <div className="flex flex-col items-center md:w-2/3 w-full">
                {/* Sock Sizes Section */}
                <div className="p-4 w-full ">
                  <label className="text-2xl font-semibold">Sock Sizes</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {sockSize.map((sock) => (
                      <div
                        key={sock.id}
                        className={`border-4 ${
                          selectedSockSize === sock.name
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded-lg cursor-pointer flex flex-col justify-center items-center h-20 sm:h-24 lg:h-28 p-4`}
                        onClick={() => handleSockSizeSelect(sock.name)}
                      >
                        <p className="font-semibold text-sm sm:text-lg text-black text-center">
                          {sock.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sock Material Section */}
                <div className="p-3 w-full ">
                  <label className="text-2xl font-semibold">
                    Sock Material
                  </label>
                  <select
                    value={selectedMaterial}
                    onChange={(e) => handleMaterialSelect(e.target.value)}
                    className="border border-gray-300 font-semibold p-2 h-12 rounded-lg w-full mt-2"
                  >
                    <option value="" disabled>
                      Select Material
                    </option>
                    {sockMaterials.map((material, index) => (
                      <option key={index} value={material}>
                        {material}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sock Thickness Section */}
                <div className="p-3 w-full ">
                  <label className="text-2xl font-semibold">
                    Sock Thickness
                  </label>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {sockThicknes.map(({ id, name, icons }) => (
                      <div
                        key={id}
                        className={`h-28 sm:h-44 lg:h-52 w-full border-4 ${
                          selectedThickness === name
                            ? "border-red-500"
                            : "border-gray-300"
                        } flex flex-col justify-between items-center rounded-lg p-4 cursor-pointer`}
                        onClick={() => handleThicknessSelect(name)}
                      >
                        <Image
                          src={icons}
                          alt={name}
                          className="object-cover size-10 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-2"
                        />
                        <p className="text-center font-medium mt-2 text-xs sm:text-sm lg:text-base">
                          {name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="flex flex-col items-center w-full px-2 lg:px-6">
              <div className="flex flex-col items-center md:w-2/3 w-full">
                {/* Sock Patterns Section */}
                <div className="p-4 w-full">
                  <label className="text-3xl font-semibold">
                    Sock Patterns
                  </label>
                  <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 w-full">
                    {sockPatterns.map(({ id, name, icons }) => (
                      <div
                        key={id}
                        className={`border-4 ${
                          selectedPattern === name
                            ? "border-red-500"
                            : "border-gray-300"
                        } flex flex-col justify-center items-center rounded-lg p-2 cursor-pointer relative h-40`}
                        onClick={() => handlePatternSelect(name)}
                      >
                        <Image
                          src={icons}
                          alt={name}
                          className="h-2/3 mb-2 w-full object-contain"
                        />
                        <p className="text-center font-medium mt-2 text-xs sm:text-sm lg:text-base">
                          {name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Custom Packing Section */}
                <div className="p-4 w-full mt-8 flex flex-col">
                  <label className="text-3xl font-semibold">
                    Custom Packing
                  </label>
                  <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 w-full">
                    {customPacking.map(({ id, name, icons }) => (
                      <div
                        key={id}
                        className={`border-4 ${
                          selectedPacking === name
                            ? "border-red-500"
                            : "border-gray-300"
                        } flex flex-col justify-center items-center rounded-lg p-2 cursor-pointer relative h-40`}
                        onClick={() => handleSelectPacking(name)}
                      >
                        <Image
                          src={icons}
                          alt={name}
                          className="h-2/3 mb-2 w-full object-contain"
                        />
                        <p className="text-center font-medium mt-2 text-xs sm:text-sm lg:text-base">
                          {name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sock Upgrade Section */}
                <div className="p-4 w-full mt-8 flex flex-col">
                  <label className="text-3xl mb-2 font-semibold">
                    Sock Upgrade
                  </label>
                  <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 w-full">
                    {sockUpgrade.map(({ id, name, icons }) => (
                      <div
                        key={id}
                        className={`border-4 ${
                          selectedSockUpgrade === name
                            ? "border-red-500"
                            : "border-gray-300"
                        } flex flex-col justify-center items-center rounded-lg p-2 cursor-pointer relative h-40`}
                        onClick={() => handleUpgradeSelect(name)}
                      >
                        <Image
                          src={icons}
                          alt={name}
                          className="h-2/3 mb-2 w-full object-contain"
                        />
                        <p className="text-center font-medium mt-2 text-xs sm:text-sm lg:text-base">
                          {name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <section className="w-full  flex flex-col items-center justify-center font-[Montserrat] space-y-8 p-4">
              <div className="p-3 space-y-16 w-full sm:w-2/3 lg:w-1/2 mx-auto">
                <div className="text-center">
                  <h3 className="text-3xl font-extrabold">Design Details</h3>
                  <p className="text-sm font-semibold w-1/2 mx-auto">
                    Please tell us about the custom designs you like to see!
                    Include any logos or assets that our team can use.
                  </p>
                </div>
                <form className="flex flex-col gap-y-5">
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="w-full border border-gray-400 focus:outline-none rounded-md p-2 text-sm text-gray-900"
                    placeholder="Name Of Your Project"
                  />
                  <label className="text-black font-bold text-sm">
                    Tell us about your design request
                  </label>
                  <textarea
                    value={designRequest}
                    onChange={(e) => setDesignRequest(e.target.value)}
                    className="text-input rounded-lg flex appearance-none resize-none border border-solid border-gray-400 w-full h-24 p-4 text-gray-900 focus:outline-none"
                    placeholder="Ex: colors, styles, themes, logo placement, etc."
                  ></textarea>

                  <div className="w-full h-40 flex flex-col items-center justify-center border-2 border-dashed border-red-500 rounded-md cursor-pointer hover:border-red-700 transition-colors duration-300 relative">
                    <input
                      type="file"
                      id="file-upload"
                      multiple
                      accept="image/*" // Accepts only image files
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleFileChange}
                    />
                    <span className="text-gray-500 font-semibold">
                      Drag and drop files here
                    </span>
                    <span className="text-gray-400 text-sm">
                      or click to upload
                    </span>

                    {/* Display selected images as thumbnails */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedFiles.map((file, index) =>
                        file.type.startsWith("image/") ? (
                          <div key={index} className="relative">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={file.name}
                              className="w-20 h-20 object-cover border border-gray-300 rounded-md"
                            />
                            <button
                              className="absolute top-0 right-0 text-red-500"
                              onClick={() => removeFile(index)}
                              title="Remove file"
                            >
                              <FaTimes />
                            </button>
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </section>
          )}

          <button
            onClick={handleNextStep}
            disabled={isButtonDisabled}
            className={`w-full lg:w-2/3 h-12 sm:mt-10 rounded-md font-bold text-white text-xl transition-colors duration-300 font-[Montserrat] ${
              isButtonDisabled
                ? "bg-red-300 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {currentStep === 3 ? "Submit" : "Next"}
          </button>
        </section>
      )}

      <Modal
       
        visible={showModal}
        onOk={closeModal}
        onCancel={closeModal}
        footer={null} // Remove default footer
        centered // Center the modal on the screen
        className="modal-custom" // Custom class for additional styling
      >
        <h1 className="text-2xl font-semibold text-center text-red-500">Thank you for your submission!</h1>
        <div className="text-center">
          <p className="text-xl mt-4">
            Your design submission has been received!
          </p>
          <Button
            type="primary"
            danger
            onClick={closeModal}
            className="mt-4 w-full" // Full width button
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}
