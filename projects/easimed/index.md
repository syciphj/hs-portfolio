---
title: Easimed
date: 2022-10-01
thumbnailID: easimed-thumbnail_ayzplw
preview: Easimed was the umbrella brand of my employer back in 2017. It was a team that served as a startup lab focused on enterprise healthcare applications.
roles: [Design, Frontend]
techTools: [HTML, Sass, Jquery]
designTools: [Illustrator, Photoshop, Sketch]

---

<script>
  import Image from '$lib/common/Image.svelte';
  import { ImageCloudinaryService, key as imgKey } from '$lib/services/image-formatter.service';
  import { setContext } from 'svelte';
  
  const imgParams = {
    width: 850
  }
  setContext(imgKey, new ImageCloudinaryService());
</script>

<div class="post-image-container">
  <Image imgPath='easimed-post_o0yoth' params={imgParams}  sizes="(max-width: 700px) 100vw, 850px" hoverEffect="false" height="420"/>
</div>

## Background

Easimed was the umbrella brand that provided several healthcare applications. I created the marketing site for Easimed to showcase its different products. The team was a startup lab focused on enterprise healthcare applications. Most of the products I designed and implemented while working for this company were under this umbrella brand. It started as a single mobile application that served as a health service locator for local insurance companies. It grew into a multi product brand each serving thousands of users. I was tasked to create the landing page in a week. 

As of 2022, the landing page is still up at <a href="https://www.easimed.com.ph" target="_blank" rel="noreferrer">easimed.com.ph</a> Most of the links are no longer working as the team has since been dissolved and some products have been rebranded. Note: keep the site in a separate tab. Some deprecated code is causing a regression interaction with the History API, calling it too many times. 

<div class="post-image-container">
  <Image imgPath='easimed-typography_n5afey' params={imgParams}  sizes="(max-width: 700px) 100vw, 850px" hoverEffect="false" height="500"/>
</div>

## Design and Technical

At the time, the requirement was to showcase 3 main products and their respective mockups. My inspiration at the time was the Apple website that showcased mockups reacting to scroll effects.
Due to the limited time requirement to get the landing page launched, the site was a plain static page bundled with Gulp and Bower. I used a Sass as the styling preprocessor. For the scroll effects, I used Jquery together with ScrollMagic to handle the scroll effects. The site assets were then hosted in an AWS EC2. 

The great thing about just using a static site for such a simple use case is that server fees are kept low and has almost free scaling even when users go up. It's probably the reason why the site is still up after all this time. 

<div class="post-image-container">
  <Image imgPath='easimed-post-2_oyrxny' params={imgParams}  sizes="(max-width: 700px) 100vw, 850px" hoverEffect="false"/>
</div>