"use client"
import dynamic from 'next/dynamic'
import SendMoneyLog from './SendMoneyLog/SendMoneyLog'
import TotalTransactionsChart from './TotalTransactionsChart/TotalTransactionsChart'
import Wallet from './Wallet/Wallet'
const Layout = dynamic(() => import('@/app/layout/dashboardlayout'), { ssr: false, })

const page = () => {
    return (
        <Layout>
            <div>
                <Wallet />
                <TotalTransactionsChart />
                <SendMoneyLog/>
            </div>
        </Layout>
    )
}

export default page
