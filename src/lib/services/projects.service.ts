import {browser} from '$app/environment';
import { format } from 'date-fns'
import { parse } from 'node-html-parser'

if(browser) {
  throw new Error(`posts can only be imported server-side`)
};

export enum ProjectRoles {
  UX = 'UX',
  Design = 'Design',
  Fullstack = 'Fullstack',
  Frontend = 'Frontend',
  Branding = 'Branding',
  Leadership = 'Leadership',
  Support = 'Support',
  PM = 'Program Management'
}

export enum DesignTools {
  Illustrator = 'Illustrator', 
  Photoshop = 'Photoshop', 
  Sketch = 'Sketch',
  Figma = 'Figma'
}

export enum TechTools { 
  HTML = 'HTML5', 
  Sass = 'Sass',
  Node = 'Node', 
  MongoDB = 'MongoDB',
  Angular = 'Angular',
  React = 'React',
  Svelte = 'Svelte',
  SQL = 'SQL',
  Javascript = 'Javascript',
  Data_warehouse = 'Data Warehouse',
  REST_APIS = 'REST APIs',
  gRPC = 'gRPC',
  Android = 'Android',
  iOS = 'iOS'
}

export interface Project {
  title: string,
  slug: string,
  description: string,
  thumbnailURL: string,
  roles: ProjectRoles[],
  designTools: DesignTools[],
  techTools: TechTools[],
  projectURL: string
}

export interface Preview {
  html?: string,
  text?: string
}

export interface ProjectMetaData {
  title: string,
  date: string,
  slug: string,
  thumbnailID: string,
  designTools?: DesignTools[],
  techTools?: TechTools[],
  isIndexFile?: boolean,
  preview?: Preview,
  roles?: ProjectRoles[],
  url?: string

}

export class ProjectDataService {


  private addTimezoneOffset = (date: Date) => {
    const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000
    return new Date(new Date(date).getTime() + offsetInMilliseconds)
  }

  getAllProjectPosts = async(): Promise<ProjectMetaData[]> => {
      const posts : ProjectMetaData[] = await Object.entries(import.meta.glob('/projects/**/*.md', {eager: true}))
      .map(([filepath, post]: [string, any]) => {
        const html = parse(post.default.render().html);
        const preview = post.metadata.preview ? parse(post.metadata.preview) : html.querySelector('p')

        return {
          ...post.metadata,

          slug : filepath.replace(/(\/index)?\.md/, '').split('/').pop(),

          date: post.metadata.date ? format(this.addTimezoneOffset(new Date(post.metadata.date)), 'yyyy-MM-dd') : undefined,

          preview: {
            html: preview?.toString(),
            text: preview?.structuredText ?? preview?.toString()
          }
        }
      })
      .sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      return posts;
  }

  public posts : Promise<ProjectMetaData[]> = this.getAllProjectPosts();

  getPostBySlug = async(slug: string) => {
    const post = (await this.posts).find((post) => post.slug === slug)
    return post;
   }

}
