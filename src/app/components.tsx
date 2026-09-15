"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useState } from "react";
import type { Experience } from "@/data/experiences";

type FavoritesContextValue = { favoriteIds: number[]; toggleFavorite: (id: number) => void };
export const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const toggleFavorite = (id: number) => setFavoriteIds((current) => current.includes(id) ? current.filter((favoriteId) => favoriteId !== id) : [...current, id]);
  return <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>{children}</FavoritesContext.Provider>;
}

function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used inside FavoritesProvider");
  return context;
}

export function Navigation() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const isSpanish = pathname.startsWith("/experiencias") || pathname.startsWith("/favoritas") || pathname.startsWith("/perfil");

  function toggleLang(targetLang: "es" | "en") {
    if (targetLang === "es") {
      return pathname
        .replace(/^\/experiences/, "/experiencias")
        .replace(/^\/favorites/, "/favoritas")
        .replace(/^\/profile/, "/perfil");
    }
    return pathname
      .replace(/^\/experiencias/, "/experiences")
      .replace(/^\/favoritas/, "/favorites")
      .replace(/^\/perfil/, "/profile");
  }

  return (
    <header className="site-header">
      <Link href="/" className="brand">Wanderlust<span>+</span></Link>
      <nav>
        <Link href="/experiencias" className={isActive("/experiencias") ? "nav-link-active" : ""}>Explorar</Link>
        <Link href="/favoritas" className={isActive("/favoritas") ? "nav-link-active" : ""}>Favoritas</Link>
        <Link href="/perfil" className={isActive("/perfil") ? "nav-link-active" : ""}>Perfil</Link>
        <div className="lang-toggle">
          <Link href={toggleLang("es")} className={isSpanish ? "lang-active" : ""}>ES</Link>
          <span className="lang-sep">|</span>
          <Link href={toggleLang("en")} className={!isSpanish && pathname !== "/" ? "lang-active" : ""}>EN</Link>
        </div>
      </nav>
    </header>
  );
}

export function FavoriteButton({ experienceId }: { experienceId: number }) {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const favorite = favoriteIds.includes(experienceId);

  return (
    <button className={`favorite-button ${favorite ? "is-favorite" : ""}`} onClick={() => toggleFavorite(experienceId)} aria-label={favorite ? "Remove from favorites" : "Add to favorites"}>
      {favorite ? "♥" : "♡"}
    </button>
  );
}

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="experience-card">
      <Link href={`/experiencias/${experience.id}`} className="card-image-link">
        <img src={experience.imageUrl} alt={experience.title} className="card-image" />
      </Link>
      <div className="card-content">
        <div className="card-topline"><span className="category-label">{experience.category}</span><FavoriteButton experienceId={experience.id} /></div>
        <Link href={`/experiencias/${experience.id}`}><h2>{experience.title}</h2></Link>
        <p>{experience.description}</p>
        <div className="card-meta"><span>{experience.destination}</span><span>★ {experience.rating}</span></div>
        <strong>${experience.price} <small>/ person</small></strong>
      </div>
    </article>
  );
}

export function FavoriteExperienceList({ experiences }: { experiences: Experience[] }) {
  const { favoriteIds } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) => favoriteIds.includes(experience.id));
  if (!favoriteExperiences.length) return <div className="empty-state"><span>♡</span><h2>Tus favoritas te esperan</h2><p>Guarda experiencias que te encanten y aparecerán aquí.</p><Link href="/experiencias" className="button">Explorar experiencias</Link></div>;
  return <div className="experience-grid">{favoriteExperiences.map((experience) => <ExperienceCard key={experience.id} experience={experience} />)}</div>;
}
