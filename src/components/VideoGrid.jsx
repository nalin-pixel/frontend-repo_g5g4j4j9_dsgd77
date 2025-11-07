import { useEffect, useState } from "react";

const YT_VIDEOS = [
  // Replace these IDs with the most popular clips you want to feature
  // Keeping a few generic gaming clips as defaults
  "dQw4w9WgXcQ", // placeholder fun clip
  "5qap5aO4i9A", // lofi livestream as a calm background
  "Zi_XLOBDo_Y", // another well-known video id
  "o-YBDTqX_ZU",
];

function YouTubeEmbed({ videoId }) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-black shadow">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function VideoGrid() {
  const [videos, setVideos] = useState(YT_VIDEOS);

  useEffect(() => {
    // If later you want to load dynamically from an API, wire it here
  }, []);

  return (
    <section id="videos" className="bg-gray-50 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Popular Clips</h2>
          <a
            href="https://www.youtube.com/@crashedgamerz/videos"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            See all videos →
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((id) => (
            <YouTubeEmbed key={id} videoId={id} />
          ))}
        </div>
      </div>
    </section>
  );
}
