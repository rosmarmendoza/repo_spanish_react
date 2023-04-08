import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='h-screen'>
      <h1 className='my-4 text-3xl font-semibold
      dark:text-gray-100'>Soy un Contact</h1>
      <h2 className='dark:text-gray-700'>Want to know more?</h2>
      <p className='text-center my-2
      dark:text-gray-700'>Send us your questions and we will contact you</p>
      <Form />
    </div>
  )
}

export default Contact