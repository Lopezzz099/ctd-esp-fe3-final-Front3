import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from '../Components/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [odontologoList, setOdontologoList] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
    axios(url)
    .then(res => setOdontologoList(res.data))
  }, [])
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {odontologoList.map(odontologo => <Card name = {odontologo.name} username = {odontologo.username} id = {odontologo.id}/>)}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home