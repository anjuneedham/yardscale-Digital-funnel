"use client";

import Image from "next/image";
import { useState } from "react";
import { parseVideo } from "@/lib/video";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

/**
 * Click-to-play video frame.
 *
 * Nothing loads from the video host until the visitor presses play, so the
 * page stays fast and no video ever autoplays. With no URL it renders a
 * clearly-labelled placeholder rather than a broken or fake player.
 */
export function VideoPlayer({
  url,
  title,
  poster,
  placeholderNote = "Video publishing soon",
  origin,
  priority = false,
  className,
}: {
  url: string;
  title: string;
  poster?: string;
  placeholderNote?: string;
  origin: string;
  /** Preload the poster — use for the above-the-fold hero only. */
  priority?: boolean;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const video = parseVideo(url);
  const image = poster || video?.poster || "";

  const frame = cn(
    "relative aspect-video w-full overflow-hidden rounded-card border border-line-strong bg-panel",
    className,
  );

  if (!video) {
    return (
      <div className={frame} role="img" aria-label={`${title} — ${placeholderNote}`}>
        <div aria-hidden className="grid-field absolute inset-0 opacity-70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
          <PlayGlyph muted />
          <div>
            <p className="label-mono">{placeholderNote}</p>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">{title}</p>
          </div>
        </div>
      </div>
    );
  }

  if (video.provider === "link") {
    return (
      <a
        href={video.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("video_play", { origin, provider: "link" })}
        className={cn(frame, "group block")}
        aria-label={`Watch: ${title} (opens in a new tab)`}
      >
        <Poster image={image} priority={priority} />
        <PlayOverlay title={title} />
      </a>
    );
  }

  if (playing) {
    return (
      <div className={frame}>
        {video.provider === "file" ? (
          <video src={video.src} controls autoPlay playsInline className="absolute inset-0 h-full w-full bg-black" />
        ) : (
          <iframe
            src={video.embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        )}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        setPlaying(true);
        track("video_play", { origin, provider: video.provider });
      }}
      className={cn(frame, "group block cursor-pointer text-left")}
      aria-label={`Play video: ${title}`}
    >
      <Poster image={image} priority={priority} />
      <PlayOverlay title={title} />
    </button>
  );
}

function Poster({ image, priority }: { image: string; priority: boolean }) {
  if (!image) return <div aria-hidden className="grid-field absolute inset-0 opacity-70" />;
  return (
    <Image
      src={image}
      alt=""
      fill
      priority={priority}
      sizes="(min-width: 1024px) 60vw, 100vw"
      className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
    />
  );
}

function PlayOverlay({ title }: { title: string }) {
  return (
    <span className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/75 via-black/10 to-transparent p-5 sm:p-7">
      <span className="label-mono self-start rounded-full bg-void/80 px-3 py-1.5 text-ink-soft">Watch</span>
      <span className="flex items-end justify-between gap-5">
        <span className="max-w-md text-pretty text-base font-medium leading-snug text-ink sm:text-lg">{title}</span>
        <PlayGlyph />
      </span>
    </span>
  );
}

function PlayGlyph({ muted = false }: { muted?: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex h-16 w-16 shrink-0 items-center justify-center rounded-full transition-transform duration-200 sm:h-20 sm:w-20",
        muted
          ? "border border-line-strong text-faint"
          : "bg-signal text-[color:var(--color-on-signal)] group-hover:scale-105",
      )}
    >
      <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 sm:h-7 sm:w-7" fill="currentColor">
        <path d="M7 4.5v15l13-7.5z" />
      </svg>
    </span>
  );
}
