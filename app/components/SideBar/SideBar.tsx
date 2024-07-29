import { ImHeadphones } from "react-icons/im";
import SideBarNavLink from "../SideBarNavLink/SideBarNavLink";

interface IProps {
    isOpen: boolean;
}

const SideBar = ({ isOpen }: IProps) => {

    return (
        <>
            <div className='relative lg:relative'>
                <div className={`bg-white py-8 px-4 w-60 h-screen fixed lg:relative lg:block transition-transform duration-100 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                    <div className='h-full flex flex-col justify-between overflow-y-auto '>
                        <div>
                            <div className='flex justify-center'>
                                <img src="images/logo.png" alt="Logo" />
                            </div>
                            <nav>
                                <ul className='text-base font-medium my-8 ml-4'>
                                    <li className="mb-8">
                                        <SideBarNavLink
                                            activeClasses="bg-[#E5E5EC] p-2 rounded-xl -ml-2 "
                                            inactiveClasses=""
                                            text="Dashboard"
                                            href="/dashboard"
                                            activeIcon="images/dashboard-icon.png"
                                            inactiveIcon="images/dashboard-icon.png"
                                        />
                                    </li>
                                    <li className="mb-8">
                                        <SideBarNavLink
                                            activeClasses="bg-[#E5E5EC] p-2 rounded-xl -ml-2"
                                            inactiveClasses=""
                                            text="Wallet"
                                            href="/wallet"
                                            activeIcon="images/wallet-icon.png"
                                            inactiveIcon="images/wallet-icon.png"
                                        />
                                    </li>
                                    <li className="mb-8">
                                        <SideBarNavLink
                                            activeClasses="bg-[#E5E5EC] p-2 rounded-xl -ml-2"
                                            inactiveClasses=""
                                            text="Send Money"
                                            href="/send-money"
                                            activeIcon="images/send-money-icon.png"
                                            inactiveIcon="images/send-money-icon.png"
                                        />
                                    </li>
                                    <li className="mb-8">
                                        <SideBarNavLink
                                            activeClasses="bg-[#E5E5EC] p-2 rounded-xl -ml-2"
                                            inactiveClasses=""
                                            text="Transactions"
                                            href="/transactions"
                                            activeIcon="images/transactions-icon.png"
                                            inactiveIcon="images/transactions-icon.png"
                                        />
                                    </li>
                                    <li className="mb-8">
                                        <SideBarNavLink
                                            activeClasses="bg-[#E5E5EC] p-2 rounded-xl -ml-2"
                                            inactiveClasses=""
                                            text="Recipients"
                                            href="/recipients"
                                            activeIcon="images/recipients.png"
                                            inactiveIcon="images/recipients.png"
                                        />
                                    </li>
                                    <li className="mb-8">
                                        <SideBarNavLink
                                            activeClasses="bg-[#E5E5EC] p-2 rounded-xl -ml-2"
                                            inactiveClasses=""
                                            text="KYC"
                                            href="/kyc"
                                            activeIcon="images/KYC.png"
                                            inactiveIcon="images/KYC.png"
                                        />
                                    </li>
                                    <li className="mb-8">
                                        <SideBarNavLink
                                            activeClasses="bg-[#E5E5EC] p-2 rounded-xl -ml-2"
                                            inactiveClasses=""
                                            text="2FA Security"
                                            href="/security"
                                            activeIcon="images/security.png"
                                            inactiveIcon="images/security.png"
                                        />
                                    </li>
                                    <li className="mb-8">
                                        <SideBarNavLink
                                            activeClasses="bg-[#E5E5EC] p-2 rounded-xl -ml-2"
                                            inactiveClasses=""
                                            text="Logout"
                                            href="/logout"
                                            activeIcon="images/logout.png"
                                            inactiveIcon="images/logout.png"
                                        />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <div className='h-48 bg-cover bg-center rounded-2xl' style={{ backgroundImage: "url('/images/help-center.png')" }}>
                                <div className="ml-4">
                                    <div className="relative">
                                        <ImHeadphones className="text-[#723EEB] text-4xl bg-white p-2 rounded relative top-4" />
                                    </div>
                                    <div className="mt-8">
                                        <h2 className="text-white font-medium text-base">Help Center</h2>
                                        <p className="text-xs text-white mt-1">How can we help you?</p>
                                    </div>
                                    <div className="ml-10">
                                        <button className="text-white text-xs font-semibold bg-[#723EEB] px-3 py-2 rounded-xl mt-8 text-center">Help Center</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;
