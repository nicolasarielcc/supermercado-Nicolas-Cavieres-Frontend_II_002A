import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Listado from './pages/Listado.jsx'
import Detalle from './pages/Detalle.jsx'
import Carrito from './pages/Carrito.jsx'
import Agregar from './pages/Agregar.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Listado />} />
        <Route path="detalle/:id" element={<Detalle />} />
        <Route path="carrito" element={<Carrito />} />
        <Route path="agregar" element={<Agregar />} />
        <Route path="*" element={<Listado />} />
      </Route>
    </Routes>
  )
}
