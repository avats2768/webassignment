import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import SearchOrder from "./components/SearchOrder/SearchOrder.jsx";
import OrderList from "./components/OrderList/OrderList.jsx";
import { ORDERS } from "./data/orders.js";

export default function App() {
  const [orders, setOrders] = useState(ORDERS);

  const handleSearch = ({ field, query }) => {
    const q = query.toLowerCase();

    setOrders(
      ORDERS.filter((order) => {
        const value = { orderId: order.id, mobile: order.buyer.phone, name: order.buyer.name, email: order.buyer.email }[field];
        return value.toLowerCase().includes(q);
      })
    );
  };

  return (
    <>
      <Navbar activeHref="#orders" onLogout={() => console.log("Logout")} />

      <main className="min-h-screen bg-[#0b7e6e] px-2 py-6">
        <h1 className="mb-6 text-center text-xl font-bold uppercase text-black">Search Order</h1>
        <SearchOrder onSearch={handleSearch} />
        <OrderList
          orders={orders}
          onTrack={(order) => console.log("Track order", order.id)}
          onInvoice={(order) => console.log("Generate invoice for", order.id)}
        />
      </main>
    </>
  );
}