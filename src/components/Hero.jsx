import { Youtube, PlayCircle, Gamepad2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[220px,1fr]">
          <div className="relative h-44 w-44 shrink-0 rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur md:h-56 md:w-56 flex items-center justify-center">
            <div className="h-[85%] w-[85%] rounded-2xl bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-600 grid place-items-center">
              <span className="text-4xl md:text-5xl font-black tracking-tight">CG</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <Gamepad2 className="h-6 w-6" />
              <span className="text-sm uppercase tracking-widest text-white/80">
                Official Creator Profile
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              @crashedgamerz
            </h1>
            <p className="mt-4 max-w-2xl text-white/90">
              Gameplay, walkthroughs, highlights, and honest takes on the latest titles. Dive into fast-cut edits, clutch moments, and satisfying wins.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://www.youtube.com/@crashedgamerz"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-4 py-2 font-semibold shadow hover:shadow-md transition"
              >
                <Youtube className="h-5 w-5 text-red-600" />
                Subscribe on YouTube
              </a>
              <a
                href="#videos"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/15 ring-1 ring-white/20"
              >
                <PlayCircle className="h-5 w-5" />
                Watch Clips
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(255,255,255,0.18),transparent)]" />
    </section>
  );
}
