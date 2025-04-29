import VideoWithTranscript from "@/components/VideoWithTranscript";
import styles from "@/styles/Materia.module.css";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function PlaylistNivel1() {
  const videos = [
    { youtubeId: "k0sM0Ovooo8", titulo: "FONÉTICA e FONOLOGIA" },
    { youtubeId: "R7_Tv2Cr8HE", titulo: "SÍLABA TÔNICA" },
    {
      youtubeId: "vmKggNWVvtU",
      titulo: "ACENTUAÇÃO: OXÍTONAS, PAROXÍTONAS e PROPAROXÍTONAS",
    },
    { youtubeId: "UaYz46MpI3M", titulo: "HÍFEN – Como usar?" },
  ];

  return (
    <Layout>
      <div className={styles.backButtonContainer}>
        <Link href="/materias/portugues">
          <button className={styles.backButton}>← Voltar</button>
        </Link>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>Português – Nível 1</h1>
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
