import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './feacture/Product/presentation/UL/ProductCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <ProductCard />
    </>
  )
}

export default App
