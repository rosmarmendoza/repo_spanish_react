import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState()

  const { dentistId } = useParams()
  const URL_FIND = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios.get(URL_FIND, { params: { 'id': dentistId } })
      .then(res => setDentist(res.data[0]))
      .catch(error => console.log(error))
  }, [dentistId])

  if (!dentist) {
    return <p>Loading...</p>;
  }
  const { name, email, phone, website, id } = dentist
  console.log("den", dentist)

  return (
    <div className='h-screen'>
      <h1 className='py-4 text-xl font-semibold dark:text-white'>{`Detail Dentist ${id}`} </h1>
      <table className='table-fixed w-1/2 mx-auto
      bg-gray-200
        dark:bg-red-100 border-2 p-2'>
        <tbody>
          <tr>
            <td className='p-2'>Name </td>
            <td className='p-2'>{name}</td>
          </tr>
          <tr>
            <td className='p-2'>Email </td>
            <td className='p-2'>{email}</td>
          </tr>
          <tr>
            <td className='p-2'>Phone </td>
            <td className='p-2'>{phone}</td>
          </tr>
          <tr>
            <td className='p-2'>WebSite </td>
            <td className='p-2'>{website}</td>
          </tr>
        </tbody>
      </table >
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail