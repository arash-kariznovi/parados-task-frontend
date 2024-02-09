import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=''>
      <nav className=' flex justify-between shadow-2xl w-full p-6'>
        NBPOWER PROJECT - DASHBOARD

        <ul className='hidden md:flex space-x-8 flex-row'>
          {/* <li className='flex items-center'>
            <Link to='/'>Home</Link>
          </li>
          <li className='flex items-center'>
            <Link to='/upload'>Upload File</Link>
          </li>
          <li className='flex items-center'>
            <Link to='/files'>Files</Link>
          </li>

          <li className='flex items-center'>
            <Link to='/addtext'>Upload Text</Link>
          </li>
          <li className='flex items-center'>
            <Link to='/texts'>Texts</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout
