export default function Account() {
  return (
    <section className="container-max my-10">
      <h1 className="text-2xl font-bold">My Account</h1>
      <p className="text-gray-600">Sign in to view your orders and wishlist.</p>
      <form className="card mt-6 max-w-md space-y-3 p-6">
        <input
          className="w-full rounded-lg border px-3 py-2"
          placeholder="Email"
        />
        <input
          className="w-full rounded-lg border px-3 py-2"
          placeholder="Password"
          type="password"
        />
        <button className="btn-primary w-full">Sign In</button>
      </form>
    </section>
  );
}
