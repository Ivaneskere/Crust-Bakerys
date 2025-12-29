import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './Main/pages/MainPage/Home.jsx'
import Products from './Main/pages/ProductsPage/Products.jsx'
import AboutUs from './Main/pages/AboutUsPage/AboutUs.jsx'
import Cart from './Main/pages/CartPage/Cart.jsx'
import Header from './Main/Header/Header.jsx'
import Footer from './components/Footer.jsx'




function App() {


  return (
    <div>

      <Header />




      <main className="flex-1 pb-24">
        <Routes>
          <Route
            path='/'
            element={<Home />}

          />
          <Route
            path='/Home'
            element={<Home />}
          />
          <Route
            path='/AboutUs'
            element={<AboutUs />}
          />
          <Route
            path='/Products'
            element={<Products />}
          />
          <Route
            path='/Cart'
            element={<Cart />}
          />





        </Routes>
      </main>

      < Footer />

    </div >
  )

}

export default App
