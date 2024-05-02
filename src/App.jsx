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
  
  //TODO: add function to pass down to pages that will pass the page's component name and desired page title back up to the App component and store it in a variable. Also pass that down to the NavHeader component to display the page name.

  return (
    <main>
      {hideNav() ? null : <NavHeader />}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/divvys" element={<DivvyList />} />
        <Route path="/divvys/:divvy-id" element={<Divvy />} />
        <Route path="/divvys/new" element={<Divvy />} />
        <Route path="/divvys/:divvy-id/:transaction-id" element={<Transaction />} />
        <Route path="/divvys/:divvy-id/new-transaction" element={<Transaction />} />
      </Routes>
    </main>
  )
}

export default App