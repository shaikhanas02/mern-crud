import { useState } from 'react'
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Alluser from './Alluser';
import Adduser from './Adduser';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path= '/' element={<Home />}/>
      <Route path= '/alluser' element={<Alluser />}/>
      <Route path= '/adduser' element={<Adduser />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
