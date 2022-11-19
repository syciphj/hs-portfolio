<script lang="ts">
   import test from '$lib/assets/logos/test.webp'
   import base from '$app/paths'
   import type { Project } from '$lib/services/projects.service'
   let project: Project;
</script>

<div class="project-card">
  <a class="thumbnail-link" href={base + '/projects/lift'}>
    <figure class="project-thumbnail">
      <img src={test} alt="test">
    </figure>
    <span>Lift</span>
  </a>
</div>