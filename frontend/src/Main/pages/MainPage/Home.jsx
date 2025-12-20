import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../store/productsSlice";


function Home() {

   const dispatch = useDispatch();

   const { items, categories, selectedCategory } = useSelector((state) => state.products)

   const filteredItems = selectedCategory === "All" ? items : items.filter((item) => item.category === selectedCategory)

   return (

      <div>

         <section className="relative w-screen h-screen overflow-hidden">

            {/* КАРТИНКА */}
            <img
               src="/IMG/BGMain/img2.jpg"
               alt="bg"
               className="absolute inset-0 w-full h-full object-cover"
            />

            {/* ЗАТЕМНЕНИЕ */}
            <div className="absolute inset-0 bg-black/40"></div>

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
                        <button className="px-6 py-3 bg-orange-600 hover:bg-orange-500 transition text-white rounded">
                           Shop Now
                        </button>
                        <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded">
                           Learn More
                        </button>
                     </div>
                  </div>
               </div>
            </div>


         </section >

         <section className="h-screen">
            <h1 className="text-center text-5xl font-bold my-20">PRODUCTS</h1>

            <div className="flex justify-center gap-4 mb-10">
               <button
                  onClick={() => dispatch(setCategory("All"))}
                  className={`px-4 py-2 border ${selectedCategory === "All" ? "bg-black text-white" : ""
                     }`}
               >
                  All
               </button>

               {categories.map((cat) => (
                  <button
                     key={cat}
                     onClick={() => dispatch(setCategory(cat))}
                     className={`px-4 py-2 border ${selectedCategory === cat ? "bg-black text-white" : ""
                        }`}
                  >
                     {cat}
                  </button>
               ))}
            </div>



            <div className="grid grid-cols-3 gap-6 px-20">
               {filteredItems.map((item) => (
                  <div
                     key={item.id}
                     className="border p-4 rounded shadow text-center"
                  >
                     <img src= {item.img} alt="" />
                     <h3 className="font-bold text-xl">{item.title}</h3>
                     <p className="text-gray-500">{item.category}</p>
                  </div>
               ))}
            </div>
         </section>
      </div>




   )
} export default Home;