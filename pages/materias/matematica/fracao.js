import VideoWithTranscript from "@/components/VideoWithTranscript";
import styles from "@/styles/Materia.module.css";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function PlaylistNivel1() {
  const videos = [
    { youtubeId: "vF0Q0ZAH9Uc", titulo: "COMO REPRESENTAR UMA FRAÇÃO" },
    { youtubeId: "KUn14ZDcr5k", titulo: "LEITURA DE FRAÇÕES" },
    { youtubeId: "R7lIua-1DVA", titulo: "FRAÇÃO PRÓPRIA, IMPRÓPRIA E APARENTE" },
    { youtubeId: "pFd5MQLGNC0", titulo: "COMPARAÇÃO de FRAÇÕES" },
    { youtubeId: "zFU1QIX8eXk", titulo: "FRAÇÃO MISTA" },
    { youtubeId: "Q6jPEnnOkJ8", titulo: "FRAÇÃO E PORCENTAGEM" },
    { youtubeId: "kR1_vTZHANI", titulo: "FRAÇÕES EQUIVALENTES" },
  ];

  return (
    <Layout>
      <div className={styles.backButtonContainer}>
        <Link href="/materias/matematica">
          <button className={styles.backButton}>← Voltar</button>
        </Link>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>Fração</h1>
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
