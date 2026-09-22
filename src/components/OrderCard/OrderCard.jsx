import ProductItem from "../ProductItem/ProductItem.jsx";

function Line({ label, children }) {
  return (
    <p className="text-gray-700">
      <b className="text-black">{label}:</b>
      {children}
    </p>
  );
}

export default function OrderCard({ order, onTrack, onInvoice }) {
  const { buyer } = order;

  return (
    <section className="rounded-lg bg-white p-4 pb-5 text-sm text-black">
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
        <div className="text-center">
          <p className="font-bold">Order Date</p>
          <p className="text-gray-700">{order.date}</p>
        </div>

        <div className="text-center">
          <p className="font-bold text-blue-700 underline">{order.id}</p>
          <p className="mt-1 rounded-sm bg-[#f48b28] px-6 py-0.5 shadow-sm">{order.paymentMethod}</p>
        </div>

        <div>
          <p className="font-bold">Buyer Details:</p>
          <Line label="Name">{buyer.name}</Line>
          <Line label="State">{buyer.state}</Line>
          <Line label="Email">{buyer.email}</Line>
          <Line label="Phone">{buyer.phone}</Line>
        </div>

        <p className="font-bold">Total:{order.total}</p>

        <button
          onClick={() => onTrack(order)}
          className="cursor-pointer rounded-sm bg-[#747572] px-2 py-1 text-xs font-bold uppercase text-white hover:bg-gray-800"
        >
          Track
        </button>

        <button
          onClick={() => onInvoice(order)}
          className="cursor-pointer font-bold text-blue-700 underline"
        >
          Generate Invoice
        </button>
      </div>

      <div className="mt-5 space-y-4 sm:pl-3">
        {order.items.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}