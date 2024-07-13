import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('@/app/layout/dasboardlayout'), { ssr: false, })

const page = () => {
    return (
        <Layout>
            <div>
                <h2>Welcome</h2>
            </div>
        </Layout>
    )
}

export default page
