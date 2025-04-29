import VideoWithTranscript from "@/components/VideoWithTranscript";
import styles from "@/styles/Materia.module.css";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function PlaylistNivel1() {
  const videos = [
    { youtubeId: "4LVbsP4v13c", titulo: "PRONOMES" },
    { youtubeId: "70dyjrhTRKk", titulo: "PRONOMES RELATIVOS" },
    {
      youtubeId: "imQwvMrJ-Wg",
      titulo: "VERBOS",
    },
    { youtubeId: "5Gee-5FgPXo", titulo: "VERBOS | PRETÉRITO PERFEITO, IMPERFEITO e MAIS-QUE-PERFEITO" },
    {
        youtubeId: "7kFL8Thus-g",
        titulo: "VERBOS | FUTURO DO PRESENTE e FUTURO DO PRETÉRITO",
      },
  ];

  return (
    <Layout>
      <div className={styles.backButtonContainer}>
        <Link href="/materias/portugues">
          <button className={styles.backButton}>← Voltar</button>
        </Link>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>Português – Nível 4</h1>
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
