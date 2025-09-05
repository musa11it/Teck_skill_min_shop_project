import { useMemo, useState } from 'react';
import Hero from '../components/Hero';
import CategoryStrip from '../components/CategoryStrip';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const tabs = [
  { key: 'featured', label: 'Featured' },
  { key: 'popular', label: 'Popular' },
  { key: 'new', label: 'New Arrivals' },
] as const;

export default function Home() {
  const [active, setActive] =
    useState<(typeof tabs)[number]['key']>('featured');
  const filtered = useMemo(
    () => products.filter((p) => p.tag === active),
    [active]
  );

  return (
    <>
      <Hero />
      <CategoryStrip />

      <section className="container-max mt-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold">Top Products</h2>
          <div className="flex gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`btn ${active === t.key ? 'bg-brand text-white' : 'btn-outline'}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Card grid rendered dynamically with map() */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
