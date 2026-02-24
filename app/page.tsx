import Image from "next/image";
import fs from "fs";
import path from "path";

export default function Home() {
  const decelDir = path.join(process.cwd(), "public/Decel");

  const files = fs
    .readdirSync(decelDir)
    .filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f))
    .sort();

  const trimmed = files.length > 5 ? files.slice(0, -5) : files;
  const images = trimmed.map((f) => `/Decel/${encodeURIComponent(f)}`);

  return (
    <div className="relative min-h-screen font-sans bg-[url('/bg.gif')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/40" />

      {/* minimalist audio player (top-left) */}
      <div className="absolute left-5 top-5 z-999">
        <audio
          controls
          preload="metadata"
          controlsList="nodownload noplaybackrate"
          className="h-9 w-[220px] opacity-90"
        >
          <source src="/lofi.mp3" type="audio/mpeg" />
        </audio>
      </div>

      {/* top-right pump link */}
      <a
        href="https://pump.fun/coin/BUJbxmxX3xsCbSgpJrnPyXF6rG1WT1QrurHFB8Mepump"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-5 top-5 z-10"
        aria-label="Open pump.fun"
      >
        <Image
          src="/pump.png"
          alt="pump.fun"
          width={60}
          height={60}
          className="h-auto"
          priority
        />
      </a>

      {/* HERO: exactly one screen tall */}
      <section className="relative z-10 flex h-screen items-center justify-center px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-sm md:text-7xl">
            DECEL/ACC
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/90 drop-shadow-sm sm:text-xl">
            a decel is someone who believes that AI and other new technologies are developing so quickly
            that they are likely to cause very serious problems and that progress should be deliberately
            slowed down.
          </p>
        </div>
      </section>

      {/* GALLERY: below the hero */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {images.map((src) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden rounded-xl ring-1 ring-white/10"
            >
              <Image
                src={src}
                alt="Decel"
                fill
                className="object-cover transition hover:scale-105"
                sizes="(min-width: 1024px) 200px, (min-width: 768px) 25vw, 50vw"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}