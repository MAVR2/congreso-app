import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Participantes from './pages/Participantes'
import Registro from './pages/Registro'
import Gafete from './pages/Gafete'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/participantes" element={<Participantes />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/gafete/:id" element={<Gafete />} />
    </Routes>
  )
}
