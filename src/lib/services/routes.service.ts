import { base } from '$app/paths'

export interface Route {
  name: string,
  href: string,
  routeID: string
}

const baseStr = base === undefined ? '' : base;

const routes : Route[] = [
  {name: 'Home', href: `${baseStr}/`, routeID: '/'},
  {name: 'Projects', href: `${baseStr}/projects`, routeID: '/projects' },
  {name: 'Contact', href: `${baseStr}/contact`, routeID: '/contact' },
]

export default routes;