"use client"
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/app/layout/dashboardlayout'), { ssr: false, })

const page = () => {
    return (
        <Layout>
            <div>
                <h2>walletpage</h2>
            </div>
        </Layout>
    )
}

export default page
