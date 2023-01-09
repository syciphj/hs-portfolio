<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';

  import Image from '$lib/common/Image.svelte';
  import type {ImageParams} from '$lib/services/image-formatter.service';
  const imagePaths = {
    hclTechGoogle: 'hcl-google-highlight_kd3yuo',
    liftMobile: 'lift-highlight_yb3vxp',
    liftDesktop: 'lift-desktop-highlight_ozpecm',
    easimed: 'easimed-highlight_xwgoqb'
  };

  const baseStr = base === undefined ? '' : base;

  const projectImageParams : ImageParams = {
    width: 600
  }

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    })
  })

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  });
</script>

<section>
  <h1>Selected projects</h1>
  <p>Here is a quick peek at some of my favorite works and projects so far.</p>
  <div class="project-container">

    <!-- HCLTech x Google -->
    <div class="project-card">
      <div class="project-blurb">
        <h2 class="project-title">HCLTech x Google</h2>
        <ul class="roles">
          <li>Leadership</li>
          <li>Support Eng.</li>
        </ul>
        <p> I worked at HCLTech Philippines to build a technical support engineering team for Google. After 5 years, in late 2022, I left as the senior Team Lead after expanding the team seven-fold into different functional teams.</p>
        <a href="{baseStr}/projects/hcltech-google" class="nav-button">view details</a>
      </div>
      <div class="project-image hidden">
        <Image imgPath={imagePaths.hclTechGoogle} 
               params={projectImageParams} 
               sizes="(max-width: 700px) 100vw, 450px" 
               class="featured-img"
               alt="HCLTech and Google"
               height="400"/>
      </div>
    </div>

    <!-- Lift Mobile -->
    <div class="project-card">
      <div class="project-image hidden flex flex-end">
        <Image imgPath={imagePaths.liftMobile} 
               params={projectImageParams} 
               sizes="(max-width: 700px) 100vw, 450px" 
               class="featured-img sm-zoom"
               alt="Lift Mobile Featured Image"
               height="400"/>
      </div>

      <div class="project-blurb text-right">
        <h2 class="project-title">Lift Mobile</h2>
        <ul class="roles flex-end">
          <li>UX</li>
          <li>Design</li>
        </ul>
        <p>Lift was a commercial health & wellness app curated for companies to customize their own wellness programs.
          I did the UX Research and Design for iOS and Android.
        </p>
        <a href="{baseStr}/projects/lift-mobile" class="nav-button">view details</a>
      </div>
    </div>

    <!-- Lift CMS -->
    <div class="project-card">
      <div class="project-blurb">
        <h2 class="project-title">Lift CMS</h2>
        <ul class="roles">
          <li>UX</li>
          <li>Design</li>
          <li>Fullstack Dev</li>
        </ul>
        <p>Lift CMS was the the desktop app that controlled the content and membership of the Lift mobile app. I designed and developed the whole site.</p>
        <a href="{baseStr}/projects/lift-cms" class="nav-button">View details</a>
      </div>

      <div class="project-image hidden">
        <Image imgPath={imagePaths.liftDesktop} 
               params={projectImageParams} 
               sizes="(max-width: 700px) 100vw, 450px"  
               class="featured-img sm-zoom"
               alt="Lift CMS Featured Image"
               height="400"/>
      </div>
    </div>

    <!-- Easimed Brand-->
    <div class="project-card">
      <div class="project-image hidden flex flex-end">
        <Image imgPath={imagePaths.easimed} 
               params={projectImageParams} 
               sizes="(max-width: 700px) 100vw, 450px"  
               class="featured-img sm-zoom"
               alt="Easimed Featured Image"
               height="400"/>
      </div>
      <div class="project-blurb text-right">
        <h2 class="project-title">Easimed</h2>
        <ul class="roles flex-end">
          <li>Design</li>
          <li>Branding</li>
          <li>Frontend Dev</li>
        </ul>
        <p>Easimed was the umbrella brand that provided several healthcare applications. I developed the marketing site for Easimed to showcase its different products.</p>
        <a href="{baseStr}/projects/easimed" class="nav-button">View Details</a>
      </div>
    </div>
  </div>
</section>
<section class="view-more hidden">
  <h1>Want to view more?</h1>
  <p class="view-more-text">If you'd like to see more of my projects please visit the projects page through the link below</p>
  <a href="{baseStr}/projects" class="nav-button">View all projects</a>
</section>



<style>
  h1 {
    font-weight: 600;
    margin-bottom: 0;
  }

  h2 {
    font-weight: 600
  }
  
  section {
    margin-top: 5em;
  }

  .text-right {
    text-align: right;
  }

  .flex {
    display: flex;
  }
  
  .flex-end {
    justify-content: flex-end;
  }

  .project-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .project-card {
    display: flex;
    width: 100%;
    margin: 2em 1em;
    padding: 1em;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow: hidden;
  }

  .project-blurb {
    width: 40%;
  }

  .project-title {
    font-size: 1.8rem;
    margin: 0;
  }

  .project-blurb p {
    margin-bottom: 2rem;
  }

  .project-image {
    width: 450px;
    overflow: hidden;
  }

  .view-more {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 0;
    height: 15em;
  }

  .view-more-text {
    width: 50%;
    margin-bottom: 3em;
    
  }

  @media (max-width: 800px) {
    .project-image {
      width: 400px;
    }
  }

  @media (max-width: 836px) {

    .project-card{
      padding: 2em 0;
    }
    .project-blurb {
      order: 2;
      width: 100vw;
    }
    .project-image {
      order: 1;
      height: 250px;
      width: 100vw;
      margin-bottom: 1em;
    }
    .view-more {
      text-align: center;
      margin-top: 3em;
      margin-bottom: 2em;
    }
    .view-more-text {
      width: 100%;
    }
  }

  @media (max-width: 400px) {
    .project-image {
      margin-bottom: 0.5em;
      height: auto;
    }
  }

  
</style>