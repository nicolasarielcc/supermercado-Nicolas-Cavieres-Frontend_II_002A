import { Link } from 'react-router-dom'

export default function ArticleCard({ article }) {
  const sinStock = article.cantidad <= 0

  return (
    <Link
      to={`/detalle/${article.id}`}
      className="card flex flex-col gap-2 p-4 transition hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between">
        <span className="text-3xl">{article.emoji}</span>
        <span className="badge bg-brand-100 text-brand-800">{article.categoria}</span>
      </div>

      <h3 className="font-semibold text-gray-800">{article.nombre}</h3>
      <p className="text-sm text-gray-500 line-clamp-2">{article.descripcion}</p>

      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="text-lg font-bold text-brand-700">
          ${article.precio.toLocaleString('es-CL')}
        </span>
        <span
          className={`badge ${sinStock ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}
        >
          {sinStock ? 'Agotado' : `${article.cantidad} disponibles`}
        </span>
      </div>
    </Link>
  )
}
