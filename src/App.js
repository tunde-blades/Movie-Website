import Allroutes from './routes/Allroutes'
import { useEffect } from "react"
import { useState } from "react"
import { BrowserRouter } from 'react-router-dom'


const App = () => {

const apiLink = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0'

const [items,setItems] = useState([])
const [newItem,setNewItem] = useState('')
const [search,setSearch] = useState('')

useEffect(() => {
    console.log('api run')
  fetch(apiLink).then(response => response.json()).then(data => setItems(data))
}, [])
console.log(setItems)


  return (
    <BrowserRouter>
      <Allroutes/>
    </BrowserRouter>
  )
}

export default App