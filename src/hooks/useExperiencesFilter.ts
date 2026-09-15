"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { experiences, type Experience } from "@/data/experiences";

const ALL_CATEGORIES = ["Adventure", "Culture", "Food", "Wellness", "Nature"];

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function useExperiencesFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";
  const [searchInput, setSearchInput] = useState(query);

  const allDestinations = useMemo(
    () => [...new Set(experiences.map((e) => e.destination))].sort(),
    []
  );

  const filtered: Experience[] = useMemo(() => {
    return experiences.filter((experience) => {
      const matchesSearch =
        !query ||
        new RegExp(escapeRegex(query), "i").test(experience.title);
      return (
        matchesSearch &&
        (!category ||
          experience.category.toLowerCase() === category.toLowerCase()) &&
        (!destination ||
          experience.destination.toLowerCase().includes(destination.toLowerCase()))
      );
    });
  }, [query, category, destination]);

  function updateFilters(next: {
    search?: string;
    category?: string;
    destination?: string;
  }) {
    const params = new URLSearchParams();
    const nextSearch = next.search ?? searchInput;
    const nextCategory = next.category ?? category;
    const nextDestination = next.destination ?? destination;
    if (nextSearch) params.set("search", nextSearch);
    if (nextCategory) params.set("category", nextCategory);
    if (nextDestination) params.set("destination", nextDestination);
    router.replace(
      `${pathname}${params.toString() ? `?${params.toString()}` : ""}`,
      { scroll: false }
    );
  }

  function clearFilters() {
    setSearchInput("");
    router.replace(pathname, { scroll: false });
  }

  const hasActiveFilters = !!(query || category || destination);

  return {
    query,
    category,
    destination,
    searchInput,
    setSearchInput,
    categories: ALL_CATEGORIES,
    destinations: allDestinations,
    filtered,
    hasActiveFilters,
    updateFilters,
    clearFilters,
  };
}