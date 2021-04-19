import { useState } from "react";
import SearchInput from "./SearchInput";

const frutas = [
  "laranja",
  "manga",
  "maça",
  "melancia",
  "banana",
  "abacaxi",
  "abacate",
];

function App() {
  const [search, setSearch] = useState("");

  const lowerSearch = search.toLowerCase();
  const frutasFiltradas = frutas.filter((fruta) =>
    fruta.toLocaleLowerCase().includes(lowerSearch)
  );

  console.log("[RENDER] search", search);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3 style={{ marginBottom: "10px" }}>useDebounce Search</h3>

      <SearchInput value={search} onChange={setSearch} />

      <ul style={{ marginTop: "10px" }}>
        {frutasFiltradas.map((fruta) => (
          <li key={fruta}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
