import { Link, useParams } from 'react-router-dom'
import { useStore } from '../context/StoreContext.jsx'

export default function Detalle() {
  const { id } = useParams()
  const { inventory, addToCart } = useStore()
  const articulo = inventory.find((a) => a.id === Number(id))

  if (!articulo) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 bg-white p-10 text-center">
        <p className="text-gray-500">El artículo no existe o no está disponible.</p>
        <Link to="/" className="btn-primary mt-4">
          Volver al inventario
        </Link>
      </div>
    )
  }

  const sinStock = articulo.cantidad <= 0

  return (
    <div className="flex flex-col gap-6">
      <Link to="/" className="text-sm font-medium text-brand-600 hover:underline">
        ← Volver al inventario
      </Link>

      <div className="card flex flex-col gap-6 p-6 sm:flex-row">
        <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-7xl">
          {articulo.emoji}
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <span className="badge w-fit bg-brand-100 text-brand-800">
            {articulo.categoria}
          </span>
          <h1 className="text-3xl font-bold text-gray-900">{articulo.nombre}</h1>
          <p className="text-gray-600">{articulo.descripcion}</p>

          <div className="mt-2 flex items-center gap-4">
            <span className="text-3xl font-bold text-brand-700">
              ${articulo.precio.toLocaleString('es-CL')}
            </span>
            <span
              className={`badge ${sinStock ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}
            >
              {sinStock ? 'Agotado' : `${articulo.cantidad} unidades disponibles`}
            </span>
          </div>

          <button
            type="button"
            onClick={() => addToCart(articulo.id)}
            disabled={sinStock}
            className="btn-primary mt-2 w-fit"
          >
            Agregar al carrito
          </button>

          {sinStock && (
            <p className="text-sm text-red-600">
              No hay stock disponible para agregar al carrito.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
