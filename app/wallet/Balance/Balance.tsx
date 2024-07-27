import { ClipboardCopyIcon, CheckIcon } from 'lucide-react'
import React, { useState } from 'react'

const Balance = () => {
    const [checkedState, setCheckedState] = useState([false, false, false]);

    const handleCheckboxChange = (index: number) => {
        const updatedState = checkedState.map((item, idx) => idx === index ? !item : item);
        setCheckedState(updatedState);
    };
    return (
        <div className="">
            <div className=" bg-white rounded-2xl shadow-md pb-8">
                <div className='p-6'>
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                            <h1 className="text-base font-medium">Wallet ID : </h1>
                            <div className="flex items-center ml-2 border border-gray-300 rounded-md px-2">
                                <span className="mr-2 text-base font-medium">123548431554</span>
                                <ClipboardCopyIcon className="h-5 w-5 text-[#723EEB] cursor-pointer" />

                            </div>
                        </div>

                        <button className="text-[#723EEB] border border-[#723EEB] rounded-sm px-3 py-1 text-sm">
                            Change PIN
                        </button>
                    </div>
                    <div>
                        <h2 className='text-base font-medium'>Balance</h2>
                        <p className='text-[#8E8E8E] text-xs font-medium'>Today, 25 APR 2024</p>
                    </div>
                    <div className="my-6">
                        <p className="text-4xl font-medium "><span className='text-xl mr-1'>$</span>00.0 <span className="text-xl -ml-1">USD</span></p>
                    </div>
                    <div className="flex text-xs justify-center mb-6  font-medium ">
                        <button className="bg-red-500 hover:bg-red-700 duration-500 text-white px-4 py-2 rounded-md w-full">Withdraw</button>
                        <button className="bg-green-500 hover:bg-green-700 duration-500 text-white px-4 py-2 rounded-md w-full ml-10">Deposit</button>
                    </div>

                </div>
                <div className='border-b-2 mb-8'>

                </div>
                <div className="mb-6 ">
                    <h2 className="text-base mb-6 px-6 ">Your Sub Wallet</h2>
                    <div className=''>
                        <table className="w-full table-auto bg-[#F4F8FB] ">
                            <thead className='bg-white '>
                                <tr className='text-[#8E8E8E] text-sm font-normal'>
                                    <th className="border-b-2 pb-2">Wallet Name</th>
                                    <th className="border-b-2 pb-2">Currency</th>
                                    <th className="border-b-2 pb-2">Balance</th>
                                    <th className="border-b-2 pb-2"></th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {['Indian', 'Indian', 'Indian'].map((wallet, index) => (
                                    <tr key={index} className=''>
                                        <td className="border-b-2 py-2">{wallet}</td>
                                        <td className="border-b-2 py-2">Indian Rupee</td>
                                        <td className="border-b-2 py-2">00.0 ₹</td>
                                        <td className="border-b-2 py-2 text-right">
                                            <div className="flex justify-center">
                                                <div
                                                    className={`border-2 border-purple-500 rounded-md w-6 h-6 flex items-center justify-center cursor-pointer ${checkedState[index] ? 'bg-white' : 'bg-white'
                                                        }`}
                                                    onClick={() => handleCheckboxChange(index)}
                                                >
                                                    {checkedState[index] && <CheckIcon className="h-5 w-5 text-purple-500" />}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="text-center px-6">
                    <button className="bg-[#723EEB] hover:bg-[#5818ec] duration-500 text-white px-6 py-2 rounded-md w-full">Send Now</button>
                </div>
            </div>
        </div>
    )
}

export default Balance
