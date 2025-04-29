import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/Materia.module.css';

export default function Portugues() {
  const playlists = [
    { slug: 'brasil', titulo: 'História do Brasil' },
    { slug: 'segunda-guerra', titulo: 'Segunda Guerra Mundial' },
  ];

  return (
    <Layout>
      <div className={styles.backButtonContainer}>
        <Link href="/">
          <button className={styles.backButton}>← Voltar</button>
        </Link>
      </div>

      <h1 className={styles.title}>História</h1>

      <ul className={styles.playlistGrid}>
        {playlists.map((playlist) => (
          <li key={playlist.slug} className={styles.playlistCard}>
            <Link href={`/materias/historia/${playlist.slug}`}>
              📁 {playlist.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
