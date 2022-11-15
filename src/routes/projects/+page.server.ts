import { dev } from '$app/environment';
import type { PageServerLoad } from './$types';
import type { ProjectMetaData } from '$lib/services/projects.service';
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
  
  //const projects = await service.getAllProjects()

  const projects : ProjectMetaData[] = await service.getAllProjectPosts();
  //console.log(tests);
  //debugger;
  if(!projects) {
    throw error(404, { message: 'Not Found'});
  }

  return { projects };
}
