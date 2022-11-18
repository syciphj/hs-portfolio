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
  Support = 'Support'
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
  Svelte = 'Svelte'
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

const projects : Project[]= [{
  title: 'Lift Mobile',
  slug: 'lift-mobile',
  description: 'Lift was a commercial health & wellness app curated for companies to customize their own wellness programs. Life Mobile was the customer-facing app.',
  thumbnailURL: 'lift-thumbnail_ulqrrq',
  roles: [ProjectRoles.UX, ProjectRoles.Design],
  designTools: [DesignTools.Illustrator, DesignTools.Photoshop, DesignTools.Sketch, DesignTools.Figma],
  techTools: [],
  projectURL: ''
},
{
  title: 'Lift CMS',
  slug: 'lift-cms',
  description: 'Lift CMS was the the desktop app that controlled the events and wellness programs behind the scenes.',
  thumbnailURL: 'lift-desktop-highlight_ozpecm',
  roles: [ProjectRoles.UX, ProjectRoles.Design, ProjectRoles.Fullstack],
  designTools: [DesignTools.Illustrator, DesignTools.Photoshop, DesignTools.Sketch, DesignTools.Figma],
  techTools: [TechTools.Angular, TechTools.Node, TechTools.MongoDB],
  projectURL: ''
},
{
  title: 'Easimed', 
  slug: 'easimed',
  description: 'Easimed was the umbrella brand that provided several healthcare applications. I created the marketing site for Easimed to showcase its different products.',
  thumbnailURL: 'easimed-highlight_xwgoqb',
  roles: [ProjectRoles.Branding, ProjectRoles.Design, ProjectRoles.Frontend],
  designTools: [DesignTools.Illustrator, DesignTools.Photoshop, DesignTools.Sketch, DesignTools.Figma],
  techTools: [TechTools.HTML, TechTools.Sass ,TechTools.Node, TechTools.MongoDB],
  projectURL: 'easimed.com.ph'
},
{
  title: 'HPPI Marketing', 
  slug: 'hppi-marketing',
  description: 'HPPI Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue a neque varius, ut porttitor risus tempor. Phasellus maximus. ',
  thumbnailURL: 'easimed-highlight_xwgoqb',
  roles: [ProjectRoles.Branding, ProjectRoles.Design, ProjectRoles.Frontend],
  designTools: [DesignTools.Illustrator, DesignTools.Photoshop, DesignTools.Sketch, DesignTools.Figma],
  techTools: [TechTools.HTML, TechTools.Sass ,TechTools.Node, TechTools.MongoDB],
  projectURL: ''
},
{
  title: 'Sage', 
  slug: 'hppi-marketing',
  description: 'HPPI Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue a neque varius, ut porttitor risus tempor. Phasellus maximus. ',
  thumbnailURL: 'easimed-highlight_xwgoqb',
  roles: [ProjectRoles.Branding, ProjectRoles.Design, ProjectRoles.Frontend],
  designTools: [DesignTools.Illustrator, DesignTools.Photoshop, DesignTools.Sketch, DesignTools.Figma],
  techTools: [TechTools.HTML, TechTools.Sass ,TechTools.Node, TechTools.MongoDB],
  projectURL: ''
},
{
  title: 'Insight', 
  slug: 'hppi-marketing',
  description: 'HPPI Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue a neque varius, ut porttitor risus tempor. Phasellus maximus. ',
  thumbnailURL: 'easimed-highlight_xwgoqb',
  roles: [ProjectRoles.Branding, ProjectRoles.Design, ProjectRoles.Frontend],
  designTools: [DesignTools.Illustrator, DesignTools.Photoshop, DesignTools.Sketch, DesignTools.Figma],
  techTools: [TechTools.HTML, TechTools.Sass ,TechTools.Node, TechTools.MongoDB],
  projectURL: ''
}

];

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
