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
        <p className="eyebrow">THE COLLECTION</p>
        <h1>
          Find your next<br />
          <em>unforgettable</em> experience.
        </h1>
        <p className="intro">Curated moments, made for the curious.</p>
      </div>

      <div className="filters">
        <SearchBar
          value={searchInput}
          onChange={setSearchInput}
          onSubmit={() => updateFilters({ search: searchInput })}
          placeholder="Search experiences..."
          label="Search experiences"
        />
        <FilterGroup
          categories={categories}
          destinations={destinations}
          selectedCategory={category}
          selectedDestination={destination}
          onCategoryChange={(value) => updateFilters({ category: value })}
          onDestinationChange={(value) => updateFilters({ destination: value })}
          categoryLabel="All categories"
          destinationLabel="All destinations"
        />
      </div>

      <div className="results-row">
        <span>{filtered.length} experiences found</span>
        {hasActiveFilters ? (
          <Link href="/experiences" onClick={(e) => { e.preventDefault(); clearFilters(); }}>
            Clear filters
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
          <h2>No results found</h2>
          <p>Try adjusting your search or filters.</p>
        </div>
      )}
    </main>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<main className="page-shell"><p>Loading experiences...</p></main>}>
      <ExperiencesContent />
    </Suspense>
  );
}
