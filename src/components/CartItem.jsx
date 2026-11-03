import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext.jsx'

export default function CartItem({ item }) {
  const { inventory, increaseQuantity, decreaseQuantity } = useStore()
  const articulo = inventory.find((a) => a.id === item.id)
  if (!articulo) return null

  const sinStock = articulo.cantidad <= 0

  return (
    <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <span className="text-3xl">{articulo.emoji}</span>

      <div className="min-w-0 flex-1">
        <Link
          to={`/detalle/${articulo.id}`}
          className="truncate font-semibold text-gray-800 hover:underline"
        >
          {articulo.nombre}
        </Link>
        <p className="text-sm text-gray-500">${articulo.precio.toLocaleString('es-CL')} c/u</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => decreaseQuantity(articulo.id)}
          className="btn-secondary h-8 w-8 px-0"
          aria-label="Disminuir cantidad"
        >
          −
        </button>
        <span className="w-8 text-center font-semibold text-gray-800">{item.cantidad}</span>
        <button
          type="button"
          onClick={() => increaseQuantity(articulo.id)}
          disabled={sinStock}
          className="btn-primary h-8 w-8 px-0"
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </div>

      <div className="w-24 text-right font-bold text-brand-700">
        ${(articulo.precio * item.cantidad).toLocaleString('es-CL')}
      </div>
    </div>
  )
}
