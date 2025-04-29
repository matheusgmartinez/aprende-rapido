// components/Layout.js
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          Aprende Rápido
        </Link>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <section className={styles.about}>
        <h2>Sobre o Aprende Rápido</h2>
        <p>
          Este projeto foi criado para ajudar estudantes a acessarem conteúdos
          educativos de forma prática e gratuita. Desenvolvido como um projeto
          de extensão universitária.
        </p>
      </section>

      <footer className={styles.footer}>
        Site desenvolvido por Matheus Gonzalez Martinez
      </footer>
    </>
  );
}
