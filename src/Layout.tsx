import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <main>
    <div className='py-3 bg-black sticky top-0 z-50'>
        Navbar 
    </div>
    <div>
        <Outlet/>
    </div>
    <div>
        Footer
    </div>
   </main>
  )
}

export default Layout