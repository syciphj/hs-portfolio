import website from '$lib/config/website';
import email from '$lib/assets/icons/EmailIcon.svelte';
import linkedin from '$lib/assets/icons/LinkedinIcon.svelte';
import github from '$lib/assets/icons/GithubIcon.svelte';

export const socials = [
  {name: 'email',
   href: `mailto:${website.email}`,
   componentPath: email,
   alt: 'Email link',
   ariaLabel: 'Reach out via Email',
   displayText: 'Reach out via Email'
  },
  {name: 'github',
   href: website.githubURL,
   componentPath: github,
   alt: 'Github link',
   ariaLabel: 'View Github Projects',
   displayText: 'Follow me on Github'
  },
  {name: 'linkedin',
   href: website.linkedinURL,
   componentPath: linkedin,
   alt: 'Linkedin link',
   ariaLabel: 'Reach out via LinkedIn',
   displayText: 'Follow me on LinkedIn'
  }
]

export default socials;