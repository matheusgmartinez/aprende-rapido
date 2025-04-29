import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/Materia.module.css';

export default function Portugues() {
  const playlists = [
    { slug: 'nivel1', titulo: 'Português do zero - Nível 1' },
    { slug: 'nivel2', titulo: 'Português do zero - Nível 2' },
    { slug: 'nivel3', titulo: 'Português do zero - Nível 3' },
    { slug: 'nivel4', titulo: 'Português do zero - Nível 4' },
  ];

  return (
    <Layout>
      <div className={styles.backButtonContainer}>
        <Link href="/">
          <button className={styles.backButton}>← Voltar</button>
        </Link>
      </div>

      <h1 className={styles.title}>Português</h1>

      <ul className={styles.playlistGrid}>
        {playlists.map((playlist) => (
          <li key={playlist.slug} className={styles.playlistCard}>
            <Link href={`/materias/portugues/${playlist.slug}`}>
              📁 {playlist.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
