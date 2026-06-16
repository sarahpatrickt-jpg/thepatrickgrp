interface TikTokVideoEmbedProps {
  videoId: string;
  title?: string;
}

/**
 * Embeds a single TikTok video via TikTok's official player iframe
 * (player/v1, which permits framing — unlike the blockquote widget that
 * TikTok blocks). Vertical 9:16, lazy-loaded, no client JS required.
 */
export default function TikTokVideoEmbed({
  videoId,
  title = "TikTok video",
}: TikTokVideoEmbedProps) {
  return (
    <div
      className="relative mx-auto w-full overflow-hidden"
      style={{
        maxWidth: 340,
        aspectRatio: "9 / 16",
        border: "1px solid var(--line)",
        backgroundColor: "#000",
      }}
    >
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.tiktok.com/player/v1/${videoId}?rel=0&description=0`}
        title={title}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
