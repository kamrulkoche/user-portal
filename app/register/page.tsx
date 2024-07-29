import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('@/app/layout/homeLayout'), { ssr: false, })
import SignUp from './Components/SignUp/SignUp'

const page = () => {
  return (
    <Layout>
      <div>
        <SignUp></SignUp>
      </div>
    </Layout>
  )
}

export default page
