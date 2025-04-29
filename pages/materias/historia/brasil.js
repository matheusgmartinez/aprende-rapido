import VideoWithTranscript from "@/components/VideoWithTranscript";
import styles from "@/styles/Materia.module.css";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function PlaylistNivel1() {
  const videos = [
    { youtubeId: "ouq9tU5DUOc", titulo: "Período Colonial Brasileiro" },
    { youtubeId: "eKyBF_Ib_Zg", titulo: "Brasil Império" },
    { youtubeId: "20_fR8U5zGM", titulo: "República Velha e a Era Vargas" },
    { youtubeId: "dif7EccOMTc", titulo: "Democracia Populista" },
    { youtubeId: "m3yxyJz0T9E", titulo: "Ditadura Militar" },
    { youtubeId: "8YuAWpufyo0", titulo: "República Neoliberal" },
  ];

  return (
    <Layout>
      <div className={styles.backButtonContainer}>
        <Link href="/materias/historia">
          <button className={styles.backButton}>← Voltar</button>
        </Link>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>História do Brasil</h1>
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
