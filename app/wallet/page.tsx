"use client"
import dynamic from 'next/dynamic'
import Balance from './Balance/Balance'
import CreateWallet from './CreateWallet/CreateWallet'

const Layout = dynamic(() => import('@/app/layout/dashboardlayout'), { ssr: false, })

const page = () => {
    return (
        <Layout>
            <div className='pb-12'>
                <h2 className='text-sm font-medium mb-4' >Wallet Balance</h2>
                <div className='grid md:grid-cols-2 gap-6 '>
                    <Balance />
                    <CreateWallet />
                </div>
                <div className='flex justify-between items-center mt-8'>
                    <h2 className='text-black text-sm font-medium'>Wallet Log</h2>
                    <button className='text-white text-base font-bold py-2 px-5 bg-[#723EEB] hover:bg-[#5e21ee] duration-500 rounded-3xl '>View More</button>
                </div>
            </div>
        </Layout>
    )
}

export default page
