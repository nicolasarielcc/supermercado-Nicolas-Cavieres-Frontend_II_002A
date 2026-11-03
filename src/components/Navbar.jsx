import { NavLink } from 'react-router-dom'
import { useStore } from '../context/StoreContext.jsx'

const linkBase = 'rounded-md px-3 py-2 text-sm font-medium transition'
const linkActive = 'bg-brand-700 text-white'
const linkInactive = 'text-gray-300 hover:bg-brand-700 hover:text-white'

export default function Navbar() {
  const { cantidadItems } = useStore()

  return (
    <nav className="bg-brand-900">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-bold text-white">
          <span>🛒</span> Supermercado
        </NavLink>

        <div className="flex flex-wrap items-center gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}
          >
            Inventario
          </NavLink>
          <NavLink
            to="/agregar"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}
          >
            Agregar artículo
          </NavLink>
          <NavLink
            to="/carrito"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}
          >
            Carrito
            {cantidadItems > 0 && (
              <span className="ml-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1.5 text-xs font-bold text-brand-900">
                {cantidadItems}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
