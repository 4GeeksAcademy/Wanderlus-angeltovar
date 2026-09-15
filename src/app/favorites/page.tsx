import { experiences } from "@/data/experiences";
import { FavoriteExperienceList } from "../components";

export default function FavoritesPage() {
  return <main className="page-shell"><div className="page-heading compact"><p className="eyebrow">YOUR COLLECTION</p><h1>Places you&apos;ve<br /><em>fallen for.</em></h1><p className="intro">Your saved experiences, all in one place.</p></div><FavoriteExperienceList experiences={experiences} /></main>;
}
