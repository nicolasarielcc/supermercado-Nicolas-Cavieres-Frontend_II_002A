import { useMemo, useState } from 'react'
import { useStore } from '../context/StoreContext.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import CategoryFilter from '../components/CategoryFilter.jsx'

export default function Listado() {
  const { inventory } = useStore()
  const [categoria, setCategoria] = useState('todas')

  const categorias = useMemo(
    () => [...new Set(inventory.map((a) => a.categoria))].sort(),
    [inventory],
  )

  const articulosFiltrados = useMemo(() => {
    if (categoria === 'todas') return inventory
    return inventory.filter((a) => a.categoria === categoria)
  }, [inventory, categoria])

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Inventario de artículos</h1>
        <p className="text-gray-500">
          {articulosFiltrados.length} artículo(s) {categoria !== 'todas' && `en "${categoria}"`}
        </p>
      </div>

      <CategoryFilter
        categorias={categorias}
        seleccion={categoria}
        onCambiar={setCategoria}
      />

      {articulosFiltrados.length === 0 ? (
        <div className="rounded-lg border border-dashed border-gray-300 bg-white p-10 text-center text-gray-500">
          No hay artículos en esta categoría.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articulosFiltrados.map((articulo) => (
            <ArticleCard key={articulo.id} article={articulo} />
          ))}
        </div>
      )}
    </div>
  )
}
