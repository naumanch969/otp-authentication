import { Routes, Route } from 'react-router-dom'
import { Home, Auth } from './pages'
import { Navbar } from './components'

function App() {

  return (
    <div className="bg-black text-white min-w-[100vw] min-h-[100vh] ">

      <Navbar />

      <div style={{ minHeight: 'calc(100vh - 4rem)' }} className="bg-darkGray flex justify-center items-center " >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
