// for page navigation & to sort on leftbar
export const CATEGORIES_ROUTES = [
  {
    title: 'Artificial Intelligence',
    href: '/categories/artificial-intelligence',
    items: [
    ],
  },
  {
    title: 'Developer Tools',
    href: '/categories/developer-tools',
    items: [

    ],
  },
  {
    title: 'Python Backend',
    href: 'server-actions',
    items: [

    ],
  },

]

export const page_routes = CATEGORIES_ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link,
      href: href
    }
  })
}).flat()
