'use client'

import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'

interface VideoModalProps {
  videoId?: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function VideoModal({ videoId = 'dQw4w9WgXcQ', isOpen, setIsOpen }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* 
        Changes made to fix small sizing on desktop:
        - changed max-w-4xl to max-w-[1200px] to allow it to grow larger
        - w-[90vw] keeps it responsive, max-[1200px] defines the cap
        - added bg-black to make the iframe blending cleaner
      */}
      <DialogContent className="sm:max-w-[90vw] md:max-w-[1000px] lg:max-w-[1200px] w-[95vw] lg:w-[90vw] p-0 border-0 bg-black overflow-hidden shadow-2xl rounded-2xl [&>button]:text-white [&>button]:bg-black/50 [&>button]:hover:bg-black/80 [&>button]:rounded-full [&>button]:p-2 [&>button]:w-10 [&>button]:h-10 [&>button>svg]:w-6 [&>button>svg]:h-6">
        <DialogTitle className="sr-only">Vídeo demonstrativo</DialogTitle>
        <DialogDescription className="sr-only">
          Assista como a plataforma hitlovers funciona na prática para os artistas.
        </DialogDescription>
        
        {/* 16:9 Aspect Ratio container */}
        <div className="relative pt-[56.25%] w-full h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1`}
            title="Video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
