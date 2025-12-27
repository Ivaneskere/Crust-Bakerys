import { useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../../store/cartSlice'
import { showToast } from '../../../components/showToast'
import pizzas from '../../../../DB/Pizza.json'
import sushi from '../../../../DB/SushiSet.json'
import tortu from '../../../../DB/tortu.json'
import hachapuri from '../../../../DB/Hachapuri.json'
import baking from '../../../../DB/Baking.json'
import { Page } from '../../../components/Page'

function ProductCard({p, onOpen}){
    return (
        <div className="group rounded-2xl bg-white ring-1 ring-black/5 overflow-hidden shadow-sm transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                decoding="async"
                style={{ willChange: 'transform' }}
                className="h-40 w-full object-cover transition-transform duration-200 group-hover:scale-105"
                onError={(e)=>{ e.currentTarget.onerror = null; e.currentTarget.src = '/IMG/Logo/logoImg.png' }}
            />
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
    const all = useMemo(()=>[...pizzas, ...sushi, ...tortu, ...hachapuri, ...baking].map(x=>({
        id: String(x.id || ''),
        name: x.name,
        slogan: x.slogan,
        price: Number(x.price) || 0,
        image: x.image,
        description: x.description,
        category: (Number(x.id) >=500? 'Торти' : (Number(x.id)>=300 && Number(x.id)<400? 'Випічка' : (Number(x.id)>=200 && Number(x.id)<300? 'Хачапурі' : (Number(x.id)>=41 && Number(x.id)<100? 'Суші': 'Піца'))))
    })),[])

    const [cat, setCat] = useState('Всі')
    const [selected, setSelected] = useState(null)
    const [sortBy, setSortBy] = useState('none')
    const categories = ['Всі','Піца','Торти','Випічка','Хачапурі','Суші','Нове']
    const dispatch = useDispatch()

    let shown = all.filter(p=> cat==='Всі' ? true : (p.category===cat))
    
    if (sortBy === 'asc') {
        shown = [...shown].sort((a, b) => a.price - b.price)
    } else if (sortBy === 'desc') {
        shown = [...shown].sort((a, b) => b.price - a.price)
    }

    return (
        <Page>
        <main className="bg-[#f7f1e6] text-zinc-900">
            
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    
                    <div
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: "url('/IMG/DifAll(img)/background-bakery.png')" }}
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[#f7f1e6]" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
                    <div className="max-w-2xl">
                        <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 ring-1 ring-white/15 backdrop-blur">
                            Меню
                        </p>

                        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Наше улюблене меню
                        </h1>

                        <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                            Виберіть щось смачненьке з наших найпопулярніших страв
                        </p>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-6xl px-4 pb-20">
                <div className="-mt-10 rounded-3xl bg-[#f3eadb] p-6 shadow-sm ring-1 ring-black/5 sm:p-10">
                    
                        <h3 className="text-sm font-semibold text-zinc-700 mb-3">Категорії</h3>
                    <div className="mt-6 flex flex-wrap gap-3 mb-8">
                        {categories.map(c=> (
                            <button key={c} onClick={()=>setCat(c)} className={`rounded-xl px-4 py-2 text-sm font-medium transition-all transform hover:-translate-y-0.5 ${cat===c? 'bg-[#7b4a2a] text-white shadow-md' : 'bg-white ring-1 ring-black/5 hover:ring-black/10'}`}>
                                {c}
                            </button>
                        ))}
                    </div>

                    
                    <div className="mb-6 flex items-center gap-3">
                        <span className="text-sm font-medium text-zinc-700">Сортування:</span>
                        <button
                            onClick={() => setSortBy('none')}
                            className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                                sortBy === 'none'
                                    ? 'bg-[#7b4a2a] text-white shadow-md'
                                    : 'bg-white ring-1 ring-black/5 hover:ring-black/10'
                            }`}
                        >
                            За замовчуванням
                        </button>
                        <button
                            onClick={() => setSortBy('asc')}
                            className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                                sortBy === 'asc'
                                    ? 'bg-[#7b4a2a] text-white shadow-md'
                                    : 'bg-white ring-1 ring-black/5 hover:ring-black/10'
                            }`}
                        >
                            Ціна ↑
                        </button>
                        <button
                            onClick={() => setSortBy('desc')}
                            className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                                sortBy === 'desc'
                                    ? 'bg-[#7b4a2a] text-white shadow-md'
                                    : 'bg-white ring-1 ring-black/5 hover:ring-black/10'
                            }`}
                        >
                            Ціна ↓
                        </button>
                    </div>

                    
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {shown.map(p=> (
                            <div key={p.id}>
                                <ProductCard p={p} onOpen={setSelected} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/50" onClick={()=>setSelected(null)} />
                    <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-6">
                        <div className="flex gap-4">
                            <img src={selected.image} alt={selected.name} loading="lazy" decoding="async" onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src='/IMG/Logo/logoImg.png' }} className="h-40 w-40 object-cover rounded-lg" />
                            <div>
                                <h2 className="text-xl font-semibold">{selected.name}</h2>
                                <p className="mt-2 text-sm text-zinc-600">{selected.description}</p>
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="text-lg font-bold">{selected.price ? selected.price + ' грн' : ''}</div>
                                    <button onClick={()=>{ 
                                        dispatch(addItem(selected))
                                        window.dispatchEvent(new Event('cartUpdated'))
                                        showToast(`Додано • ${selected.name} • до кошику`, {
                                            actions: [
                                                { label: 'Перейти до кошику', onClick: () => { window.location.href = '/cart' } },
                                                { label: 'Продовжити покупки', onClick: () => {} }
                                            ],
                                            timeout: 6000
                                        })
                                        setSelected(null)
                                    }} className="ml-auto rounded-xl bg-[#7b4a2a] px-4 py-2 text-white hover:bg-[#6a3a1a]">Купити</button>
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
        </Page>
    )
}
