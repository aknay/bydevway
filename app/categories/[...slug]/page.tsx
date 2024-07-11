import DocsBreadcrumb from '@/components/docs-breadcrumb'
import Pagination from '@/components/pagination'
import Toc from '@/components/toc'
// import { page_routes } from "@/lib/routes-config";
import { notFound } from 'next/navigation'
// import { getMarkdownForSlug } from "@/lib/markdown";
import { PropsWithChildren, cache } from 'react'
import { page_routes } from 'lib/routes-config'
import { getMarkdownForSlug } from 'lib/markdown'

type PageProps = {
  params: { slug: string[] }
}

const cachedGetMarkdownForSlug = cache(getMarkdownForSlug)

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join('/')
  const res = await cachedGetMarkdownForSlug(pathName)

  if (!res) notFound()
  return (
    <div className="flex items-start gap-12">
      <div className="flex-[3] py-10">
        <DocsBreadcrumb paths={slug} />
        <Markdown>
          <h1>{res.frontmatter.title}</h1>
          <p className="text-muted-foreground -mt-4 text-[16.5px]">{res.frontmatter.description}</p>
          <div>{res.content}</div>
          <Pagination pathname={pathName} />
        </Markdown>
      </div>
      <Toc path={pathName} />
    </div>
  )
}

function Markdown({ children }: PropsWithChildren) {
  return (
    <div className="prose-code:font-code prose prose-zinc w-[85vw] pt-2 dark:prose-invert prose-headings:scroll-m-20 prose-code:rounded-md prose-code:bg-neutral-100 prose-code:p-1 prose-code:text-sm prose-code:leading-6 prose-code:text-neutral-800 prose-pre:border prose-pre:bg-neutral-100 dark:prose-code:bg-neutral-900 dark:prose-code:text-white dark:prose-pre:bg-neutral-900 sm:mx-auto sm:w-full">
      {children}
    </div>
  )
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join('/')
  const res = await cachedGetMarkdownForSlug(pathName)
  if (!res) return null
  const { frontmatter } = res
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  }
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split('/'),
  }))
}
