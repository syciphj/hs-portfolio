---
title: Lift CMS
date: 2022-02-01
thumbnailID: lift-thumbnail_ulqrrq
preview: Lift was a commercial health & wellness app curated for companies to customize their own wellness programs. Life Mobile was the customer-facing app.'
roles: [UX, Design]
designTools: [Illustrator, Photoshop, Sketch, Figma]

---

Thanks for checking out my blog template. It's based on the blog I built for my own [website](https://mattjennings.io) and I hope this is a good starting point for you to start yours.

Let's go over a few quick things:

- This template was built using `@sveltejs/kit@1.0.0-next.511`. I'll keep it updated when I can, but be aware that there things might break since SvelteKit is still in beta.

- The theme of this blog is heavily borrowed from Tailwind's ["Spotlight" blog template](https://spotlight.tailwindui.com/). This is _not_ a port of that template, but the styling is pretty much the same.

- You should edit the `src/lib/info.js` file to contain your information. This will properly update the parts of the website that display your name, social links, and SEO (meta tags) for your posts.

Now that that's out of the way, let's learn about how to make posts.

## Creating a Post

All of your posts (including this one) are located in the `posts` folder. They are written in markdown and parsed with mdsvex. If you're unfamiliar with mdsvex, I would recommend [looking at the website](https://mdsvex.com/playground) to see what is all possible out of the box.

You can add a new post by creating either a new `.md` file or a folder with an `index.md` file:

```
/posts/my-first-post.md
/posts/my-first-post/index.md
```

Make sure your posts have `title` and `date` properties in the front matter:

```md
---
title: My First Post
date: 2021-07-09
preview: This text will be used for the preview instead of the first paragraph
---

(your content here)
```

The `preview` property is optional, in case you want to customize the preview text. If the property is added, but the text is left empty, the first paragraph is used automatically.
