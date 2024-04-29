import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
// import { Flex } from '@radix-ui/themes'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import DivvyList from './pages/DivvyList/DivvyList'
import Divvy from './pages/Divvy/Divvy'
import Transaction from './pages/Transaction/Transaction'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/divvys" element={<DivvyList />} />
        <Route path="/divvys/:divvy-id" element={<Divvy />} />
        <Route path="/divvys/new" element={<Divvy />} />
        <Route path="/divvys/:divvy-id/:transaction-id" element={<Transaction />} />
        <Route path="/divvys/:divvy-id/new-transaction" element={<Transaction />} />
      </Routes>
    </>
  )
}

export default App