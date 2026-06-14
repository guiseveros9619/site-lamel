import { ReactNode } from 'react'

interface LegalPageWrapperProps {
  title: string
  lastUpdated?: string
  children: ReactNode
}

export function LegalPageWrapper({ title, lastUpdated, children }: LegalPageWrapperProps) {
  return (
    <div className="bg-brand-beige pt-32 pb-24 px-6 lg:px-8 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <header className="mb-12 border-b border-brand-black/10 pb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-black mb-4">
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-brand-black/60 font-medium">
              Última atualização: {lastUpdated}
            </p>
          )}
        </header>

        <div className="text-brand-black/80 space-y-6 text-lg leading-relaxed
          [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-brand-black [&>h2]:mt-12 [&>h2]:mb-6
          [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-brand-black [&>h3]:mt-8 [&>h3]:mb-4
          [&>p]:mb-6
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>ul]:mb-6
          [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-3 [&>ol]:mb-6
          [&_a]:text-brand-orange hover:[&_a]:text-brand-orange/80 hover:[&_a]:underline
          [&>strong]:text-brand-black [&>strong]:font-bold
        ">
          {children}
        </div>
      </div>
    </div>
  )
}
