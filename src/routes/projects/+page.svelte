<script lang="ts">
  import ProjectList from '$lib/common/ProjectList.svelte';
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<svlete:head>
  <title>Projects</title>
  <meta name="description" content="Full list of projects" />
</svlete:head>

<ProjectList projects={data.projects}/>

<!-- <section class="project-grid">
<div class="project-card">
  <a class="thumbnail-link" href="/projects/lift">
    <figure class="project-thumbnail">
      <img src={test} alt="test">
    </figure>
    <span>Lift</span>
  </a>
</div>
<div class="project-card">
  <a class="thumbnail-link" href="/projects/lift">
    <figure class="project-thumbnail">
      <img src={test} alt="test">
    </figure>
    <span>Sage</span>
  </a>
</div>
<div class="project-card">
  <a class="thumbnail-link" href="/projects/lift">
    <figure class="project-thumbnail">
      <img src={test} alt="test">
    </figure>
    <span>Insight</span>
  </a>
</div>
<div class="project-card">
  <a class="thumbnail-link" href="/projects/lift">
    <figure class="project-thumbnail">
      <img src={test} alt="test">
    </figure>
    <span>HPPI</span>
  </a>
</div>
<div class="project-card"></div>
<div class="project-card"></div>
</section> -->
