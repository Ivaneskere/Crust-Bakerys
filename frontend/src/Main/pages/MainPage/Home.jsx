import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, setCategory } from "../../../store/productsSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'


import { Page } from "../../../components/Page";



function Home() {

   const dispatch = useDispatch();

   const navigate = useNavigate();

   const { items, categories, selectedCategory } = useSelector((state) => state.products)

   useEffect(() => {
      dispatch(fetchProducts())
   }, [dispatch])

   const filteredItems = selectedCategory === "All" ? items.slice(0, 6) : items.filter((item) => item.category === selectedCategory).slice(0, 6)
   return (
      <Page>
         <div>

            <section className="relative w-full min-h-screen overflow-hidden">

               {/* КАРТИНКА */}


               {/* КОНТЕНТ СЛЕВА */}
               <div className="relative z-10 h-full">
                  <div className="max-w-7xl mx-auto px-8 pt-32">
                     <div className="max-w-xl text-white">
                        <p className="text-yellow-400 uppercase tracking-wide mb-3">
                           Delicious Cafe
                        </p>

                        <h1 className="text-5xl font-bold leading-tight mb-6">
                           Sweet Treats,<br />Perfect Eats
                        </h1>

                        <div className="flex gap-4">
                           <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => navigate("/products")}
                              className="px-6 py-3 bg-orange-600 text-white rounded-xl shadow-lg"
                           >
                              Перейти до меню
                           </motion.button>
                           <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              onClick={() => navigate("/products")}
                              className="px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-black"
                           >
                              Learn More
                           </motion.button>
                        </div>
                     </div>
                  </div>
               </div>


            </section >

            <section className="h-screen">

               <h1 className="text-center text-5xl font-bold -mt-32 mb-20">PRODUCTS</h1>


               <div className="flex flex-wrap justify-center gap-3 mb-12">
                  <button
                     onClick={() => dispatch(setCategory("All"))}
                     className={`rounded-xl px-4 py-2 text-sm font-medium transition-all transform hover:-translate-y-0.5
      ${selectedCategory === "All"
                           ? "bg-[#7b4a2a] text-white shadow-md"
                           : "bg-white ring-1 ring-black/5 hover:ring-black/10"}
    `}
                  >
                     All
                  </button>

                  {categories.map((cat) => (
                     <button
                        key={cat}
                        onClick={() => dispatch(setCategory(cat))}
                        className={`rounded-xl px-4 py-2 text-sm font-medium transition-all transform hover:-translate-y-0.5
        ${selectedCategory === cat
                              ? "bg-[#7b4a2a] text-white shadow-md"
                              : "bg-white ring-1 ring-black/5 hover:ring-black/10"}
      `}
                     >
                        {cat}
                     </button>
                  ))}
               </div>



               <div className="grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredItems.map((item) => (
                     <div
                        key={item.id}
                        className="group rounded-2xl bg-white ring-1 ring-black/5 overflow-hidden shadow-sm
                transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                     >
                        <img
                           src={item.image}
                           alt={item.name}
                           loading="lazy"
                           className="h-40 w-full object-cover transition-transform duration-200 group-hover:scale-105"
                           onError={(e) => {
                              e.currentTarget.onerror = null
                              e.currentTarget.src = "/IMG/Logo/logoImg.png"
                           }}
                        />
                        <div className="p-4">
                           <h3 className="text-sm font-semibold">{item.name}</h3>
                           <p className="mt-1 text-xs text-zinc-500">{item.category}</p>

                           <div className="mt-3 flex items-center justify-between">
                              <span className="text-sm font-medium">
                                 {item.price ? `${item.price} грн` : ""}
                              </span>

                              <button
                                 onClick={() =>
                                    navigate("/products", { state: { openProduct: item } })
                                 }
                                 className="rounded-md bg-[#7b4a2a] px-3 py-1 text-xs text-white hover:bg-[#6a3a1a]"
                              >
                                 Деталі
                              </button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </section>
         </div>



         <footer className="bg-[#1c1c1c] text-zinc-300 mt-24">
            <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

               <div>
                  <h4 className="text-white font-semibold mb-3">Crust Bakery</h4>
                  <p className="text-sm text-zinc-400">
                     Fresh bakery & desserts made with love every day.
                  </p>
               </div>

               <div>
                  <h4 className="text-white font-semibold mb-3">Menu</h4>
                  <ul className="space-y-2 text-sm">
                     <li>Pizza</li>
                     <li>Bakery</li>
                     <li>Cakes</li>
                     <li>Sushi</li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-white font-semibold mb-3">Company</h4>
                  <ul className="space-y-2 text-sm">
                     <li>About</li>
                     <li>Contacts</li>
                     <li>Delivery</li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-white font-semibold mb-3">Contacts</h4>
                  <p className="text-sm">Kyiv, Ukraine</p>
                  <p className="text-sm">+380 00 000 00 00</p>
               </div>
            </div>

            <div className="border-t border-white/10 text-center py-4 text-xs text-zinc-500">
               © 2025 Crust Bakery. All rights reserved.
            </div>
         </footer>
      </Page>
   )
} export default Home;