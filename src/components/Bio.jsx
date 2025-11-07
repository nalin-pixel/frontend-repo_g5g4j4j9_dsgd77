export default function Bio() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Creator Bio</h2>
      <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
        Hey, I’m CrashedGamerz. I turn late-night grind sessions into clean, high-energy edits. Expect a mix of competitive matches, chill playthroughs, and breakdowns that help you learn what actually works. If it’s fun and fast, it’s here.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Feature title="Genres I Play" items={["FPS & Tactical Shooters", "RPG/Action Adventures", "Indie gems worth your time"]} />
        <Feature title="Content Mix" items={["Shorts: clutch moments", "Highlights: best-of compilations", "Streams: community runs"]} />
        <Feature title="Upload Rhythm" items={["Weekly highlights", "Frequent Shorts", "Surprise streams"]} />
      </div>
    </section>
  );
}

function Feature({ title, items }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
