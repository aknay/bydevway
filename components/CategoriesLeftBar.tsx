
import { ScrollArea } from '@/components/ui/scroll-area';
import { CATEGORIES_ROUTES } from 'lib/categories-routes';
import Anchor from './anchor';

export function CategoriesLeftBar() {
  return (
    <aside className="sticky top-16 hidden h-[92.75vh] min-w-[230px] flex-[0.9] flex-col overflow-y-auto md:flex">
      <ScrollArea className="py-4">
        <Menu />
      </ScrollArea>
    </aside>
  )
}

function Menu({ isSheet = false }) {
  return (
    <>
      {CATEGORIES_ROUTES.map(({ href, items, title }) => {
        return (
          <div className="mt-5 flex flex-col gap-3" key={href} >
            <Anchor activeClassName="font-medium text-primary" key={href} href={href}>
              {title}
            </Anchor>
          </div>
        )
      })}
    </>
  )
}
