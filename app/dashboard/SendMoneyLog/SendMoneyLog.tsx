import { GoArrowUp, GoDotFill } from "react-icons/go";


const SendMoneyLog = () => {
    return (
        <div className='mt-14 mb-10'>
            <div className='flex justify-between'>
                <h2 className='text-sm font-medium'>Send Money Log</h2>
                <button className='bg-[#723EEB] hover:bg-[#6125ec] duration-500 rounded-3xl text-base font-bold text-white px-5 py-2'>View More</button>
            </div>
            <div className='mt-8 flex justify-between items-center bg-white rounded-2xl shadow-lg px-3 sm:px-6 py-3'>
                <div className="flex items-center">
                    <div className="bg-[#F3F2F2] p-3 rounded-full mr-4">
                        <GoArrowUp className="text-xl sm:text-3xl" />
                    </div>
                    <div>
                        <h2 className="sm:text-lg font-semibold">Samit Kumar Baral </h2>
                        <p className="text-xs flex items-center ml-1">Bank Transfer <span className="flex items-center ml-2"><GoDotFill className="text-[#FF9F43]" /><p>Pending</p></span> </p>
                    </div>
                </div>
                <div>
                    <h2 className='text-[#723EEB] text-sm font-semibold '> ID : DPX002</h2>
                </div>
            </div>
        </div>
    )
}

export default SendMoneyLog
