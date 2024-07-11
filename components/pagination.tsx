// import { getPreviousNext } from "@/lib/markdown";
import { getPreviousNext } from 'lib/markdown'
import { buttonVariants } from './ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'

export default function Pagination({ pathname }: { pathname: string }) {
  const res = getPreviousNext(pathname)

  return (
    <div className="flex items-center justify-between py-3 sm:py-7">
      <div>
        {res.prev && (
          <Link
            className="flex items-center gap-2 px-1 text-sm no-underline"
            href={`/docs/${res.prev.href}`}
          >
            <ChevronLeftIcon className="h-[1.1rem] w-[1.1rem]" />
            <p>{res.prev.title}</p>
          </Link>
        )}
      </div>
      <div>
        {res.next && (
          <Link
            className="flex items-center gap-2 px-1 text-sm no-underline"
            href={`/docs/${res.next.href}`}
          >
            <p>{res.next.title}</p>
            <ChevronRightIcon className="h-[1.1rem] w-[1.1rem]" />
          </Link>
        )}
      </div>
    </div>
  )
}
