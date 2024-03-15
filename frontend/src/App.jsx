import React, { useRef } from 'react'
import axios from 'axios'
function App() {

  const nombre = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const telefono = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      nombre: nombre.current.value,
      email: email.current.value,
      password: password.current.value,
      telefono: telefono.current.value
    }
    axios.post("http://localhost:3333/users", data).then((response) => {
      console.log(response);
    })
  }


  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-900'>
      <div className='w-1/2 rounded h-auto shadow shadow-slate-500 p-5 flex flex-col gap-5'>
        <h1 className='text-center text-2xl text-white'>Crear Usuario</h1>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 text-white'>
          <input type="text" required placeholder='Nombre' className='p-4 rounded border border-white bg-transparent' ref={nombre} />
          <input type="email" required placeholder='Correo Electrónico' className='p-4 rounded border border-white bg-transparent' ref={email} />
          <input type="password" required placeholder='Contraseña' className='p-4 rounded border border-white bg-transparent' ref={password} />
          <input type="number" required placeholder='Número de Teléfono' className='p-4 rounded border border-white bg-transparent' ref={telefono}  />
          <button type='submit' className='p-5 bg-sky-700 tex-white rounded hover:scale-[101%] transition-all'>Crear Usuario</button>
        </form>
      </div>
    </div>
  )
}

export default App
