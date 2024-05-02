import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import NavHeader from './components/NavHeader/NavHeader'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import DivvyList from './pages/DivvyList/DivvyList'
import Divvy from './pages/Divvy/Divvy'
import Transaction from './pages/Transaction/Transaction'

function App() {
  const { pathname } = useLocation()
  function hideNav () {
    return pathname === '/' || pathname === '/sign-up'
  }
  return (
    <main>
      {hideNav() ? null : <NavHeader />}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/divvys" element={<DivvyList />} />
        <Route path="/divvys/:divvyId" element={<Divvy />} />
        <Route path="/divvys/new" element={<Divvy />} />
        <Route path="/divvys/:divvyId/:transactionId" element={<Transaction />} />
        <Route path="/divvys/:divvyId/new-transaction" element={<Transaction />} />
      </Routes>
    </main>
  )
}

export default App