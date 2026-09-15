"use client";

export function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = "Buscar experiencias...",
  label = "Buscar experiencias",
}: {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  label?: string;
}) {
  return (
    <form
      className="search-bar"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <input
        name="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={label}
      />
      <button className="button search-button" type="submit">
        Buscar
      </button>
    </form>
  );
}