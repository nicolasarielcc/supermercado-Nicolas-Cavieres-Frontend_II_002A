import { createContext, useContext, useReducer } from 'react'
import { articulosIniciales } from '../data/articles.js'

const StoreContext = createContext(null)

const ACTIONS = {
  ADD_ARTICLE: 'ADD_ARTICLE',
  ADD_TO_CART: 'ADD_TO_CART',
  INCREASE_QUANTITY: 'INCREASE_QUANTITY',
  DECREASE_QUANTITY: 'DECREASE_QUANTITY',
}

const initialState = {
  inventory: articulosIniciales,
  cart: [],
}

function storeReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_ARTICLE: {
      const nuevo = {
        ...action.payload,
        id: Date.now(),
        cantidad: Number(action.payload.cantidad),
        precio: Number(action.payload.precio),
      }
      return { ...state, inventory: [...state.inventory, nuevo] }
    }

    case ACTIONS.ADD_TO_CART: {
      const articulo = state.inventory.find((a) => a.id === action.payload.id)
      if (!articulo || articulo.cantidad <= 0) return state

      const inventory = state.inventory.map((a) =>
        a.id === action.payload.id ? { ...a, cantidad: a.cantidad - 1 } : a,
      )

      const yaEnCarrito = state.cart.find((c) => c.id === action.payload.id)
      const cart = yaEnCarrito
        ? state.cart.map((c) =>
            c.id === action.payload.id ? { ...c, cantidad: c.cantidad + 1 } : c,
          )
        : [...state.cart, { id: action.payload.id, cantidad: 1 }]

      return { inventory, cart }
    }

    case ACTIONS.INCREASE_QUANTITY: {
      const articulo = state.inventory.find((a) => a.id === action.payload.id)
      if (!articulo || articulo.cantidad <= 0) return state

      const inventory = state.inventory.map((a) =>
        a.id === action.payload.id ? { ...a, cantidad: a.cantidad - 1 } : a,
      )
      const cart = state.cart.map((c) =>
        c.id === action.payload.id ? { ...c, cantidad: c.cantidad + 1 } : c,
      )
      return { inventory, cart }
    }

    case ACTIONS.DECREASE_QUANTITY: {
      const item = state.cart.find((c) => c.id === action.payload.id)
      if (!item) return state

      const inventory = state.inventory.map((a) =>
        a.id === action.payload.id ? { ...a, cantidad: a.cantidad + 1 } : a,
      )
      const cart = state.cart
        .map((c) =>
          c.id === action.payload.id ? { ...c, cantidad: c.cantidad - 1 } : c,
        )
        .filter((c) => c.cantidad > 0)

      return { inventory, cart }
    }

    default:
      return state
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(storeReducer, initialState)

  const totalCarrito = state.cart.reduce((sum, item) => {
    const articulo = state.inventory.find((a) => a.id === item.id)
    return sum + (articulo ? articulo.precio * item.cantidad : 0)
  }, 0)

  const cantidadItems = state.cart.reduce((sum, item) => sum + item.cantidad, 0)

  const value = {
    inventory: state.inventory,
    cart: state.cart,
    totalCarrito,
    cantidadItems,
    addArticle: (payload) => dispatch({ type: ACTIONS.ADD_ARTICLE, payload }),
    addToCart: (id) => dispatch({ type: ACTIONS.ADD_TO_CART, payload: { id } }),
    increaseQuantity: (id) =>
      dispatch({ type: ACTIONS.INCREASE_QUANTITY, payload: { id } }),
    decreaseQuantity: (id) =>
      dispatch({ type: ACTIONS.DECREASE_QUANTITY, payload: { id } }),
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error('useStore debe usarse dentro de un StoreProvider')
  }
  return context
}
