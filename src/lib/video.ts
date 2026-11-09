/**
 * Turns any normal video share link into something the player can embed.
 * Supports YouTube (watch, youtu.be, shorts, embed, live), Vimeo and direct
 * video files. Anything else is treated as an external link.
 */

export type ParsedVideo =
  | { provider: "youtube"; id: string; embedUrl: string; poster: string }
  | { provider: "vimeo"; id: string; embedUrl: string; poster: "" }
  | { provider: "file"; src: string; poster: "" }
  | { provider: "link"; href: string; poster: "" }
  | null;

export function parseVideo(url: string): ParsedVideo {
  const value = url.trim();
  if (!value) return null;

  const youtube = value.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
  );
  if (youtube) {
    const id = youtube[1];
    return {
      provider: "youtube",
      id,
      // Privacy-enhanced host. autoplay=1 is only ever reached after a click.
      embedUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`,
      poster: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    };
  }

  const vimeo = value.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) {
    return {
      provider: "vimeo",
      id: vimeo[1],
      embedUrl: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`,
      poster: "",
    };
  }

  if (/\.(mp4|webm|mov)(\?.*)?$/i.test(value)) return { provider: "file", src: value, poster: "" };

  return { provider: "link", href: value, poster: "" };
}
