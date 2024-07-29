import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('@/app/layout/homeLayout'), { ssr: false, })
import Login from './Components/Login'

const page = () => {
    return (
        <Layout>
            <div>
                <Login></Login>
            </div>
        </Layout>
    )
}

export default page
