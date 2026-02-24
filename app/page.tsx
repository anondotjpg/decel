import Image from "next/image";

export default function Home() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center font-sans
                 bg-[url('/bg.gif')] bg-cover bg-center bg-no-repeat"
    >
      <a
        href="https://pump.fun/coin/BUJbxmxX3xsCbSgpJrnPyXF6rG1WT1QrurHFB8Mepump"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-5 top-5 z-50 inline-flex items-center justify-center"
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
    </div>
  );
}