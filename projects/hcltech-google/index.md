---
title: HCLTech and Google
date: 2023-01-09
thumbnailID: hcl-google-thumbnail_mn9kxc
preview: From mid 2017, I worked at HCLTech Philippines to build a technical support engineering team for Google. 
roles: [Leadership, Support]
techTools: [HTML, Javascript, SQL, Data Warehouse, REST APIs, gRPC, Android, iOS]
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
  <Image imgPath='hcl-google-post_mzbeds' params={imgParams}  sizes="(max-width: 700px) 100vw, 850px" hoverEffect="false"/>
</div>

 During mid 2017, I worked at [HCLTech](https://www.hcltech.com/) Philippines and started as a support engineer SME partnered with Google as our client. I was given a goal at the time: to start a technical support team for a Google platform product in APAC. After 5 years, in late 2022, I left as the senior Team Lead after expanding the team seven-fold into different functional teams. While I cannot share specifics about Google and HCLTech projects, I’ll be sharing are personal highlights on the challenges and lessons I’ve encountered about building, leading, and growing a technical team.

## Leveraging web development fundamentals
The initial challenge when I took the role was to prove that our tiny starter group could learn the product to a point that we could effectively support it to developers globally. We were entrusted with a relatively small portion of the platform to support, and that was the proving ground to see if we could support more. To learn and use the product required solid Web Development and networking fundamentals. I leveraged my experience as a Software Engineer to pass the onboarding and training programs and in a few months we reached a point where our team could fully support the platform along with its APIs and SDKs. After being able to break through the initial hurdle, I iterated on and improved the onboarding programs and scaled it globally across other sites. Without a good handle on web development and a framework for continuous learning, we likely would not have moved past the first few months. 

## Hiring and developing leaders
An interesting challenge in building a support engineering team is how tangential the required skills are to software development. The talent pool of candidates with solid development fundamentals, especially in developing countries, take the path of software engineers or web developers. In order to attract and choose the right talent, I had to set up the initial recruitment requirements and processes that surfaced candidates’ web development knowledge and identified if they had the right support skills. From there, I designed a performance framework that could highlight and identify capable individual contributors and grassroots leaders. We had our leaders undergo tailor-fit leadership trainings and mentoring programs to help them build confidence and trust in leading their teams. Our focus on hiring the right people, elevating willing leaders, and maintaining a healthy organizational culture directly led to the success of our program.

## Data-driven customer obsession
With aggregated and anonymized data on hand about the platform’s support concerns, it was simple to gather data and focus on top customer pain points. To improve on existing tooling, I  set up automated workflows in SQL and specific data warehouse tools to populate key performance metrics that allowed us to monitor our project’s status on-demand. How I optimized our data gathering not only helped us build faster metrics reports for our stakeholders, but it became simpler to adapt to customer insights on our product updates. We could identify and hone in on customer experience trends before they became larger issues. As the leaders in the team became comfortable with how we gathered and analyzed the data, our internal coaching framework also improved as we relayed customer feedback in a timely manner for effective adjustment. This created a positive feedback loop that reduced repeat issues from the entire team. 

## Conclusion
Working for HCLTech and partnering with Google to build them a team was an incredibly fulfilling journey. Growing and scaling up a small ambitious group into a world-class, performing, group of teams continues to be one of my proudest professional achievements. While I may have started the programs, processes, and frameworks to allow the teams to shine, I had a lot of help and support from my stakeholders, mentors, and teammates — without which we could not have made it as far as 2022. 

If you like what I’ve written, or have questions and would like to reach out, feel free to do so on my [contact page.]({baseStr}/contact)