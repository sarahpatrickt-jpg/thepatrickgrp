interface TikTokEmbedProps {
  videoId: string;
  username: string;
}

export default function TikTokEmbed({ videoId, username }: TikTokEmbedProps) {
  const profileUrl = `https://www.tiktok.com/@${username}`;
  const videoUrl = `https://www.tiktok.com/@${username}/video/${videoId}`;

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3 p-6 transition-opacity hover:opacity-80"
      style={{ maxWidth: "280px" }}
    >
      {/* TikTok logo */}
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.2 4h-6.8v27.6c0 3.2-2.6 5.8-5.8 5.8s-5.8-2.6-5.8-5.8 2.5-5.8 5.7-5.8c.6 0 1.1.1 1.6.3V19c-.5-.1-1.1-.1-1.6-.1C14 18.9 8 24.9 8 32.4S14 46 21.6 46s13.6-6.1 13.6-13.6V18.2c2.4 1.7 5.4 2.7 8.6 2.7v-6.8c-4.7-.1-9.6-4.3-9.6-10.1z" fill="#FF004F"/>
      </svg>
      <div className="text-center">
        <p className="font-semibold text-white text-sm">Watch on TikTok</p>
        <p className="text-white/60 text-xs mt-1">@{username}</p>
      </div>
    </a>
  );
}
