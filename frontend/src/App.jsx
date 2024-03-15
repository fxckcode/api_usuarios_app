import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
function App() {
  const [users, setUsers] = useState([])

  const nombre = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const telefono = useRef(null)

  useEffect(() => {
    const getUsers = async () => {
      await axios.get("http://localhost:3333/users").then((response) => {
        if (response.status == 200) {
          setUsers(response.data)
          console.log(response.data);
        }
      }) 
    }

    getUsers()
  })


  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      nombre: nombre.current.value,
      email: email.current.value,
      password: password.current.value,
      telefono: telefono.current.value
    }
    axios.post("http://localhost:3333/users", data).then((response) => {
      if (response.status == 200) {
        alert("Usuario creado con exito")
        window.location.reload()
      } else if (response.status == 404) {
        alert("No se puede crear un usuario con un correo ya existente")
      }
    })
  }


  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-900'>
      <div className='w-1/2 rounded h-auto shadow shadow-slate-500 p-5 flex flex-col gap-5'>
        <h1 className='text-center text-2xl text-white font-bold'>Crear Usuario</h1>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 text-white'>
          <input type="text" required placeholder='Nombre' className='p-4 rounded border border-white bg-transparent' ref={nombre} />
          <input type="email" required placeholder='Correo Electrónico' className='p-4 rounded border border-white bg-transparent' ref={email} />
          <input type="password" required placeholder='Contraseña' className='p-4 rounded border border-white bg-transparent' ref={password} />
          <input type="number" required placeholder='Número de Teléfono' className='p-4 rounded border border-white bg-transparent' ref={telefono}  />
          <button type='submit' className='p-5 bg-sky-700 tex-white rounded hover:scale-[101%] transition-all'>Crear Usuario</button>
        </form>
        <h1 className='text-center text-2xl text-white font-bold'>Lista de Usuarios</h1>
        <table className='text-white border-collapse border border-gray-800'>
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Password</th>
              <th className="px-4 py-2">Telefono</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="bg-gray-700 hover:bg-gray-600">
                <td className="px-4 py-2">{u.id}</td>
                <td className="px-4 py-2">{u.nombre}</td>
                <td className="px-4 py-2">{u.email}</td>
                <td className="px-4 py-2">{u.password}</td>
                <td className="px-4 py-2">{u.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
