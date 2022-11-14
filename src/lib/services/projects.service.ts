import  website  from '$lib/config/website';

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
  getAllProjects = async() => {
    return await projects;
  }

  getPostBySlug = async (slug: string) => {
    const project = projects.filter(proj => proj.slug === slug);
    return await project[0];
   }
}
