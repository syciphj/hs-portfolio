---
title: Lift CMS
date: 2022-11-08
thumbnailID: lift-cms-thumbnail_kvhpba
preview: Lift CMS was the the desktop app that controlled the events and wellness programs behind the scenes.
roles: [UX, Design, Fullstack]
techTools: [Angular, Node, MongoDB]
designTools:  [Illustrator, Photoshop, Sketch]
---

<script>
  import Image from '$lib/common/Image.svelte';
  import { base } from '$app/paths';
  import { ImageCloudinaryService, key as imgKey } from '$lib/services/image-formatter.service';
  import { setContext } from 'svelte';

  const baseStr = base === undefined ? '' : base;

  const imgParams = {
    width: 850
  }
  setContext(imgKey, new ImageCloudinaryService());
</script>

<div class="post-image-container">
  <Image imgPath='lift-cms-post_mcfm0c' params={imgParams}  sizes="(max-width: 700px) 100vw, 850px" hoverEffect="false" height="638"/>
</div>

## Background

This was the second half of the product [Lift Mobile]({baseStr}/projects/lift-mobile): the CMS behind it. The purpose was to have a desktop-only interface for the HR or Engagement folks of an organization to add their members, step challenges, and overall health & wellness content. Along with that, this was a tool to gather health data (when given the appropriate consent) to enable HR to create better suited programs for their organization. 

## Design Process 

I started this one with the main user persona in mind, the HR or engagement teams of an organization. The Lift CMS was not the regular user of the app, but more like an admin panel of a B2B product. I conducted several in-person interviews and design thinking sessions with the HR staff of our potential clients. My sessions focused on working backwards from my users. For example, it's common for users to sign up using the app so that the burden of adding the members would not be on the admins. However, it was unanimously agreed by the users that bulk uploading of members was easier for them. Instead of pushing forward with conventional approaches, user onboarding was much smoother for the HR admins.

<div class="post-image-container">
  <Image imgPath='lift-cms-mockup_ecam5o' params={imgParams}  sizes="(max-width: 700px) 100vw, 850px" hoverEffect="false" height="600"/>
</div>

## Technology Used
This enterprise application was developed back in 2016-2017. I'm unable to share details behind the decisions, but here's some parts of the tech stack. For the frontend, we wanted a framework that allowed for easy integration with our company's existing engineers and was opinionated enough to save training and onboarding costs. Angular was a good fit for those requirements. We wanted the frontend to be loosely coupled to the backend services to be able to reuse certain REST APIs, so we built a microservices architecture in Java. For the database we went with MongoDB to account for flexible data modeling and Redis for caching. 

## Challenges

In any health related app, it was our priority to store any PII data securely. Data anonymization and strict security policies were set in place for the microservices and data stores to protect any health related data. 

On the design and UX side, one challenge was the bulk data imports that needed to be verified on the frontend first. I handled that with a step-by-step import process that also had clear errors and warnings for any required edits. 

Overall the CMS was an engaging project especially with the responsibility of building the frontend and managing the data. 






