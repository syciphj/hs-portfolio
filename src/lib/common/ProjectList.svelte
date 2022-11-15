<script lang="ts">
  import test from '$lib/assets/images/thumbnail-sample.png'
  import icon from '$lib/assets/icons/more-icon.svg';
  import ProjectItem from '$lib/common/Project.svelte';
  import type { Project, ProjectMetaData } from '$lib/services/projects.service';
  import Image from '$lib/common/Image.svelte';
  import {ImageCloudinaryService, key} from '$lib/services/image-formatter.service';
  import { setContext } from 'svelte';
	import ProjectCard from '$lib/common/Project.svelte';
  setContext(key, new ImageCloudinaryService());

  export let projects : ProjectMetaData[];
  debugger;
  const thumbnailParams = {
    width: 350
  }

  const testThumbnailURL = 'lift-thumbnail_ulqrrq'
</script>

<h1>Projects</h1>
<section class="project-grid">
  {#each projects as project }
  <div class="project-card">
    <a class="card-grid" href="/projects/{project.slug}">
      <div class="project-thumbnail">
        <Image imgPath={testThumbnailURL} params={thumbnailParams} sizes="(max-width: 700px) 100vw, 350px" />
      </div>
      <!-- <picture class="project-thumbnail">
        <img src={test} alt="test">
      </picture> -->
      <h2 class="project-title">{project.title}</h2>
      
      <ul class="roles">
        {#if project.roles}
          {#each project.roles as role}
          <li>{role}</li>
          {/each}
        {:else}
          <li>Design</li>
        {/if}
      </ul>
      
      <div class="icon">
        <img class="more-icon" src={icon} alt='view more icon'>
      </div>
      
    </a>
  </div>
  {/each}
</section>

<style>
  a:hover {
    text-decoration: none;
  }

  .project-grid {
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 5em 2em;
  }

  .card-grid {
    display:grid;
    grid-template-rows: 150px 100px 40px 25px;;
    grid-template-columns: repeat(4, 25%);
  }

  .project-thumbnail {
    width: 100%;
    margin: 0;
    grid-column: 1 / 5;
    grid-row: 1 / 3;
    overflow: hidden;
  }

  .project-title {
    margin: 1em 0 0.2em 0;
    grid-column: 1 / 4;
    grid-row: 3 / 3;
  }
  
  ul.roles {
    margin: 0;
    grid-column: 1 / 4;
    grid-row: 4 / 4;
  }

  .icon {
    height: 40px;
    width: 40px;
    background-color: black;
    border-radius: 100%;
    grid-column: 4 / 5;
    grid-row: 3 / 5;
    justify-self: end;
    align-self: center;
    display: flex;
    margin-right: 0.2em;
  }

  .more-icon {
    padding: 12px;
  }
</style>