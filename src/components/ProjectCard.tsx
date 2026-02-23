import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ArrowLeft, ChevronLeft, ChevronRight, InfoIcon, X, ZoomIn, ZoomOut } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  repoLink: string;
  showCaseStudy?: boolean;
  galleryImages?: string[];
  casestudy: {
    problem: string;
    solution: string;
    results: string;
  };
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const galleryImages = project.galleryImages?.length ? project.galleryImages : [project.image];
  const hasGallery = galleryImages.length > 1;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxZoom, setLightboxZoom] = useState(1);
  const selectedGalleryImage = lightboxIndex !== null ? galleryImages[lightboxIndex] : null;
  const closeLightbox = () => {
    setLightboxIndex(null);
    setLightboxZoom(1);
  };
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxZoom(1);
  };
  const updateZoom = (nextZoom: number) => {
    const clampedZoom = Math.min(3, Math.max(1, nextZoom));
    setLightboxZoom(Math.round(clampedZoom * 100) / 100);
  };
  const goToLightboxIndex = (index: number) => {
    if (!galleryImages.length) return;
    const normalized = (index + galleryImages.length) % galleryImages.length;
    setLightboxIndex(normalized);
    setLightboxZoom(1);
  };
  const showPreviousLightboxImage = () => {
    if (lightboxIndex === null) return;
    goToLightboxIndex(lightboxIndex - 1);
  };
  const showNextLightboxImage = () => {
    if (lightboxIndex === null) return;
    goToLightboxIndex(lightboxIndex + 1);
  };

  return (
    <Card className="w-full h-full overflow-hidden transition-all hover:shadow-lg flex flex-col">
      <div className="h-44 shrink-0 overflow-hidden bg-muted/30 sm:h-48">
        {hasGallery ? (
          <Carousel opts={{ loop: true }} className="h-full">
            <CarouselContent className="-ml-0 h-full">
              {galleryImages.map((imageSrc, index) => (
                <CarouselItem key={`${project.title}-${index}`} className="h-44 pl-0 sm:h-48">
                  <button
                    type="button"
                    onClick={() => openLightbox(index)}
                    className="block h-full w-full bg-muted/20 p-1 sm:p-2 cursor-zoom-in"
                    aria-label={`Agrandir la capture ${index + 1} du projet ${project.title}`}
                  >
                    <img
                      src={imageSrc}
                      alt={`${project.title} - capture ${index + 1}`}
                      className="w-full h-full object-contain rounded-sm"
                    />
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="left-2 hidden h-8 w-8 border-white/40 bg-black/40 text-white hover:bg-black/60 hover:text-white sm:inline-flex"
            />
            <CarouselNext
              className="right-2 hidden h-8 w-8 border-white/40 bg-black/40 text-white hover:bg-black/60 hover:text-white sm:inline-flex"
            />
          </Carousel>
        ) : (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        )}
      </div>
      <CardContent className="flex flex-1 flex-col p-4 sm:p-6">
        <div>
          <div className="mb-4 flex items-start justify-between gap-2">
            <h3 className="min-w-0 pr-2 text-lg font-bold leading-tight [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden sm:text-xl">
              {project.title}
            </h3>
            {project.showCaseStudy !== false && (
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <InfoIcon className="h-4 w-4" />
                    <span className="sr-only">Étude de cas</span>
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-[min(20rem,calc(100vw-2rem))]">
                  <div className="space-y-2">
                    <h4 className="font-medium">Étude de cas</h4>
                    <div className="space-y-1">
                      <p className="text-sm"><span className="font-medium">Problème :</span> {project.casestudy.problem}</p>
                      <p className="text-sm"><span className="font-medium">Solution :</span> {project.casestudy.solution}</p>
                      <p className="text-sm"><span className="font-medium">Résultats :</span> {project.casestudy.results}</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            )}
          </div>
          <p className="mb-4 whitespace-pre-line text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.description}
          </p>
        </div>
        <div className="mt-auto pt-2">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      {hasGallery && (
        <Dialog
          open={lightboxIndex !== null}
          onOpenChange={(open) => {
            if (!open) {
              closeLightbox();
            }
          }}
        >
          <DialogContent className="h-[100svh] w-[100vw] max-w-none overflow-hidden border-none bg-transparent p-0 text-foreground shadow-none sm:h-auto sm:w-[96vw] sm:max-w-6xl [&>button]:hidden">
            <DialogTitle className="sr-only">
              {`Capture agrandie - ${project.title}`}
            </DialogTitle>
            {selectedGalleryImage && (
              <div className="relative flex h-full flex-col p-2 pt-12 sm:block sm:h-auto sm:p-3 sm:pt-14">
                <div className="absolute left-2 right-2 top-2 z-20 flex items-center sm:left-3 sm:right-3 sm:top-3">
                  <button
                    type="button"
                    onClick={closeLightbox}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/40"
                    aria-label={`Revenir au projet ${project.title}`}
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>

                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/20 px-2 py-1 text-xs text-white/75 backdrop-blur-sm">
                    {`Image ${(lightboxIndex ?? 0) + 1} / ${galleryImages.length}`}
                  </span>

                  <div className="ml-auto flex items-center gap-1.5">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => updateZoom(lightboxZoom - 0.25)}
                      disabled={lightboxZoom <= 1}
                      className="hidden h-8 w-8 border-none bg-black/25 text-white shadow-none backdrop-blur-sm hover:bg-black/40 disabled:bg-black/10 disabled:text-white/40 sm:inline-flex"
                    >
                      <ZoomOut className="h-4 w-4" />
                      <span className="sr-only">Réduire le zoom</span>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => updateZoom(lightboxZoom + 0.25)}
                      disabled={lightboxZoom >= 3}
                      className="hidden h-8 w-8 border-none bg-black/25 text-white shadow-none backdrop-blur-sm hover:bg-black/40 disabled:bg-black/10 disabled:text-white/40 sm:inline-flex"
                    >
                      <ZoomIn className="h-4 w-4" />
                      <span className="sr-only">Augmenter le zoom</span>
                    </Button>

                    <button
                      type="button"
                      onClick={closeLightbox}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/40"
                      aria-label={`Fermer l’image agrandie du projet ${project.title}`}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden sm:flex-none sm:overflow-visible">
                  <Button
                    type="button"
                    variant="secondary"
                    size="icon"
                    onClick={showPreviousLightboxImage}
                    className="absolute left-2 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-full border-none bg-black/35 text-white shadow-none ring-1 ring-white/20 backdrop-blur-md transition hover:bg-black/55 active:scale-95 sm:left-3 sm:h-9 sm:w-9"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft className="h-5 w-5 sm:h-4 sm:w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    size="icon"
                    onClick={showNextLightboxImage}
                    className="absolute right-2 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-full border-none bg-black/35 text-white shadow-none ring-1 ring-white/20 backdrop-blur-md transition hover:bg-black/55 active:scale-95 sm:right-3 sm:h-9 sm:w-9"
                    aria-label="Image suivante"
                  >
                    <ChevronRight className="h-5 w-5 sm:h-4 sm:w-4" />
                  </Button>
                  <div className="flex max-h-[68svh] w-full items-center justify-center overflow-auto overscroll-contain sm:max-h-[62vh]">
                    <div
                      className="mx-auto min-w-full sm:min-w-0"
                      style={{ width: `${lightboxZoom * 100}%` }}
                    >
                      <img
                        src={selectedGalleryImage}
                        alt={`${project.title} - capture agrandie`}
                        onDoubleClick={() => updateZoom(lightboxZoom > 1 ? 1 : 2)}
                        className="block h-auto w-full object-contain"
                        style={{ cursor: lightboxZoom > 1 ? "zoom-out" : "zoom-in" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-center sm:mt-3 sm:justify-between">
                  <span className="hidden text-xs text-white/75 sm:inline">
                    {`Image ${(lightboxIndex ?? 0) + 1} / ${galleryImages.length}`}
                  </span>
                  <div className="flex max-w-full gap-1.5 overflow-x-auto pb-1 sm:gap-2">
                    {galleryImages.map((imageSrc, index) => (
                      <button
                        key={`${project.title}-thumb-${index}`}
                        type="button"
                        onClick={() => goToLightboxIndex(index)}
                        className={`h-12 w-20 shrink-0 overflow-hidden rounded-sm transition sm:h-14 sm:w-24 ${
                          index === lightboxIndex
                            ? "opacity-100 ring-1 ring-white/40"
                            : "opacity-55 hover:opacity-85"
                        }`}
                        aria-label={`Voir la capture ${index + 1}`}
                      >
                        <img
                          src={imageSrc}
                          alt={`${project.title} - miniature ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </Card>
  );
};

export default ProjectCard;
