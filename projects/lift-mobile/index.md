---
title: Lift Mobile
date: 2022-11-10
thumbnailID: lift-thumbnail_ulqrrq
preview: Lift was a commercial health & wellness app curated for companies to customize their own wellness programs. Lift Mobile was the customer-facing app.
roles: [UX, Design]
designTools:  [Illustrator, Photoshop, Sketch, Figma]
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
  <Image imgPath='lift-mobile-post_pw6wyi' params={imgParams}  sizes="(max-width: 700px) 100vw, 850px" hoverEffect="false" height="500"/>
</div>

## Background

Lift was one of the 4 main product offerings under Easimed – a kind of Startup Labs under my previous employer back in 2017. The idea for Lift was to have customizable product specifically tailored for companies and organizations that wanted more control and interactivity for their health & wellness programs. 

Think of how organizations or teams would organize walk/run challenges (e.g. team with the most steps win), but there would be an app and CMS that could easily manage that. The features for Lift expanded beyond exercise challenges but also gamified health & wellness tracking that could link to rewards. 

<div class="post-image-container">
  <Image imgPath='lift-mobile-typography_yqqat0' params={imgParams}  sizes="(max-width: 700px) 100vw, 850px" hoverEffect="false" height="500"/>
</div>

## Design Process 

Before a single pixel was digitally crafted, I advocated to go through an initial Design Sprint to ideate and get input from multiple stakeholders of the team. On Day 1 we crafted our customer journey maps and empathy maps to see how our app could be more impactful and usable. This was a specific design challenge because there are alternatives to simply sending various fitness tracker results and just rank people or teams by steps. So our app needed to be more than that. 

From there, I gathered the top solutions from our ideation stage and storyboarded the top flows we as a team agreed on. I crafted the prototypes and facilitated both internal (as our company also wanted this for ourselves) and client user-testing and validation. After the results were presented to our PMs, we agreed on the flow and I crafted the style guide and screens for our mobile devs to work on. 

<div class="post-image-container">
  <Image imgPath='lift-mobile-mockup_mdaign' params={imgParams}  sizes="(max-width: 700px) 100vw, 850px" hoverEffect="false" height="600"/>
</div>

## Challenges

Just from hearing the idea that this would be an app akin to steps challenges, the usability and design needed to clearly show that it was better to use Lift compared to setting up a step program manually. We focused on a couple of key items: 
1. Seamless integration with the top health tracking apps at the time 
2. Hassle-free point ranking and teaming 
3. Making it as social as possible. 

My designs focused on highlighting these. For integration, our onboarding involved step-by-step guides for health app pairing. For the point ranking and teaming, the leaderboard was part of the main page for each goal. To make the app more social, we had an intuitive team creation and invite system. 





