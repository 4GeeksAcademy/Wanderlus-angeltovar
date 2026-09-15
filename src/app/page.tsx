import Link from "next/link";
import { experiences } from "@/data/experiences";
import { ExperienceCard } from "./components";

const featured = experiences.slice(0, 6);

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="hero-content">
        <p className="eyebrow">WANDERLUST EXPLORER</p>
        <h1>Ve a algún lugar<br /><em>donde nunca hayas estado.</em></h1>
        <p>Experiencias seleccionadas para los viajeros curiosos.<br />Encuentra lo extraordinario en cada rincón del mundo.</p>
        <Link href="/experiencias" className="button button-light">Explorar experiencias <span>→</span></Link>
      </div>
      <div className="hero-footer">
        <a href="#discover">DESCUBRE MÁS</a>
        <span>01 / 05</span>
      </div>
    </section>
    <section className="discover-section" id="discover">
      <div className="discover-header">
        <p className="eyebrow">EXPERIENCIAS DESTACADAS</p>
        <h2>Descubre <em>más</em></h2>
        <p>Una selección de experiencias únicas para tu próxima aventura.</p>
      </div>
      <div className="experience-grid">
        {featured.map((exp) => <ExperienceCard key={exp.id} experience={exp} />)}
      </div>
      <div className="discover-cta">
        <Link href="/experiencias" className="button">Ver todas las experiencias <span>→</span></Link>
      </div>
    </section>
  </>;
}
