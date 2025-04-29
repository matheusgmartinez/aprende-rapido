'use client';
export default function VideoWithTranscript({ youtubeId, titulo }) {
  return (
    <div style={{ marginBottom: '3rem', padding: '1rem', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>
      {titulo && <h3 style={{ marginBottom: '1rem', color: '#1f2937' }}>{titulo}</h3>}
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}
