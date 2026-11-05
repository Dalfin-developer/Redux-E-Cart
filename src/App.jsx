import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Cart from './pages/Cart'
import PageNotFound from './pages/PageNotFound'
import Products from './pages/Products'
import View from './pages/View'
import WhishList from './pages/WhishList'



function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path="/products/:id" element={<View/>}/>
      <Route path='/wishlist' element={<WhishList/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
