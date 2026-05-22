"use client";

import { useEffect } from "react";

interface TikTokEmbedProps {
  videoId: string;
  username: string;
}

export default function TikTokEmbed({ videoId, username }: TikTokEmbedProps) {
  useEffect(() => {
    // Load TikTok embed script once
    if (document.getElementById("tiktok-embed-script")) return;
    const script = document.createElement("script");
    script.id = "tiktok-embed-script";
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <blockquote
      className="tiktok-embed"
      cite={`https://www.tiktok.com/@${username}/video/${videoId}`}
      data-video-id={videoId}
      style={{ maxWidth: "605px", minWidth: "325px" }}
    >
      <section>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.tiktok.com/@${username}/video/${videoId}`}
        >
          Watch on TikTok
        </a>
      </section>
    </blockquote>
  );
}
