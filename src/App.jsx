import { Route, Routes } from 'react-router-dom'
import { Admin } from './pages/admin/Admin'
import { Rutas } from './pages/admin/pages/Rutas'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Admin />}>
        <Route path="rutas" element={<Rutas />} />
      </Route>
    </Routes>
  )
}

export default App
