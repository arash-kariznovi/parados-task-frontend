import './App.css'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'

import FileShow from './components/FileShow'
import FileUpload from './components/FileUpload'
import TextInput from './components/TextInput'
import TextShow from './components/TextShow'

import { Fragment } from 'react'
import Dashboard from './components/Dashboard'

// function App() {

//   return (
//     <Fragment>
//       <Particles options={options} init={particlesInit} />

//       {/* <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path='*' element={<Home />} />
//             <Route path='/files' element={<FileShow />} />
//             <Route path='/upload' element={<FileUpload />} />
//             <Route path='/addtext' element={<TextInput />} />
//             <Route path='/texts' element={<TextShow />} />
//           </Route>
//         </Routes>
//       </BrowserRouter> */}
//     </Fragment>
//   )
// }

// export default App



const App = () => {
  return (
    <div>
     
      <div className='absolute w-full'>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Dashboard />} />

              {/* <Route path='*' element={<Home />} />
              <Route path='/files' element={<FileShow />} />
              <Route path='/upload' element={<FileUpload />} />
              <Route path='/addtext' element={<TextInput />} />
              <Route path='/texts' element={<TextShow />} /> */}
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </div>
  )
}

export default App
