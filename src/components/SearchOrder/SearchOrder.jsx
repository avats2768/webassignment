import { useState } from "react";

const FIELDS = ["orderId", "mobile", "name", "email"];

export default function SearchOrder({ onSearch }) {
  const [field, setField] = useState("orderId");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ field, query: query.trim() });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-6 w-[92%] max-w-5xl rounded-[2.5rem] bg-white p-3 shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
    >
      <fieldset className="flex flex-wrap items-center gap-x-4 gap-y-3 rounded-[2rem] border border-gray-400 px-4 pb-3 pt-1 text-gray-700">
        <legend className="px-1">Search Order</legend>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>By</span>
          {FIELDS.map((f) => (
            <label key={f} className="flex cursor-pointer items-center gap-1 capitalize">
              <input
                type="radio"
                name="field"
                checked={field === f}
                onChange={() => setField(f)}
                className="size-5 cursor-pointer appearance-none rounded-full border-2 border-blue-500 bg-white checked:bg-blue-500 checked:ring-[3px] checked:ring-inset checked:ring-white"
              />
              {f}
            </label>
          ))}
        </div>

        <input
          placeholder="search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="min-w-40 flex-1 rounded-full bg-[#b0aead] px-4 py-2 text-sm text-gray-900 placeholder:text-gray-700"
        />

        <button className="cursor-pointer rounded-full border-2 border-[#0a4d8c] bg-[linear-gradient(to_right,#4dff43,#0f9d09)] px-10 py-2 text-sm font-semibold uppercase text-white shadow-md hover:brightness-110">
          Search Order
        </button>
      </fieldset>
    </form>
  );
}