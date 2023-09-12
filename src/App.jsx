import { Route, Routes } from 'react-router-dom'
import './assets/styles/App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
