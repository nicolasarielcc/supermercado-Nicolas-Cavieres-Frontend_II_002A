import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../context/StoreContext.jsx'

const CATEGORIAS_SUGERIDAS = [
  'Lácteos',
  'Frutas y Verduras',
  'Carnes',
  'Bebidas',
  'Limpieza',
  'Panadería',
  'Otros',
]

const inputBase =
  'mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500'

export default function Agregar() {
  const { addArticle } = useStore()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    nombre: '',
    categoria: 'Lácteos',
    precio: '',
    cantidad: '',
    descripcion: '',
    emoji: '📦',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nombre.trim() || !form.precio || !form.cantidad) return
    addArticle(form)
    navigate('/')
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Agregar artículo al inventario</h1>
        <p className="text-gray-500">
          Completa el formulario para registrar un nuevo artículo.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="card grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="nombre" className="text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={form.nombre}
            onChange={handleChange}
            className={inputBase}
            placeholder="Ej: Leche descremada 1L"
            required
          />
        </div>

        <div>
          <label htmlFor="categoria" className="text-sm font-medium text-gray-700">
            Categoría
          </label>
          <select
            id="categoria"
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
            className={inputBase}
          >
            {CATEGORIAS_SUGERIDAS.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="emoji" className="text-sm font-medium text-gray-700">
            Ícono (emoji)
          </label>
          <input
            id="emoji"
            name="emoji"
            type="text"
            value={form.emoji}
            onChange={handleChange}
            className={inputBase}
            maxLength={4}
          />
        </div>

        <div>
          <label htmlFor="precio" className="text-sm font-medium text-gray-700">
            Precio (CLP)
          </label>
          <input
            id="precio"
            name="precio"
            type="number"
            min="0"
            step="1"
            value={form.precio}
            onChange={handleChange}
            className={inputBase}
            placeholder="1290"
            required
          />
        </div>

        <div>
          <label htmlFor="cantidad" className="text-sm font-medium text-gray-700">
            Cantidad disponible
          </label>
          <input
            id="cantidad"
            name="cantidad"
            type="number"
            min="0"
            step="1"
            value={form.cantidad}
            onChange={handleChange}
            className={inputBase}
            placeholder="10"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="descripcion" className="text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            rows="3"
            value={form.descripcion}
            onChange={handleChange}
            className={inputBase}
            placeholder="Descripción breve del artículo"
          />
        </div>

        <div className="flex gap-2 sm:col-span-2">
          <button type="submit" className="btn-primary">
            Guardar artículo
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="btn-secondary"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}
