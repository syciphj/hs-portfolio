<script lang="ts">
  import Image from '$lib/common/Image.svelte';
  import type {ImageParams} from '$lib/services/image-formatter.service';
  const imagePaths = {
    liftMobile: 'lift-highlight_yb3vxp',
    liftDesktop: 'lift-desktop-highlight_ozpecm',
    easimed: 'easimed-highlight_xwgoqb'
  };

  const projectImageParams : ImageParams = {
    width: 600
  }
</script>

<section>
  <h1>Selected commercial projects</h1>
  <div class="project-container">

    <!-- Lift Mobile -->
    <div class="project-card">
      <div class="project-blurb">
        <h2>Lift Mobile</h2>
        <ul class="roles">
          <li>UX</li>
          <li>Design</li>
        </ul>
        <p>Lift was a commercial health & wellness app curated for companies to customize their own wellness programs.
          Life Mobile was the customer-facing app.
        </p>
        <a href="/projects/lift" class="nav-button">view details</a>
      </div>
      <div class="project-image">
        <Image imgPath={imagePaths.liftMobile} params={projectImageParams} sizes="(max-width: 700px) 100vw, 450px" />
      </div>
      <!-- <picture class="project-image">
        <source srcset="{lift_webp}, {lift_webp2x} 2x, {lift_webp3x} 3x" type="image/webp">
        <img  loading="lazy"
              decoding="async"
              src={lift_fallback} 
              srcset="{lift_fallback} 600w, {lift_fallback2x} 1200w, {lift_fallback3x} 1800w "
              sizes="(max-width: 700px) 100vw, 450px"
              alt="Lift Sample Images">
      </picture> -->
    </div>

    <!-- Lift CMS -->
    <div class="project-card">
      <div class="project-image">
        <Image imgPath={imagePaths.liftDesktop} params={projectImageParams} sizes="(max-width: 700px) 100vw, 450px" />
      </div>
      <!-- <picture class="project-image">
        <source sizes="(max-width: 600px) 100vw, 50vw"
                srcset={lift_desktop_webp} type="image/webp">
        <img  loading="lazy"
              decoding="async"
              height="400" width="500"
              src={lift_desktop_fallback}
              alt="Lift Desktop CMS Sample Images">
      </picture> -->
      <div class="project-blurb text-right">
        <h2>Lift CMS</h2>
        <ul class="roles flex-end">
          <li>UX</li>
          <li>Design</li>
          <li>Fullstack development</li>
        </ul>
        <p>Lift CMS was the the desktop app that controlled the events and wellness programs behind the scenes. </p>
        <a href="/projects/lift" class="nav-button">View details</a>
      </div>
    </div>

    <!-- Easimed Brand-->
    <div class="project-card">
      <div class="project-blurb">
        <h2>Easimed</h2>
        <ul class="roles">
          <li>Design</li>
          <li>Branding</li>
          <li>Frontend development</li>
        </ul>
        <p>Easimed was the umbrella brand that provided several healthcare applications. I created the marketing site for Easimed to showcase its different products.
        </p>
        <a href="/projects/lift" class="nav-button">View Details</a>
      </div>
      <div class="project-image">
        <Image imgPath={imagePaths.easimed} params={projectImageParams} sizes="(max-width: 700px) 100vw, 450px" />
      </div>
      <!-- <picture class="project-image">
        <source sizes="(max-width: 600px) 100vw, 50vw" 
                srcset={easimed_webp} 
                type="image/webp">
        <img  loading="lazy"
              decoding="async"
              height="400" width="500"
              src={easimed_fallback} 
              alt="Lift Desktop CMS Sample Images"
          >
      </picture> -->
    </div>


  </div>
</section>



<style>
  h1 {
    font-weight: 700
  }
  
  section {
    margin-top: 5em;
  }

  .text-right {
    text-align: right;
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
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .project-blurb {
    width: 40%;
    align-self: center;
  }

  .project-blurb h2 {
    font-size: 2.5rem;
    margin: 0;
  }

  .project-blurb p {
    margin-bottom: 2rem;
  }

  .project-image {
    width: 450px;
    overflow: hidden;
  }

  /* .project-image:hover :first-child{
    transform: scale(1.2)
  }
`
  .project-image :first-child{
    transition: height 0.5s ease-in-out, transform 0.6s ease-in-out; 
  } */

  ul.roles {
    display:flex;
    flex-direction: row;
    list-style: none;
    padding: 0; 
  }

  ul.roles li {
    padding-right: 0.5em;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.8rem;
  }

  ul.roles li:after {
    padding-left: 0.5em;
    content: "|"
  }

  ul.roles li:last-of-type:after {
    content: "";
    padding: 0;
  }

  ul.roles li:last-of-type {
    padding: 0;
  }

  @media (max-width: 800px) {
    .project-image {
      width: 400px;
    }
  }

  @media (max-width: 700px) {
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
  }

  @media (max-width: 300px) {
    .project-image {
      margin-bottom: 0;
      height: auto;
    }
  }

</style>