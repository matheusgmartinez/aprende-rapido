import VideoWithTranscript from "@/components/VideoWithTranscript";
import styles from "@/styles/Materia.module.css";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function PlaylistNivel1() {
  const videos = [
    { youtubeId: "qgR5kOpyIQc", titulo: "NOVO ACORDO ORTOGRÁFICO" },
    { youtubeId: "Gjv44CgF68Y", titulo: "ESTRUTURA e FORMAÇÃO de PALAVRAS" },
    {
      youtubeId: "MGT6BfJ19zI",
      titulo: "ANÁLISE MORFOLÓGICA x SINTÁTICA",
    },
    { youtubeId: "Fs9JB8IZc74", titulo: "ARTIGOS" },
  ];

  return (
    <Layout>
      <div className={styles.backButtonContainer}>
        <Link href="/materias/portugues">
          <button className={styles.backButton}>← Voltar</button>
        </Link>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>Português – Nível 2</h1>
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
