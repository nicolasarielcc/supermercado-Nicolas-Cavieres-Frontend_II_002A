export default function CategoryFilter({ categorias, seleccion, onCambiar }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <label htmlFor="categoria" className="text-sm font-medium text-gray-700">
        Filtrar por categoría:
      </label>
      <select
        id="categoria"
        value={seleccion}
        onChange={(e) => onCambiar(e.target.value)}
        className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
      >
        <option value="todas">Todas las categorías</option>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  )
}
