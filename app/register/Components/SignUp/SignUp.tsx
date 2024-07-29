"use client"
import { MdOutlineHorizontalRule } from "react-icons/md";


const SignUp = () => {
    return (
        <div className='pb-36'>
            <div className="grid  md:grid-cols-2 gap-5">
                <div className="">
                    <img src="images/register img1.png" alt="User on laptop" className="" />
                </div>
                <div className="bg-white rounded-xl shadow-lg px-5 py-7 max-w-xl">
                    <h2 className="text-black text-sm font-medium mb-8">Register </h2>
                    <form>
                        <div className="mb-7">
                            <input type="text" id="" className="border border-gray-300 text-gray-900 text-sm rounded-3xl block w-full p-2.5 dark:border-gray-600 mt-1" placeholder="Enter Full Name" required />
                        </div>
                        <div className="mb-7">
                            <input type="text" id="" className="border border-gray-300 text-gray-900 text-sm rounded-3xl block w-full p-2.5 dark:border-gray-600 mt-1" placeholder="Enter Email Address" required />
                        </div>
                        <div className="mb-7 flex">
                            <input type="text" id="" className="border border-gray-300 text-gray-900 text-sm rounded-3xl block w-full p-2.5 dark:border-gray-600 mt-1" placeholder="Enter Password..." required />
                            <input type="text" id="" className="ml-9 border border-gray-300 text-gray-900 text-sm rounded-3xl block w-full p-2.5 dark:border-gray-600 mt-1" placeholder="Re-enter Password..." required />
                        </div>
                        <div className="mb-5">
                            <input type="text" id="" className="border-2 border-[#9747FF] text-gray-900 text-sm rounded-3xl block w-full p-2.5 dark:border-gray-600 mt-1 placeholder-[#9747FF]" placeholder="You Are Referred By Abdul Karim" required />
                        </div>
                        <div className='flex items-center mb-5 justify-center'>
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#9747FF] bg-[#AAA9A9] border-[#9747FF] rounded focus:ring-blue-500 " />
                            <p className='font-medium text-sm ml-2'>I have agreed with <span className='underline text-[#723EEB] '>Terms Of Use & Privacy Policy</span></p>
                        </div>
                        <div className="mb-4">
                            <button className="w-full md:px-4 py-2.5 bg-[#723EEB] text-white text-xs rounded-3xl hover:bg-[#6129e6] duration-500">Register</button>
                        </div>
                    </form>
                    <div className="flex flex-col items-center -mt-4">
                        <div className="flex items-center mb-4">
                            <hr className="w-20 lg:w-48 h-px my-8 bg-black border-0 " />
                            <span className="mx-2 text-black w-24 flex text-xs font-medium ml-5">Or Register with</span  >
                            <hr className="w-28 lg:w-48 h-px my-8 bg-black border-0 " />
                        </div>
                        <button className="border border-[#FF3D00] w-full flex justify-center py-2 -mt-5">
                            <div className='flex items-center '>
                                <img src="images/flat-color-icons_google.png" alt="" />
                                <p className='text-[#FF3D00] text-xs font-medium ml-2'> Google</p>
                            </div>
                        </button>
                    </div>

                    <div className="text-center mt-4 flex justify-center gap-1">
                        <MdOutlineHorizontalRule />
                        <a href="login" className="text-black text-xs">Already Have An Account? <span className='text-[#723EEB] ml-1'>Login</span></a>
                        <MdOutlineHorizontalRule />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
