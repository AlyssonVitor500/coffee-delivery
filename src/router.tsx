import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { OrderFinished } from './pages/OrderFinished'
import { ShoppingCart } from './pages/ShoppingCart'

export function CoffeDeliveryRouter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/order-finished" element={<OrderFinished />} />
      </Route>
    </Routes>
  )
}
