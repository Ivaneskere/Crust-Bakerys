import './App.css'
import { Route,  Routes } from "react-router-dom";
import Home from './Main/pages/MainPage/Home.jsx'
import Products from './Main/pages/ProductsPage/Products.jsx'
import AboutUs from './Main/pages/AboutUsPage/AboutUs.jsx'
import Header from './Main/Header/Header.jsx'


 

function App() {
   

  return (
    <div>
    
      <Header />
    

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

       
        

        
      </Routes>
   
    </div >
  )

}

export default App
