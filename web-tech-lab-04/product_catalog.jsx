import { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 2499, quantity: 12 },
  { id: 2, name: "Bluetooth Speaker", category: "Electronics", price: 1799, quantity: 0 },
  { id: 3, name: "Smart Watch", category: "Electronics", price: 3999, quantity: 5 },
  { id: 4, name: "Cotton T-Shirt", category: "Clothing", price: 599, quantity: 30 },
  { id: 5, name: "Denim Jacket", category: "Clothing", price: 1999, quantity: 0 },
  { id: 6, name: "Running Shoes", category: "Clothing", price: 2799, quantity: 8 },
  { id: 7, name: "Basmati Rice 5kg", category: "Grocery", price: 549, quantity: 40 },
  { id: 8, name: "Olive Oil 1L", category: "Grocery", price: 899, quantity: 15 },
  { id: 9, name: "Almonds 500g", category: "Grocery", price: 649, quantity: 0 },
  { id: 10, name: "Laptop Stand", category: "Electronics", price: 1299, quantity: 20 },
  { id: 11, name: "Mechanical Keyboard", category: "Electronics", price: 3499, quantity: 7 },
  { id: 12, name: "Wool Sweater", category: "Clothing", price: 2199, quantity: 14 },
  { id: 13, name: "Leather Belt", category: "Clothing", price: 899, quantity: 0 },
  { id: 14, name: "Canvas Sneakers", category: "Clothing", price: 1699, quantity: 22 },
  { id: 15, name: "Green Tea 250g", category: "Grocery", price: 349, quantity: 50 },
  { id: 16, name: "Honey 500g", category: "Grocery", price: 429, quantity: 0 },
];

const CATEGORIES = ["All", "Electronics", "Clothing", "Grocery"];
const PRICE_RANGES = [
  { label: "Any price", min: 0, max: Infinity },
  { label: "Under ₹1000", min: 0, max: 999 },
  { label: "₹1000 – ₹2500", min: 1000, max: 2500 },
  { label: "Above ₹2500", min: 2501, max: Infinity },
];

// Palette: Cream #E5DECA, Ocean Blue #7E9DA2, Avocado #898433, Olive #45441A, Dark Green #282C15.
const CATEGORY_THEME = {
  Electronics: { bg: "#dbe6e8", accent: "#282c15", tag: "#b9cdd1" },
  Clothing: { bg: "#e8e4c3", accent: "#45441a", tag: "#d3cd93" },
  Grocery: { bg: "#dedbc4", accent: "#282c15", tag: "#c3c19a" },
};

export default function ProductCatalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [rangeIndex, setRangeIndex] = useState(0);

  const range = PRICE_RANGES[rangeIndex];

  const filtered = PRODUCTS.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    const matchesPrice = p.price >= range.min && p.price <= range.max;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div style={styles.page}>
      <div style={styles.wrap}>
        <header style={styles.header}>
          <h1 style={styles.title}>Product Catalog</h1>
          <p style={styles.subtitle}>Search, filter, and browse the store</p>
        </header>

        <div style={styles.controls}>
          <input
            style={styles.input}
            type="text"
            placeholder="Search products by name…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            style={styles.select}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            style={styles.select}
            value={rangeIndex}
            onChange={(e) => setRangeIndex(Number(e.target.value))}
          >
            {PRICE_RANGES.map((r, i) => (
              <option key={r.label} value={i}>{r.label}</option>
            ))}
          </select>
        </div>

        <p style={styles.count}>
          Showing <strong>{filtered.length}</strong>{" "}
          {filtered.length === 1 ? "product" : "products"}
        </p>

        {filtered.length === 0 ? (
          <p style={styles.empty}>No products match your filters. Try widening the search.</p>
        ) : (
          <div style={styles.grid}>
            {filtered.map((p) => {
              const theme = CATEGORY_THEME[p.category];
              return (
                <div key={p.id} style={{ ...styles.card, background: theme.bg }}>
                  <div style={styles.cardTop}>
                    <span style={{ ...styles.tag, background: theme.tag, color: theme.accent }}>
                      {p.category}
                    </span>
                    {p.quantity === 0 && <span style={styles.outOfStock}>Out of Stock</span>}
                  </div>
                  <h3 style={styles.name}>{p.name}</h3>
                  <p style={{ ...styles.price, color: theme.accent }}>
                    ₹{p.price.toLocaleString("en-IN")}
                  </p>
                  <p style={styles.qty}>
                    {p.quantity > 0 ? `${p.quantity} in stock` : "Currently unavailable"}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #e5deca 0%, #c7cdc3 50%, #a3b0ab 100%)",
    padding: "40px 48px",
    fontFamily: "'Times New Roman', Times, serif",
  },
  wrap: { maxWidth: "100%", margin: "0 auto" },
  header: { marginBottom: 32 },
  title: { margin: 0, fontSize: 40, fontWeight: 700, letterSpacing: -0.5, color: "#282c15" },
  subtitle: { margin: "8px 0 0", fontSize: 18, color: "#45441a" },
  controls: { display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 20 },
  input: { flex: "1 1 280px", padding: "14px 18px", borderRadius: 999, border: "1px solid #898433", fontSize: 17, fontFamily: "inherit", background: "#e5deca", color: "#282c15" },
  select: { padding: "14px 18px", borderRadius: 999, border: "1px solid #898433", fontSize: 17, fontFamily: "inherit", background: "#e5deca", color: "#282c15" },
  count: { fontSize: 17, color: "#45441a", marginBottom: 24 },
  empty: { color: "#45441a", fontSize: 18, padding: 60, textAlign: "center", background: "#e5deca", borderRadius: 16 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
    gap: 28,
  },
  card: {
    borderRadius: 18,
    padding: 32,
    boxShadow: "0 4px 12px rgba(40, 44, 21, 0.2)",
    border: "1px solid rgba(40, 44, 21, 0.15)",
  },
  cardTop: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  tag: { fontSize: 13, textTransform: "uppercase", letterSpacing: 0.5, padding: "4px 10px", borderRadius: 6, fontWeight: 700 },
  outOfStock: { fontSize: 13, fontWeight: 700, color: "#e5deca", background: "#282c15", padding: "4px 10px", borderRadius: 6 },
  name: { margin: "0 0 10px", fontSize: 24, color: "#282c15" },
  price: { margin: "0 0 8px", fontSize: 28, fontWeight: 700 },
  qty: { margin: 0, fontSize: 16, color: "#45441a" },
};
