import { useState } from 'react'
import './App.css'
import Navbar from './Componets/Navbar'
import Banner from './Componets/Banner'
import Container from './Componets/Container'
import Footer from './Componets/Footer'

function App() {
  const [productcount, setProductCount] = useState(0)

  return (
    <div className='container'>
      <Navbar productcount={productcount} />
      <Banner/>
      <Container setProductCount={setProductCount}/>
      <Footer/>

    </div>
  )
}

export default App
