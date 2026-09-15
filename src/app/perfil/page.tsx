"use client";

import { useContext, useEffect } from "react";
import { FavoritesContext } from "../components";

export default function PerfilPage() {
  const favorites = useContext(FavoritesContext)?.favoriteIds.length ?? 0;

  useEffect(() => {
    document.title = `Perfil — ${favorites} favoritos | Wanderlust Explorer`;
  }, [favorites]);

  return <main className="profile-page"><div className="profile-card"><div className="avatar">AT</div><p className="eyebrow">PERFIL DE VIAJERO</p><h1>Angel Tovar</h1><p className="profile-bio">Viajero curioso, narrador y coleccionista de momentos inolvidables.</p><div className="profile-stats"><div><strong>{favorites}</strong><span>Favoritos guardados</span></div><div><strong>12</strong><span>Países explorados</span></div><div><strong>24</strong><span>Experiencias disfrutadas</span></div></div></div></main>;
}
