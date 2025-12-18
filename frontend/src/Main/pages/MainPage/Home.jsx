import { useSelector } from "react-redux";


function Home() {
  
      const products = useSelector((state) => state.products.items)
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

         {products.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
           


         </section>
      </div>




   )
} export default Home;