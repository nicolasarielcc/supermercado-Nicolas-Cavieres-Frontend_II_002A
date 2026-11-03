import { HashRouter } from 'react-router-dom'
import { StoreProvider } from './context/StoreContext.jsx'
import AppRoutes from './AppRoutes.jsx'

export default function App() {
  return (
    <StoreProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </StoreProvider>
  )
}
