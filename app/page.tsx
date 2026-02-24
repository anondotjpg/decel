import Image from "next/image";

export default function Home() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center font-sans
                 bg-[url('/bg.gif')] bg-cover bg-center bg-no-repeat"
    >
      {/* 20% black overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* top-right link */}
      <a
        href="https://pump.fun/coin/BUJbxmxX3xsCbSgpJrnPyXF6rG1WT1QrurHFB8Mepump"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-5 top-5 z-10 inline-flex items-center justify-center"
        aria-label="Open pump.fun"
      >
        <Image
          src="/pump.png"
          alt="pump.fun"
          width={60}
          height={60}
          className="h-auto w-[60px]"
          priority
        />
      </a>

      {/* middle content */}
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-white drop-shadow-sm md:text-7xl">
          DECEL/ACC
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/90 drop-shadow-sm sm:text-xl">
          a decel is someone who believes that AI and other
          new technologies are developing so quickly that they are likely to cause very serious problems
          and that progress should be deliberately slowed down.
        </p>
      </div>
    </div>
  );
}