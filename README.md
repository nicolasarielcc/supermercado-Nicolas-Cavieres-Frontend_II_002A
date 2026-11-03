# 🛒 Supermercado — Gestión de Inventario

Sitio web de gestión de inventario de un supermercado, desarrollado en **React** para la actividad sumativa de la semana 3 de **Desarrollo Frontend II (PFY2202)**.

Aplicación **SPA** que permite listar artículos, filtrarlos por categoría, ver su detalle, agregarlos al carrito y modificar cantidades actualizando el inventario general en tiempo real.

## Funcionalidades

| # | Funcionalidad | Descripción |
|---|---|---|
| 1 | **Listado de artículos** | Muestra todos los artículos del inventario con su información completa (nombre, categoría, precio y stock). |
| 2 | **Filtro por categoría** | Filtra los artículos de forma dinámica sin perder los datos originales del inventario. |
| 3 | **Detalle de artículo** | Al hacer clic en un artículo se muestra su detalle (ruta dinámica `/detalle/:id`) y permite agregarlo al carrito, restando la cantidad disponible. |
| 4 | **Carrito de compras** | Lista los artículos agregados y permite aumentar/disminuir la cantidad, actualizando el inventario general automáticamente. |
| 5 | **Agregar artículo** | Formulario para registrar nuevos artículos al inventario (continuación de la actividad formativa 2). |

## Tecnologías

- **React 18** (componentes funcionales + hooks).
- **React Router 6** (navegación SPA con rutas dinámicas).
- **Tailwind CSS 3** (framework CSS, estilos consistentes y diseño responsive).
- **Vite** (herramienta de build y desarrollo).
- Gestión de estado global con **Context + useReducer** (sin *prop drilling*).

## Estructura del proyecto

```
supermercado/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx              # Punto de entrada
    ├── App.jsx               # Provider + Router
    ├── AppRoutes.jsx         # Rutas centralizadas
    ├── index.css             # Directivas Tailwind + clases reutilizables
    ├── data/
    │   └── articles.js       # Inventario inicial
    ├── context/
    │   └── StoreContext.jsx  # Estado global (inventario + carrito)
    ├── components/
    │   ├── Layout.jsx
    │   ├── Navbar.jsx
    │   ├── ArticleCard.jsx
    │   ├── CategoryFilter.jsx
    │   └── CartItem.jsx
    └── pages/
        ├── Listado.jsx       # RF1 + RF2
        ├── Detalle.jsx       # RF3
        ├── Carrito.jsx       # RF4
        └── Agregar.jsx       # Formulario (continuación formativa 2)
```

## Cómo ejecutar en local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Generar build de producción
npm run build
```

## Despliegue (GitHub Pages)

El proyecto está publicado en **GitHub Pages**:

```
https://nicolasarielcc.github.io/supermercado-Nicolas-Cavieres-Frontend_II_002A/
```

Para volver a desplegar:

```bash
npm run deploy
```

> Nota: se utiliza `HashRouter` para que la navegación SPA funcione correctamente en GitHub Pages sin requerir configuración adicional del servidor.

## Autor

Nicolás Cavieres — Desarrollo Frontend II (PFY2202).
