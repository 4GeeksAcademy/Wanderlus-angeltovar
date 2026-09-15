import { experiences } from "@/data/experiences";
import { FavoriteExperienceList } from "../components";

export default function FavoritasPage() {
  return <main className="page-shell"><div className="page-heading compact"><p className="eyebrow">TU COLECCIÓN</p><h1>Lugares que te han<br /><em>enamorado.</em></h1><p className="intro">Tus experiencias guardadas, en un solo lugar.</p></div><FavoriteExperienceList experiences={experiences} /></main>;
}
