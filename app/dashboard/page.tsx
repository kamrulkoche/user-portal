"use client"
import dynamic from 'next/dynamic'
import Wallet from './Wallet/Wallet'
import TransactionChart from './TransactionChart/TransactionChart'
const Layout = dynamic(() => import('@/app/layout/dasboardlayout'), { ssr: false, })

const page = () => {
    return (
        <Layout>
            <div>
                <Wallet />
                {/* <TransactionChart/> */}
            </div>
        </Layout>
    )
}

export default page
