import { ImHeadphones } from "react-icons/im";

const SideBar = () => {
    return (
        <div className='bg-white py-8 px-4 w-60 h-screen grid  content-between'>
            <div>
                <div className='flex justify-center'>
                    <img src="images/logo.png" alt="" />
                </div>
                <div className=''>
                    <ul className='text-base font-medium my-8'>
                        <li className='flex items-center mb-6'>
                            <span className="bg-[#723EEB] p-2 rounded-full mr-2"><img src="images/dashboard-icon.png" alt="" className="h-4 w-auto" /></span>
                            <p>Dashboard</p>
                        </li>
                        <li className='flex items-center mb-6'>
                            <span className="bg-[#EBE6FA] p-2 rounded-full mr-2"><img src="images/wallet-icon.png" alt="" className="h-4 w-auto" /></span>
                            <p>Wallet</p>
                        </li>
                        <li className='flex items-center mb-6'>
                            <span className="bg-[#EBE6FA] p-2 rounded-full mr-2"><img src="images/send-money-icon.png" alt="" className="h-4.5 w-auto" /></span>
                            <p>Send Money</p>
                        </li>
                        <li className='flex items-center mb-6'>
                            <span className="bg-[#EBE6FA] p-2 rounded-full mr-2"><img src="images/transactions-icon.png" alt="" className="h-4 w-auto" /></span>
                            <p>Transactions</p>
                        </li>
                        <li className='flex items-center mb-6'>
                            <span className="bg-[#EBE6FA] p-2 rounded-full mr-2"><img src="images/recipients.png" alt="" className="h-3 w-auto" /></span>
                            <p>Recipients</p>
                        </li>
                        <li className='flex items-center mb-6'>
                            <span className="bg-[#EBE6FA] p-2 rounded-full mr-2"><img src="images/KYC.png" alt="" className="h-4.5 w-auto" /></span>
                            <p>KYC</p>
                        </li>
                        <li className='flex items-center mb-6'>
                            <span className="bg-[#EBE6FA] p-2 rounded-full mr-2"><img src="images/security.png" alt="" className="h-4.5 w-auto" /></span>
                            <p>2FA Security</p>
                        </li>
                        <li className='flex items-center mb-4'>
                            <span className="bg-[#EBE6FA] p-2 rounded-full mr-2"><img src="images/logout.png" alt="" className="h-4.5 w-auto" /></span>
                            <p>Logout</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className='h-48 bg-cover bg-center rounded-2xl' style={{ backgroundImage: "url('/images/help-center.png')" }}>
                    <div className="ml-4">
                        <div className="relative">
                            <ImHeadphones className="text-[#723EEB] text-4xl bg-white p-2 rounded  relative top-4 " />
                        </div>
                        <div className="mt-8">
                            <h2 className="text-white font-medium text-base">Help Center</h2>
                            <p className="text-xs text-white mt-1">How can we help you?</p>
                        </div>
                        <div className="ml-10">
                            <button className="text-white text-xs font-semibold bg-[#723EEB] px-3 py-2 rounded-xl mt-8 text-center ">Help Center</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SideBar
