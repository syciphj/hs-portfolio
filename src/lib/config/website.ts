import {
  PUBLIC_CLOUDINARY_URL,
  PUBLIC_CLOUDINARY_FOLDER,
  PUBLIC_DOMAIN,
  PUBLIC_LINKEDIN,
  PUBLIC_GITHUB,
  PUBLIC_EMAIL
} from '$env/static/public';


const website = {
  cloudinaryURL: PUBLIC_CLOUDINARY_URL,
  cloudinaryVersionFolder: PUBLIC_CLOUDINARY_FOLDER,
  domain: PUBLIC_DOMAIN,
  linkedinURL: PUBLIC_LINKEDIN,
  githubURL: PUBLIC_GITHUB,
  email: PUBLIC_EMAIL
};


export {website as default};