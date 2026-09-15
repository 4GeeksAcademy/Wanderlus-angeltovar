"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useExperiencesFilter } from "@/hooks/useExperiencesFilter";
import { SearchBar } from "@/components/SearchBar";
import { FilterGroup } from "@/components/FilterGroup";
import { ExperienceCard } from "../components";

function ExperiencesContent() {
  const {
    category,
    destination,
    searchInput,
    setSearchInput,
    categories,
    destinations,
    filtered,
    hasActiveFilters,
    updateFilters,
    clearFilters,
  } = useExperiencesFilter();

  return (
    <main className="page-shell">
      <div className="page-heading">
        <p className="eyebrow">LA COLECCIÓN</p>
        <h1>
          Encuentra tu próxima<br />
          <em>inolvidable</em> experiencia.
        </h1>
        <p className="intro">Momentos seleccionados, hechos para los curiosos.</p>
      </div>

      <div className="filters">
        <SearchBar
          value={searchInput}
          onChange={setSearchInput}
          onSubmit={() => updateFilters({ search: searchInput })}
          placeholder="Buscar experiencias..."
          label="Buscar experiencias"
        />
        <FilterGroup
          categories={categories}
          destinations={destinations}
          selectedCategory={category}
          selectedDestination={destination}
          onCategoryChange={(value) => updateFilters({ category: value })}
          onDestinationChange={(value) => updateFilters({ destination: value })}
          categoryLabel="Todas las categorías"
          destinationLabel="Todos los destinos"
        />
      </div>

      <div className="results-row">
        <span>{filtered.length} experiencias encontradas</span>
        {hasActiveFilters ? (
          <Link href="/experiencias" onClick={(e) => { e.preventDefault(); clearFilters(); }}>
            Limpiar filtros
          </Link>
        ) : null}
      </div>

      {filtered.length ? (
        <div className="experience-grid">
          {filtered.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span>⌕</span>
          <h2>No se encontraron resultados</h2>
          <p>Intenta ajustar tu búsqueda o filtros.</p>
        </div>
      )}
    </main>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<main className="page-shell"><p>Cargando experiencias...</p></main>}>
      <ExperiencesContent />
    </Suspense>
  );
}
