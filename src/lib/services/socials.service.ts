import website from '$lib/config/website';
import email from '$lib/assets/logos/email.svg';
import linkedin from '$lib/assets/logos/linkedin.svg';
import github from '$lib/assets/logos/github.svg';

export const socials = [
  {name: 'email',
   href: `mailto:${website.email}`,
   imgSrc: email,
   alt: 'Email link',
   ariaLabel: 'Reach out via Email',
   displayText: 'Reach out via Email'
  },
  {name: 'github',
   href: website.githubURL,
   imgSrc: github,
   alt: 'Github link',
   ariaLabel: 'View Github Projects',
   displayText: 'Follow me on Github'
  },
  {name: 'linkedin',
   href: website.linkedinURL,
   imgSrc: linkedin,
   alt: 'Linkedin link',
   ariaLabel: 'Reach out via LinkedIn',
   displayText: 'Follow me on LinkedIn'
  }
]

export default socials;