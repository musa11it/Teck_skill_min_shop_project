export default function Footer() {
  return (
    <footer className="mt-16 bg-white">
      <div className="container-max grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h4 className="mb-3 text-lg font-bold">About</h4>
          <p className="text-sm text-gray-600">
            A fast, clean, modern electronics store experience built with React
            + Tailwind.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-lg font-bold">Customer Care</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Help Center</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Track Order</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-lg font-bold">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-lg font-bold">Newsletter</h4>
          <form className="flex gap-2">
            <input
              className="w-full rounded-lg border px-3 py-2"
              placeholder="Your email"
            />
            <button className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kapee UI. shop
      </div>
    </footer>
  );
}
