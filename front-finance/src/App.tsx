import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import { GlobalStyle } from './style'

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </>
    )
}

export default App