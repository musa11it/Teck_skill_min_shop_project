import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-card"
      aria-label="site search"
    >
      <input
        className="w-full px-4 py-2 outline-none"
        placeholder="Search products..."
        aria-label="Search products"
      />
      <button className="px-4" aria-label="search">
        <FiSearch className="text-xl" />
      </button>
    </form>
  );
}
