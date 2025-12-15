import './App.css'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './Main/pages/Home.jsx'
import Products from './Main/pages/Products.jsx'
import AboutUs from './Main/pages/AboutUs.jsx'
import Hero from './Main/Hero.jsx'
import MainProducts from './Main/MainProducts.jsx'
import Header from './Main/Header/Header.jsx';
// import Baking from './Main/pagesProducts/Baking.jsx'
// import Cakes from './Main/pagesProducts/Cakes.jsx'
// import Coffee from './Main/pagesProducts/Coffee.jsx'
// import Khachapuri from './Main/pagesProducts/Khachapuri.jsx'
// import Pizza from './Main/pagesProducts/Pizza.jsx'
// import PrivateOrders from './Main/pagesProducts/PrivateOrders.jsx'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path='/'
            element={
              <>
                <Hero />
                <MainProducts />
              </>
            }
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
        </Routes>
      </BrowserRouter>

    </div>
  )

}

export default App
