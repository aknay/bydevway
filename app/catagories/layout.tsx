// // import { docsConfig } from "@/config/docs"
// import { DocsSidebarNav } from "@/components/sidebar-nav"
// import { docsConfig } from "config/docs"

import { Leftbar } from '@/components/leftbar'

// interface DocsLayoutProps {
//   children: React.ReactNode
// }

// export default function DocsLayout({ children }: DocsLayoutProps) {
//   return (
//     <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
//       <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
//         <DocsSidebarNav items={docsConfig.sidebarNav} />
//       </aside>
//       {children}
//     </div>
//   )
// }

// import { Leftbar } from "@/components/leftbar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex items-start gap-14">
      <Leftbar />
      <div className="flex-[4]">{children}</div>{' '}
    </div>
  )
}
