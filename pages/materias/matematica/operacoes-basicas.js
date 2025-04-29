import VideoWithTranscript from "@/components/VideoWithTranscript";
import styles from "@/styles/Materia.module.css";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function PlaylistNivel1() {
  const videos = [
    { youtubeId: "WQSeNLlLjiU", titulo: "ADIÇÃO" },
    { youtubeId: "fy3CBP0lu8M", titulo: "SUBTRAÇÃO" },
    { youtubeId: "izaSmMXZRgk", titulo: "MULTIPLICAÇÃO" },
    { youtubeId: "61S-Rayhc7c", titulo: "DIVISÃO" },
  ];

  return (
    <Layout>
      <div className={styles.backButtonContainer}>
        <Link href="/materias/matematica">
          <button className={styles.backButton}>← Voltar</button>
        </Link>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>Operações Básicas</h1>
        <div className={styles.videoGrid}>
          {videos.map((video) => (
            <VideoWithTranscript
              key={video.youtubeId}
              youtubeId={video.youtubeId}
              titulo={video.titulo}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
}
