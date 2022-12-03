# Welcome to my portfolio 👋

I wanted to showcase my previous design and development projects over the years, while also trying out Svelte. The idea was to adopt the Jamstack methodology and build a statically generated site hosted on Github pages to keep costs to near free even if its viewers scaled. (Near-free due to the cost of the domain). 

## Built with
- [Svelte](https://svelte.dev/): To see how enjoyable the framework really is. It's a joy to create custom Svelte components. A sample would be a custom `Image` component that builds responsive `picture` and `img` tags with Cloudinary URLs without much boilerplate code. [Actions](https://svelte.dev/tutorial/actions) and [Stores](https://svelte.dev/tutorial/writable-stores) are also very easy to understand and implement. 
- [Sveltekit](https://github.com/sveltejs/kit): To enjoy the benefits of fast hmr through Vite, its SSG adapter (even though it's not best for that), and trying out meta file based routing. Currently using `@sveltejs/kit@1.0.0-next.571`. 
- Typescript: Improved developer experience and prevent entirely avoidable runtime errors as I expand the site.
- [MDSveX](https://github.com/pngwn/mdsvex): Use MDX with Svelte so that my project pages and future blog pages can be in markdown and easily transferrable. I took advantage of Vite's `import.meta.glob` to load the markdown pages from the `/projects` folder. 
- [Cloudinary](https://cloudinary.com/): To serve my project images through a CDN while easily generating .webp and .png URLs without even using their SDK. The free-tier is more than enough for my use case. 

## Running the project

If you want to try and build the project locally, see below. 

Clone the repo and as usual install dependencies with `npm install` (or pnpm which I use with `pnpm install`), and start a development server:

```bash
pnpm run dev
```

You will need your own `.env` file with the following:
```
PUBLIC_CLOUDINARY_URL="YOUR_CLOUDINARY_URL"
PUBLIC_CLOUDINARY_FOLDER="YOUR_CLOUDINARY_FOLDER_IF_ANY"

PUBLIC_DOMAIN="YOUR_DOMAIN"

PUBLIC_LINKEDIN="YOUR_LINKEDIN"
PUBLIC_EMAIL="YOUR_EMAIL"
PUBLIC_GITHUB="YOUR_GITHUB"
```

To build it for a static page which goes to the `/docs` folder for Github pages. 
```bash
pnpm run build
```

Preview the build before commiting:
```bash
pnpm run preview
```

## Upcoming features
- [ ] Dark Mode
- [ ] Blog Posts
- [ ] More projects
- [ ] Project Filter by role on `/projects`

## Suggestions or Issues?
I welcome any feedback, suggestions, or issues found! Just file an issue on this repo. 
