import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/Materia.module.css';

export default function Portugues() {
  const playlists = [
    { slug: 'operacoes-basicas', titulo: 'Operações Básicas' },
    { slug: 'fracao', titulo: 'Fração' },
  ];

  return (
    <Layout>
      <div className={styles.backButtonContainer}>
        <Link href="/">
          <button className={styles.backButton}>← Voltar</button>
        </Link>
      </div>

      <h1 className={styles.title}>Matemática</h1>

      <ul className={styles.playlistGrid}>
        {playlists.map((playlist) => (
          <li key={playlist.slug} className={styles.playlistCard}>
            <Link href={`/materias/matematica/${playlist.slug}`}>
              📁 {playlist.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
