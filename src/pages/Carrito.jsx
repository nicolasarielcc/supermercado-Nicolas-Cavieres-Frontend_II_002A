import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext.jsx'
import CartItem from '../components/CartItem.jsx'

export default function Carrito() {
  const { cart, totalCarrito, cantidadItems } = useStore()

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Carrito de compras</h1>
        <p className="text-gray-500">
          {cantidadItems} artículo(s) en el carrito
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="rounded-lg border border-dashed border-gray-300 bg-white p-10 text-center text-gray-500">
          <p className="text-4xl">🛒</p>
          <p className="mt-2">Tu carrito está vacío.</p>
          <Link to="/" className="btn-primary mt-4">
            Ver inventario
          </Link>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-lg font-bold text-gray-900">
              <span>Total</span>
              <span className="text-brand-700">${totalCarrito.toLocaleString('es-CL')}</span>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Al aumentar o disminuir la cantidad, el inventario general se actualiza automáticamente.
            </p>
          </div>
        </>
      )}
    </div>
  )
}
