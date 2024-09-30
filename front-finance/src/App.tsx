import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import { GlobalStyle } from './style'
import { ToastContainer } from 'react-toastify'
import Filters from './pages/Filters'

function App() {
  return (
    <>
      <GlobalStyle/>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/clientes' element={1}/>
          <Route path='/filtros' element={<Filters/>}/>
        </Routes>
      </Router>
    </>
    )
}

export default App