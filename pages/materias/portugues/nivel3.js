import VideoWithTranscript from "@/components/VideoWithTranscript";
import styles from "@/styles/Materia.module.css";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function PlaylistNivel1() {
  const videos = [
    { youtubeId: "JWduxThfUOQ", titulo: "SUBSTANTIVOS" },
    {
      youtubeId: "0Ir5jOCIhgo",
      titulo: "FLEXÃO NOMINAL – PLURAL dos SUBSTANTIVOS COMPOSTOS",
    },
    {
      youtubeId: "uZbIL_Xtlbc",
      titulo: "FLEXÃO NOMINAL – GÊNERO dos SUBSTANTIVOS",
    },
    {
      youtubeId: "_IbEwlfcVjI",
      titulo: "ADJETIVOS",
    },
    {
      youtubeId: "t-CZq6o4odw",
      titulo: "FLEXÃO NOMINAL – ADJETIVOS COMPOSTOS (gênero e número)",
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
        <h1 className={styles.title}>Português – Nível 3</h1>
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
