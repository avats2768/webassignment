const NAV_LINKS = [
  "PRODUCT",
  "BRAND",
  "CATEGORY",
  "BRAND CATEGORY",
  "ORDER'S PANEL",
  "BAR CHART",
  "BUYING GUIDE",
  "EXCEL",
  "SEO TEXT",
];

export default function Navbar({ onLogout }) {
  return (
    <header className="flex flex-wrap items-center gap-x-5 gap-y-2 bg-black px-3 py-3 text-white">
      <span className="text-xl font-bold">VPLAK</span>

      <nav className="flex flex-1 flex-wrap gap-x-5 gap-y-1 text-sm">
        {NAV_LINKS.map((label) => (
          <a key={label} href="#" className="hover:underline">
            {label}
          </a>
        ))}
      </nav>

      <button onClick={onLogout} className="cursor-pointer text-lg font-bold hover:underline">
        LOGOUT
      </button>
    </header>
  );
}