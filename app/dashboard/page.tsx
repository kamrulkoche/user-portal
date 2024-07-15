"use client"
import dynamic from 'next/dynamic'
import Wallet from './Wallet/Wallet'
const Layout = dynamic(() => import('@/app/layout/dashboardlayout'), { ssr: false, })

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
