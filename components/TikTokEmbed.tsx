interface TikTokEmbedProps {
  videoId: string;
  username: string;
}

export default function TikTokEmbed({ videoId, username }: TikTokEmbedProps) {
  return (
    <div style={{ position: "relative", paddingBottom: "177.78%", height: 0, overflow: "hidden", borderRadius: "8px" }}>
      <iframe
        src={`https://www.tiktok.com/embed/v2/${videoId}`}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
        allow="encrypted-media"
        allowFullScreen
        title={`TikTok video by @${username}`}
      />
    </div>
  );
}
