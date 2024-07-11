import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { HeartIcon, TriangleIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="h-16 w-full border-t">
      <div className="text-muted-foreground container flex h-full flex-wrap items-center justify-center gap-4 py-3 text-sm sm:justify-between sm:gap-0 sm:py-0">
        <p className="text-center">
          Build by{' '}
          <Link className="px-1 underline underline-offset-2" href="https://github.com/nisabmohd">
            nisabmohd
          </Link>
          . The source code is available on{' '}
          <Link
            className="px-1 underline underline-offset-2"
            href="https://github.com/nisabmohd/Docs-Stater-Template"
          >
            GitHub
          </Link>
          .
        </p>
        <div className="hidden items-center gap-4 sm:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  )
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://vercel.com/templates/next.js/documentation-template"
        className={buttonVariants({ variant: 'outline', size: 'sm' })}
      >
        <TriangleIcon className="text-primary mr-2 h-[0.8rem] w-4 fill-current" />
        Deploy
      </Link>
      <Link
        href="https://github.com/sponsors/nisabmohd"
        className={buttonVariants({ variant: 'outline', size: 'sm' })}
      >
        <HeartIcon className="mr-2 h-4 w-4 fill-current text-red-600" />
        Sponsor
      </Link>
    </>
  )
}
