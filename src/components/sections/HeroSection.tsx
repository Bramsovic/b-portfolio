
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroVideo from "@/video/emoji-hero-white.mp4";

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ onScrollToSection }: HeroSectionProps) => {
  const fullText = "Hi, I’m Brahim";
  const nameText = "Brahim";
  const nameIndex = useMemo(() => fullText.indexOf(nameText), [fullText, nameText]);
  const [typedText, setTypedText] = useState("");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedText(fullText);
      return;
    }

    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setTypedText(fullText.slice(0, index));
      if (index >= fullText.length) {
        window.clearInterval(interval);
      }
    }, 90);

    return () => window.clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    let isMounted = true;
    let revealTimeout: number | undefined;

    const revealVideo = () => {
      if (isMounted) {
        setIsVideoReady(true);
      }
    };

    const tryPlay = () => {
      revealVideo();
      void video.play().catch(() => {
        // Ignore autoplay rejections (browser policy) since the video is muted.
        revealVideo();
      });
    };

    const handleError = () => {
      if (!isMounted) {
        return;
      }

      setHasVideoError(true);
      setIsVideoReady(true);
    };

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      revealVideo();
    }

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      tryPlay();
    }

    video.addEventListener("loadedmetadata", revealVideo);
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("playing", revealVideo);
    video.addEventListener("error", handleError);
    revealTimeout = window.setTimeout(revealVideo, 1500);

    return () => {
      isMounted = false;
      if (revealTimeout) {
        window.clearTimeout(revealTimeout);
      }
      video.removeEventListener("loadedmetadata", revealVideo);
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("playing", revealVideo);
      video.removeEventListener("error", handleError);
    };
  }, []);

  const beforeName = typedText.slice(0, Math.max(0, nameIndex));
  const namePart = typedText.slice(Math.max(0, nameIndex), Math.max(0, nameIndex + nameText.length));
  const afterName = typedText.slice(Math.max(0, nameIndex + nameText.length));

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-3.5rem)] flex-col items-center justify-center px-4 py-14 text-center sm:min-h-screen sm:py-16"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="mb-8 overflow-hidden rounded-full border-4 border-primary/20">
          {hasVideoError ? (
            <div className="grid h-32 w-32 place-items-center bg-primary/10 text-2xl font-bold text-primary sm:h-40 sm:w-40 sm:text-3xl md:h-48 md:w-48">
              BH
            </div>
          ) : (
            <video
              ref={videoRef}
              src={heroVideo}
              className={`h-32 w-32 scale-110 transform-gpu object-cover object-[50%_40%] transition-opacity duration-300 sm:h-40 sm:w-40 md:h-48 md:w-48 ${
                isVideoReady ? "opacity-100" : "opacity-0"
              }`}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onLoadedData={() => setIsVideoReady(true)}
              onCanPlay={() => setIsVideoReady(true)}
              onError={() => {
                setHasVideoError(true);
                setIsVideoReady(true);
              }}
              aria-label="Vidéo d'introduction"
            />
          )}
        </div>
        <h1 className="mb-4 text-3xl font-bold leading-tight animate-fade-in sm:text-4xl md:text-6xl">
          <span>{beforeName}</span>
          <span className="text-primary">{namePart}</span>
          <span>{afterName}</span>
          <span className="typing-cursor" aria-hidden="true" />
        </h1>
        <h2 className="mb-8 max-w-2xl text-base text-muted-foreground sm:text-xl md:text-2xl">
           Ingénieur études et développement
        </h2>
        <div className="flex w-full flex-wrap justify-center gap-3 sm:w-auto sm:gap-4">
          <Button onClick={() => onScrollToSection("projects")} size="lg" className="w-full sm:w-auto">
            Voir mes projets
          </Button>
          <Button
            onClick={() => onScrollToSection("contact")}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            Me contacter
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 flex w-full justify-center animate-bounce sm:bottom-10 md:bottom-20">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => onScrollToSection("about")}
          aria-label="Aller à la section À propos"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
