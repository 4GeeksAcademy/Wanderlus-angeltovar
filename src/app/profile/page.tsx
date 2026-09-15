"use client";

import { useContext, useEffect } from "react";
import { FavoritesContext } from "../components";

export default function ProfilePage() {
  const favorites = useContext(FavoritesContext)?.favoriteIds.length ?? 0;

  useEffect(() => {
    document.title = `Profile — ${favorites} favorites | Wanderlust Explorer`;
  }, [favorites]);

  return <main className="profile-page"><div className="profile-card"><div className="avatar">AT</div><p className="eyebrow">TRAVELER PROFILE</p><h1>Angel Tovar</h1><p className="profile-bio">Curious traveler, storyteller, and collector of beautiful moments.</p><div className="profile-stats"><div><strong>{favorites}</strong><span>Saved favorites</span></div><div><strong>12</strong><span>Countries explored</span></div><div><strong>24</strong><span>Experiences enjoyed</span></div></div></div></main>;
}
