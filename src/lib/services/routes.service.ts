export interface Route {
  name: string,
  href: string
}

const routes : Route[] = [
  {name: 'Home', href: '/' },
  {name: 'Projects', href: '/projects' },
  {name: 'Contact', href: '/contact' },
]

export default routes;