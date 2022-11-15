import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit'
import { ProjectDataService, type Project } from '$lib/services/projects.service'

const service = new ProjectDataService();
export const load: PageServerLoad = async ({ params }) => {
  const post = await service.getPostBySlug(params.slug)
  if(!post) {
    throw error(404, { message: 'Not Found'});
  }

  return { post };
}




