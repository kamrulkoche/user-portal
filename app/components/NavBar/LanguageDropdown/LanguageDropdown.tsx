'use client';
// components/LanguageDropdown.js
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const LanguageDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div
                className="border border-[#8E8E8E] px-4 py-2 rounded-lg hover:bg-[#4d27a3] duration-500 hover:text-white cursor-pointer"
                onClick={toggleDropdown}
            >
                <button className="flex items-center gap-3">
                    {selectedLanguage}
                    <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                </button>
            </div>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
                    <div className="py-1">
                        {languages.map((language) => (
                            <div
                                key={language}
                                onClick={() => handleLanguageSelect(language)}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            >
                                {language}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageDropdown;
