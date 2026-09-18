export default async function Page() {
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

  const res = await fetch(`${backend}/api/shopmad/products`, {
    cache: "no-store",
  });

  const { products } = await res.json();

  return (
    <main style={{ padding: 20 }}>
      <h1>ShopMAD Products</h1>

      {products.length === 0 && <p>No products found.</p>}

      <ul>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: 20 }}>
            <strong>{p.name}</strong> — ${p.price}
            <br />
            {p.description}
          </li>
        ))}
      </ul>
    </main>
  );
}
