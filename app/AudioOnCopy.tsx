"use client";

import { useEffect, useRef } from "react";

export default function AudioOnCopy() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handler = async () => {
      const a = audioRef.current;
      if (!a) return;

      try {
        await a.play();
      } catch {
        // Autoplay can still be blocked in some edge cases; no UI forcing here.
      }
    };

    window.addEventListener("ca-copied", handler);
    return () => window.removeEventListener("ca-copied", handler);
  }, []);

  return (
    <div className="absolute left-5 top-5 z-[999]">
      <audio
        ref={audioRef}
        controls
        preload="auto"
        playsInline
        controlsList="nodownload noplaybackrate"
        // hidden on mobile, shows on md+
        className="hidden h-9 w-[220px] opacity-90 md:block"
      >
        <source src="/lofi.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}