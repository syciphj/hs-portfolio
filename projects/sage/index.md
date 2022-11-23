---
title: Sage
date: 2022-11-02
thumbnailID: sage-thumbnail_kv2mfv
preview: Sage was a kiosk type application that aimed to address a prominent issue on how outpatients got their HMO approval slips.
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
  <Image imgPath='sage-post_wpr8xp' 
         params={imgParams}  
         sizes="(max-width: 700px) 100vw, 850px" 
         hoverEffect="false"
         alt="Sage Sample Screens"/>
</div>

## Background

Sage was a kiosk type application that aimed to address a prominent issue on how outpatients got their HMO approval slips. In the Philippines, there are usually long lines during HMO approval before anyone gets to see a doctor. The idea of the app would be one of the first of its kind in self-service medical approvals at the time. The design and development was around 2016-2017. It's since been rebranded but was widely used by clinics then. 

## Design Process 

Most User Research was done online or with a certain separation between the UX Researcher and the audience. I wanted to challenge how we got our user pain points and information by going to various clinics in person. Along with short interviews with folks at each clinic, we mapped out foot traffic and process times on how long it would take for a person to see a doctor once they stepped in the clinic. After verifying and defining multiple user painpoints, we generated ideas to test out from the Ideation stage with a focus on testing those ideas on the field. 

<div class="post-image-container">
  <Image imgPath='sage-typography_y7unfr' 
         params={imgParams}  
         sizes="(max-width: 700px) 100vw, 850px" 
         hoverEffect="false"
         alt="Sage Typography and Colors"/>
</div>

During the Prototyping and Testing stage, I went through multiple feedback cycles with stakeholders and users on the field to verify flow that was easiest for the users while maintaining the requirements of the HMOs. As usual in the Design Thinking process, a lot of new painpoints and insights were brought to light and I iterated with new solutions for each one. With a working set of prototypes in hand, I was able to present the quantitatively most successful prototypes, got client approvals, and our mobile & backend engineers proceeded with development. 

<div class="post-image-container">
  <Image imgPath='sage-mockup_vjc7oi' 
         params={imgParams}  
         sizes="(max-width: 700px) 100vw, 850px" 
         hoverEffect="false"
         alt="Sage mockups on iPad"/>
</div>

## Challenges

Juggling the different stakeholders just to design the product here was a great learning experience. I needed to design a product that HMOs wanted to work with and at the same time was useful and delightful for the users in a clinic. Constraints, as always, pushed creative bounds since we needed to make relatively new technology to work with tablet type Kiosks. All in all, it was a valuable experience in User Research and Mobile Design. 






