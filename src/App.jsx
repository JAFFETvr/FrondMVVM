import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './feacture/Equipamet/presentation/UL/ProductCard'
import ClientCard from './feacture/Client/presentation/Ul/ClientCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
     <div>
     <ProductCard />
     <ClientCard /> 
     </div> 
    </>
  )
}

export default App
