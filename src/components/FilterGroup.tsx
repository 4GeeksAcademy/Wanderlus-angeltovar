"use client";

export function FilterGroup({
  categories,
  destinations,
  selectedCategory,
  selectedDestination,
  onCategoryChange,
  onDestinationChange,
  categoryLabel = "Todas las categorías",
  destinationLabel = "Todos los destinos",
}: {
  categories: string[];
  destinations: string[];
  selectedCategory: string;
  selectedDestination: string;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
  categoryLabel?: string;
  destinationLabel?: string;
}) {
  return (
    <div className="filter-group">
      <select
        value={selectedCategory}
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        <option value="">{categoryLabel}</option>
        {categories.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <select
        value={selectedDestination}
        onChange={(event) => onDestinationChange(event.target.value)}
      >
        <option value="">{destinationLabel}</option>
        {destinations.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}