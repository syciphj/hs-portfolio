import type { PageLoad } from './$types';

export const load: PageLoad = async({ data }) => {
  const component = await import(`../../../../projects/${data.post.slug}/index.md`)
  console.log(component);
  debugger;

  return {
    post: data.post,
    component: component.default,
    layout: {
      fullWidth: true
    }
  }
} 