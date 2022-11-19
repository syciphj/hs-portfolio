import { base } from '$app/paths'

export interface Route {
  name: string,
  href: string
}

const baseStr = base === undefined ? '' : base;

const routes : Route[] = [
  {name: 'Home', href: `${baseStr}/` },
  {name: 'Projects', href: `${baseStr}/projects` },
  {name: 'Contact', href: `${baseStr}/contact` },
]

export default routes;