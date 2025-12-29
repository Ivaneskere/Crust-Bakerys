import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, updateQuantity, clearCart, setCart } from '../../../store/cartSlice'
import { showToast } from '../../../components/showToast'

export default function Cart() {
    const dispatch = useDispatch()
    const cartItems = useSelector(s => s.cart.items || [])
    const [formData, setFormData] = useState({
        customerName: '',
        phone: '',
        address: '',
        email: '',
        notes: ''
    })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        try {
            const raw = localStorage.getItem('cart')
            if (raw) dispatch(setCart(JSON.parse(raw)))
        } catch {
            void 0
        }
    }, [dispatch])

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item.id))
        window.dispatchEvent(new Event('cartUpdated'))
        try {
            const name = item?.name || 'товар'
            showToast(`Видалено • ${name} • з кошику`, { actions: [{ label: 'OK', onClick: () => {} }], timeout: 3000 })
        } catch {
            void 0
        }
    }

    const handleQuantityChange = (id, qty) => {
        if (qty <= 0) {
            const item = cartItems.find(i => i.id === id)
            if (item) handleRemoveItem(item)
            return
        }
        dispatch(updateQuantity({ id, quantity: Math.max(1, Number(qty)) }))
        window.dispatchEvent(new Event('cartUpdated'))
    }

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const totalPrice = cartItems.reduce((sum, item) => {
        const price = Number(item.price) || 0
        const qty = Number(item.quantity) || 0
        return sum + (price * qty)
    }, 0)
    
    const totalQuantity = cartItems.reduce((sum, item) => {
        const qty = Number(item.quantity) || 0
        return sum + qty
    }, 0)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        if (!formData.customerName || !formData.phone || !formData.address) {
            setError(`Будь ласка, заповніть усі обов'язкові поля`)
            setLoading(false)
            return
        }

        if (cartItems.length === 0) {
            setError('Кошик порожній')
            setLoading(false)
            return
        }

        try {
            const orderData = {
                customerName: formData.customerName,
                phone: formData.phone,
                address: formData.address,
                email: formData.email,
                items: cartItems.map(item => ({
                    id: item.id,
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price,
                    subtotal: item.price * item.quantity
                })),
                totalPrice,
                totalQuantity,
                notes: formData.notes
            }

            const response = await fetch('http://localhost:3000/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderData)
            })

            if (!response.ok) {
                throw new Error('Помилка при створенні замовлення')
            }

            const result = await response.json()
            
            console.log('Замовлення створено:', result.orderId)
            setSuccess(true)
            dispatch(clearCart())
            setFormData({
                customerName: '',
                phone: '',
                address: '',
                email: '',
                notes: ''
            })

            setTimeout(() => setSuccess(false), 5000)
        } catch (err) {
            setError(err.message || 'Помилка при відправці замовлення')
        } finally {
            setLoading(false)
        }
    }

    const handleClearCart = () => {
        if (window.confirm('Очистити кошик?')) {
            dispatch(clearCart())
            window.dispatchEvent(new Event('cartUpdated'))
        }
    }

    return (
        <main className="bg-[#f7f1e6] min-h-screen py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-zinc-900">Мій кошик</h1>
                    <p className="mt-2 text-zinc-600">Перегляньте своє замовлення і завершіть покупку</p>
                </div>

                {success && (
                    <div className="mb-6 rounded-lg bg-green-50 p-4 ring-1 ring-green-200">
                        <p className="text-green-800 font-semibold">✓ Замовлення успішно відправлено!</p>
                        <p className="text-sm text-green-700 mt-1">Ми зв'яжемося з вами найближчим часом.</p>
                    </div>
                )}

                {error && (
                    <div className="mb-6 rounded-lg bg-red-50 p-4 ring-1 ring-red-200">
                        <p className="text-red-800 font-semibold">✗ Помилка</p>
                        <p className="text-sm text-red-700 mt-1">{error}</p>
                    </div>
                )}

                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
                            {cartItems.length === 0 ? (
                                <div className="py-12 text-center">
                                    <p className="text-xl text-zinc-600 mb-4">Ваш кошик порожній</p>
                                    <a href="/products" className="inline-flex rounded-lg bg-[#7b4a2a] px-6 py-2 text-white hover:bg-[#6a3a1a]">
                                        ← Повернутися до меню
                                    </a>
                                </div>
                            ) : (
                                <div>
                                    <div className="space-y-4">
                                        {cartItems.map(item => (
                                            <div key={item.id} className="flex gap-4 p-4 bg-[#f9f7f4] rounded-lg border border-black/5">
                                                
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-24 w-24 object-cover rounded-lg"
                                                    onError={(e) => { e.currentTarget.src = '/IMG/Logo/logoImg.png' }}
                                                />
                                                
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-zinc-900">{item.name}</h3>
                                                    <p className="text-sm text-zinc-600 mt-1">{Number(item.price) || 0} грн × {Number(item.quantity) || 0} = <strong>{(Number(item.price) || 0) * (Number(item.quantity) || 0)} грн</strong></p>
                                                </div>

                                                
                                                <div className="flex flex-col items-end justify-between">
                                                    <div className="flex gap-1 bg-white rounded-lg ring-1 ring-black/10">
                                                        <button
                                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                            className="px-2 py-1 text-sm hover:bg-[#f5f5f5]"
                                                        >
                                                            −
                                                        </button>
                                                        <span className="px-3 py-1 text-sm font-semibold">{item.quantity}</span>
                                                        <button
                                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                            className="px-2 py-1 text-sm hover:bg-[#f5f5f5]"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <button
                                                        onClick={() => handleRemoveItem(item)}
                                                        className="text-sm text-red-600 hover:text-red-800 mt-2"
                                                    >
                                                        Видалити
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 border-t pt-4">
                                        <div className="flex justify-between text-lg font-bold text-zinc-900">
                                            <span>Всього ({Math.round(totalQuantity) || 0} шт.):</span>
                                            <span>{Math.round(totalPrice) || 0} грн</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleClearCart}
                                        className="mt-4 w-full px-4 py-2 text-sm text-zinc-600 bg-zinc-100 rounded-lg hover:bg-zinc-200"
                                    >
                                        Очистити кошик
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm sticky top-6">
                            <h2 className="text-xl font-bold text-zinc-900 mb-4">Форма замовлення</h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                                        Ім'я <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="customerName"
                                        value={formData.customerName}
                                        onChange={handleFormChange}
                                        placeholder="Ваше ім'я"
                                        className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7b4a2a]"
                                        required
                                    />
                                </div>

                                
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                                        Номер телефону <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleFormChange}
                                        placeholder="+380 (XX) XXX-XX-XX"
                                        className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7b4a2a]"
                                        required
                                    />
                                </div>

                                
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                                        Адреса доставки <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="address"
                                        value={formData.address}
                                        onChange={handleFormChange}
                                        placeholder="Вулиця, номер будинку, квартира"
                                        rows="3"
                                        className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7b4a2a]"
                                        required
                                    />
                                </div>

                                
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                                        Електронна пошта
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleFormChange}
                                        placeholder="example@gmail.com"
                                        className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7b4a2a]"
                                    />
                                </div>

                                
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                                        Примітки до замовлення
                                    </label>
                                    <textarea
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleFormChange}
                                        placeholder="Напр. без цибулі, додати гарнір..."
                                        rows="2"
                                        className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7b4a2a]"
                                    />
                                </div>

                                
                                <button
                                    type="submit"
                                    disabled={loading || cartItems.length === 0}
                                    className="w-full px-4 py-3 mt-6 bg-[#7b4a2a] text-white font-semibold rounded-lg hover:bg-[#6a3a1a] disabled:bg-zinc-300 disabled:cursor-not-allowed transition-colors"
                                >
                                    {loading ? 'Відправляю...' : `Замовити (${Math.round(totalPrice) || 0} грн)`}
                                </button>

                                <p className="text-xs text-zinc-500 text-center mt-2">
                                    Поля з * є обов'язковими
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
