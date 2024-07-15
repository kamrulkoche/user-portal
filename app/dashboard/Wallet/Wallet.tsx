import { MdOutlineAttachMoney } from "react-icons/md";


const Wallet = () => {
    return (
        <div>
            <div className=" lg:flex items-center grid justify-center ">
                <div className=" w-full grid lg:flex justify-between gap-10 ">
                    <div className="bg-gradient-to-r from-[#CD83FD] to-[#B37AFE]  text-white rounded-lg p-4 shadow-lg w-64 grid content-between">
                        <div>
                            <h2 className="text-base font-medium">My Wallet</h2>
                            <p className="mt-2 text-[10px] font-medium ">26 APR 2024</p>
                        </div>
                        <p className=" text-xs font-medium text-end">214 *** *** ***</p>
                        <div>
                            <p className=" text-[10px] font-medium">Wallet Balance</p>
                            <p className="mt-1 text-base font-medium">0.00$</p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 text-black flex-1">
                        <div className="bg-white rounded-lg p-4 shadow-lg ">
                            <div className="flex justify-between">
                                <h3 className="text-sm font-medium">Total Send Money</h3>
                                <div className="-mt-2"><MdOutlineAttachMoney className="text-5xl bg-[#723EEB] rounded-full p-2 text-white  " /></div>
                            </div>
                            <p className=" text-sm font-medium">0.00</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-lg grid content-between  ">
                            <div className="flex justify-between">
                                <h3 className="text-sm font-medium">Total Transaction</h3>
                            </div>
                            <p className="mt-2 text-sm font-medium">7</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-lg grid content-between  ">
                            <div className="flex justify-between">
                                <h3 className="text-sm font-medium">Completed Transaction</h3>
                            </div>
                            <p className="mt-2 text-sm font-medium">3</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-lg grid content-between  ">
                            <div className="flex justify-between">
                                <h3 className="text-sm font-medium">Ongoing Transaction</h3>
                            </div>
                            <p className="mt-4 text-sm font-medium">2</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-lg grid content-between  ">
                            <div className="flex justify-between">
                                <h3 className="text-sm font-medium">Canceled Transaction</h3>
                            </div>
                            <p className="mt-2 text-sm font-medium">2</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet
