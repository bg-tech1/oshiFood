import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { TopPage } from './feature/top/page/TopPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
