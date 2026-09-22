export default function ProductItem({ item }) {
  const fields = [
    ["Model", item.model],
    ["Qty", item.qty],
    ["Price", item.price],
    ["Delivery Charges", item.deliveryCharges],
    ["Date", item.date],
    ["Status", item.status],
    ["Discount", item.discount],
  ];

  return (
    <article className="flex w-full max-w-xl gap-5 rounded-sm bg-white p-3 text-sm text-gray-700 shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
      <img
        src={item.image}
        alt={item.title}
        className="h-24 w-16 shrink-0 self-center object-contain"
      />

      <div className="flex-1">
        <p className="font-bold text-blue-700 underline">{item.title}</p>

        <div className="mt-1 grid grid-cols-2 gap-x-6">
          {fields.map(([label, value]) => (
            <p key={label}>
              <b className="text-black">{label}:</b>
              {value}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}