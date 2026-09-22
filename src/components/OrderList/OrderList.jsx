import OrderCard from "../OrderCard/OrderCard.jsx";

export default function OrderList({ orders, onTrack, onInvoice }) {
  if (orders.length === 0) {
    return (
      <div role="status" className="mx-auto w-[92%] max-w-5xl rounded-lg bg-white p-6 text-center text-sm text-gray-600">
        No orders match your search. Check the order ID, mobile, name or email and try again.
      </div>
    );
  }

  return (
    <div className="mx-auto w-[92%] max-w-5xl space-y-3">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} onTrack={onTrack} onInvoice={onInvoice} />
      ))}
    </div>
  );
}
