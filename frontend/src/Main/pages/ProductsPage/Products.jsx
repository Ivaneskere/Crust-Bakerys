import { useState, useMemo } from 'react'
import pizzas from '../../../../DB/Pizza.json'
import sushi from '../../../../DB/SushiSet.json'
import tortu from '../../../../DB/tortu.json'
import hachapuri from '../../../../DB/Hachapuri.json'

function ProductCard({p, onOpen}){
    return (
        <div className="group rounded-2xl bg-white ring-1 ring-black/5 overflow-hidden shadow-sm transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <img src={p.image} alt={p.name} className="h-40 w-full object-cover transition-transform duration-200 group-hover:scale-105" />
            <div className="p-4">
                <h3 className="text-sm font-semibold">{p.name}</h3>
                <p className="mt-1 text-xs text-zinc-500">{p.slogan || ''}</p>
                <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm font-medium">{p.price ? p.price + ' грн' : ''}</div>
                    <div className="flex gap-2">
                        <button onClick={()=>onOpen(p)} className="rounded-md bg-[#7b4a2a] px-3 py-1 text-xs text-white">Деталі</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Products(){
    const all = useMemo(()=>[...pizzas, ...sushi, ...tortu, ...hachapuri].map(x=>({
        id: x.id || x.id,
        name: x.name,
        slogan: x.slogan,
        price: x.price,
        image: x.image,
        description: x.description,
        category: (Number(x.id) >=500? 'Cakes' : (Number(x.id)>=200 && Number(x.id)<300? 'Baking' : (Number(x.id)>=41 && Number(x.id)<100? 'Sushi': 'Pizza')))
    })),[])

    const [cat, setCat] = useState('All')
    const [selected, setSelected] = useState(null)
    const categories = ['All','Pizza','Cakes','Baking','Sushi','New']

    const shown = all.filter(p=> cat==='All' ? true : (p.category===cat))

    return (
        <main className="mx-auto max-w-6xl px-4 py-10">
            <h1 className="text-3xl font-semibold text-zinc-900">Наше меню</h1>

            <div className="mt-6 flex flex-wrap gap-3">
                {categories.map(c=> (
                    <button key={c} onClick={()=>setCat(c)} className={`rounded-xl px-4 py-2 text-sm ${cat===c? 'bg-[#7b4a2a] text-white' : 'bg-white ring-1 ring-black/5'}`}>
                        {c}
                    </button>
                ))}
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {shown.map(p=> (
                    <div key={p.id}>
                        <ProductCard p={p} onOpen={setSelected} />
                    </div>
                ))}
            </div>

            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/50" onClick={()=>setSelected(null)} />
                    <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-6">
                        <div className="flex gap-4">
                            <img src={selected.image} alt={selected.name} className="h-40 w-40 object-cover rounded-lg" />
                            <div>
                                <h2 className="text-xl font-semibold">{selected.name}</h2>
                                <p className="mt-2 text-sm text-zinc-600">{selected.description}</p>
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="text-lg font-bold">{selected.price ? selected.price + ' грн' : ''}</div>
                                    <button onClick={()=>{ // simple cart in localStorage
                                        const cart = JSON.parse(localStorage.getItem('cart')||'[]') || [];
                                        cart.push(selected);
                                        localStorage.setItem('cart', JSON.stringify(cart));
                                        alert('Додано в кошик');
                                    }} className="ml-auto rounded-xl bg-[#7b4a2a] px-4 py-2 text-white">Купити</button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button onClick={()=>setSelected(null)} className="rounded-md px-3 py-2 bg-white ring-1 ring-black/5">Закрити</button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}