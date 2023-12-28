import {Routes,Route} from 'react-router-dom' 
import './App.css'

import Navigation from './component/navigation/navigation'
import Shop from './routes/shop/shop'
import SignIn from './routes/signin/signin'
import SignUp from './routes/signup/signup'
import Cart from './routes/cart/cart'
import WishList from './routes/wishlist/wishlist'
import Message from './routes/message/message'
import Profile from './routes/profile/profile'

// import {Shop,SignIn,SignUp,Cart,WishList,Message,Profile} from './routes'
function App() {

  return (
    <div className='h-full'>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index  element={<Shop />} />
        <Route path='signin'  element={<SignIn />} />
        <Route path='signup'  element={<SignUp />} />
        <Route path='cart'  element={<Cart />} />
        <Route path='wishlist'  element={<WishList  />} />
        <Route path='message'  element={<Message />} />
        <Route path='profile'  element={<Profile />} />
      </Route>
    </Routes>
    </div>
  )
}

export default App
