import { dev } from '$app/environment';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit'
import { ProjectDataService } from '$lib/services/projects.service'

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;
// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

const service = new ProjectDataService();

export const load: PageServerLoad = async () => {
  
  const projects = await service.getAllProjects()
  
  if(!projects) {
    throw error(404, { message: 'Not Found'});
  }

  return { projects };
}
