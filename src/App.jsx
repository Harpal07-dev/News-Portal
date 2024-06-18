import { useState } from 'react'
import Navbar from './components/Navbar'
import NewsPanel from './components/NewsPanel'

const App = () => {

  const [category,setCategory]=useState('general')

  return (
    <div>
        
        <Navbar setCategory={setCategory} />
        <NewsPanel category={category}/>
    </div> 
     )
}

export default App