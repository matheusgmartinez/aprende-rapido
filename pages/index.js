import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/banner-educacao-desktop.png"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/banner-educacao-tablet.png"
        />
        <img
          src="/banner-educacao-mobile.png"
          alt="Estudo e Aprendizado"
          className={styles.banner}
        />
      </picture>

      <p className={styles.subtitle}>
        Explore conteúdos por matéria, aprenda rápido e de forma gratuita.
      </p>

      <ul className={styles.menu}>
        <li>
          <Link href="/materias/portugues">📘 Português</Link>
        </li>
        <li>
          <Link href="/materias/matematica">📐 Matemática</Link>
        </li>
        <li>
          <Link href="/materias/historia">🏛️ História</Link>
        </li>
      </ul>
    </Layout>
  );
}
