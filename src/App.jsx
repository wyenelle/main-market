import {Routes,Route} from 'react-router-dom' 
import './App.css'

import Navigation from './component/navigation/navigation'
import Shop from './routes/shop/shop'
import SignIn from './routes/signin/signin'
import SignUp from './routes/signup/signup'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index  element={<Shop />} />
        <Route path='signin'  element={<SignIn />} />
        <Route path='signup'  element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default App
