import { CategoriesLeftBar } from '@/components/CategoriesLeftBar'



export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex items-start gap-14">
      <CategoriesLeftBar />
      <div className="flex-[4]">
        {children}
      </div>
    </div>
  )
}
