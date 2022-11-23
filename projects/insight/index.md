---
title: Insight
date: 2022-10-29
thumbnailID: insight-thumbnail_tvoybl
preview: Insight was an app back in 2016-2017 for Doctors to digitize their clinical practice and easily help them submit and track their HMO claims.
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
  <Image imgPath='insight-post_ztyo9f' 
         params={imgParams}  
         sizes="(max-width: 700px) 100vw, 850px" 
         hoverEffect="false"
         alt="Insight Sample Screens"/>
</div>

## Background

Insight was an app back in 2016-2017 for Doctors to digitize their clinical practice and easily help them submit and track their HMO claims. It was a 2-part app where 1) on mobile, Doctors could run the administrative parts of their practice, and 2) a Kiosk-style app for patient membership, queuing, claims submission, and reservations. I did the UX Research and Mobile App design for iOS and Android. 


## Design Process 

Similar to my process with Sage, I prioritized the User Research stage before drafting any prototypes. Along with a few colleagues, we went directly to the clinics and hospitals to conduct User interviews. We also performed observational qualitative and quantitative research to see how viable a digitized clinical practice app would be for doctors and patients. 


<div class="post-image-container">
  <Image imgPath='insight-typography_tlu6j1' 
         params={imgParams}  
         sizes="(max-width: 700px) 100vw, 850px" 
         hoverEffect="false"
         alt="Sage Typography and Colors"/>
</div>


After the initial research, I also went through an iterative Design Thinking process with key stakeholders before drafting prototypes. Before a single line of code was written for the apps, I used the top customer journey maps for my mockups and went to several doctors to try an interactive version of the app. At the time,I chose Marvel and Invisionapp for this. 

I used the suggestions and new insights from doctors to further ideate and come up with a more consistent and accepted design flow. Even with multiple stakeholders, we got the app production approved and our fantastic mobile and backend engineers went to work. From there, I held multiple usability sessions with key user personas and submitted results with the PMs for the sprint planning. 


<div class="post-image-container">
  <Image imgPath='insight_mockup_vuzjhm' 
         params={imgParams}  
         sizes="(max-width: 700px) 100vw, 850px" 
         hoverEffect="false"
         alt="Sage mockups on iPad"/>
</div>



## Challenges

It was an interesting task to design an app that had multiple key personas as the user. The design needed to be clean, readable, and professional from the doctor's point of view. As for the regular patient, the Kiosk style app needed to be attractive and inviting. I ended up with 2 separate color schemes for the apps and it worked in terms of keeping to their purpose. 

Another challenge was working with teams of developers, each specific to their platform. I made sure that all development teams had a solid style guide for each of their platforms. Even when it came to spacing, my aim was to make the implementation of the designs as smooth as possible. 







