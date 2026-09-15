import Link from "next/link";
import { notFound } from "next/navigation";
import { experiences } from "@/data/experiences";
import { FavoriteButton } from "../../components";

export function generateStaticParams() {
  return experiences.map(({ id }) => ({ id: String(id) }));
}

export default async function ExperienciaDetalle({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === Number(id));
  if (!experience) notFound();
  return <main className="detail-page"><Link href="/experiencias" className="back-link">← Volver a todas las experiencias</Link><div className="detail-layout"><img src={experience.imageUrl} alt={experience.title} className="detail-image" /><section className="detail-content"><div className="card-topline"><span className="category-label">{experience.category}</span><FavoriteButton experienceId={experience.id} /></div><h1>{experience.title}</h1><p className="detail-description">{experience.description}</p><dl className="detail-facts"><div><dt>Destino</dt><dd>{experience.destination}</dd></div><div><dt>Valoración</dt><dd>★ {experience.rating} / 5</dd></div><div><dt>Precio</dt><dd>${experience.price} <small>por persona</small></dd></div></dl><button className="button">Reservar esta experiencia <span>→</span></button></section></div></main>;
}